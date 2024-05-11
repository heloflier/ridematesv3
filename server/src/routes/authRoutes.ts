import { Router, Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

const { JWT_SECRET } = process.env as { JWT_SECRET: string };

interface RequestWithBody extends Request {
	// body: { [key: string]: string | undefined }
	body: { [key: string]: string }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.loggedIn) {
		next();
		return;
	}

	res.status(403);
	res.send('Not permitted');
}

const router = Router();

// TODO: this get is not needed after the front end is done: react will take care of that
// and we can just modify the post to send the token in the header and check if user  
// already exists in the db
router.get('/register', (req: Request, res: Response) => {
	res.send(`
		<form method="POST">
			<div>
        <label>Email</label>
        <input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
	`);
});

router.get('/login', (req: Request, res: Response) => {
	res.send(`
		<form method="POST">
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
	`);
});

router.post('/register', async (req: RequestWithBody, res: Response) => {
  console.log('----------- POST register: ', req.body);

	// check if user is already in the db and send them to the login page if they are
	console.log('email: ', req.body.email);
	const takenEmail = await User.findOne({ email: req.body.email })
	
	if (takenEmail) {
		console.log('------------------- User already exists');
		res.json({ message: 'User already exists' });
	} 
	else {
		try {
			const { email, password } = req.body;
			const hashedPassword = await bcrypt.hash(password, 10);
			const user = new User({ email, password: hashedPassword });
			console.log('user: ', user);
			await user.save();
			res.status(201).json({ message: 'User created' });
			// res.redirect('/logout');
		}
		catch (err) {
			res.status(500).json({ message: `registration failed - ${err}` });
		}
	}
});

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email: loginEmail, password: loginPassword } = req.body;
	console.log('----------- loginEmail: ', loginEmail);
	console.log('----------- loginPassword: ', loginPassword);
	// res.send(res);

	User.findOne({ email: loginEmail })
		.then(user => {
			// if (user) {
			// 	const token = jwt.sign({ email }, JWT_SECRET);
			// 	res.cookie('jwt', token, { httpOnly: true });
			// 	req.session = { loggedIn: true };
			// 	res.redirect('/');
			// }
			// else {
			// 	res.send('Invalid email or password');
			// }

			if (!user) {
				return res.status(401).json({ message: 'Invalid email or password' });
			}

			bcrypt.compare(loginPassword, user.password)
				.then(isMatch => {
					if (isMatch) {
						const payload = {
							id: user.id,
						}
						jwt.sign(
							payload, 
							JWT_SECRET, 
							{ expiresIn: 86400 }, 
							(err, token) => {
								if (err) return res.json({ message: err });
								return res.status(200).json({ message: 'user logged in', token: 'Bearer ' + token });
							}
						);
					}
					else {
						return res.status(401).json({ message: 'Invalid email or password' });
					}
				})
				.catch(err => {
					console.log('++++++++++++++++ loginPassword: ', loginPassword);
					console.log('**************** user.password: ', user.password);
					console.log('err: ', err);
					res.status(500).json({ message: `login failed - ${err}` });
				});
		});
});

// TODO: this get is not needed after the front end is done: react will take care of that
// router.get('/', (req: Request, res: Response) => {
// 	if (req.session && req.session.loggedIn) {
// 		res.send(`
// 			<div>
// 				You are logged in
// 				<a href="/logout">Log Out</a>
// 			</div>
// 		`);
// 	}
// 	else {
// 		res.send(`
// 			<div>
// 				You are not logged in
// 				<a href="/login">Log In</a>
// 			</div>
// 		`);
// 	}
// });

// TODO: delete the token from localStorage 
// (which can be done through a simple button click that calls 
// localStorage.removeItem("token"));

// --- OLD LOGOUT ROUTE - to be deleted ---
// router.get('/logout', (req: Request, res: Response) => {
// 	req.session = undefined;
// 	res.redirect('/');
// });

router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('Welcome to protected route, logged in user');
});

export default router;
