
// this code has been modified from https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57
// review when using verifyUser

import { Router, Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { verifyJWT } from "../auth/verifyJWT";

const { JWT_SECRET } = process.env as { JWT_SECRET: string };

interface RequestWithBody extends Request {
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

router.post('/register', async (req: RequestWithBody, res: Response) => {
  console.log('----------- POST register: ', req.body);
	console.log('email: ', req.body.email);

	// check if user is already in the db and send them to the login page if they are
	const existingUser = await User.findOne({ email: req.body.email });
	
	if (existingUser) {
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
		}
		catch (err) {
			res.status(500).json({ message: `registration failed - ${err}` });
		}
	}
});

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email: loginEmail, password: loginPassword } = req.body;

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
						const payload = {	id: user._id,	};
						// req.session = { isLoggedIn: true };
						jwt.sign(
							payload, 
							JWT_SECRET, 
							{ expiresIn: 86400 }, 
							(err, token) => {
								if (err) return res.json({ message: err });
								console.log('**************** user logged in ');
								res.set('Authorization', 'Bearer ' + token);
								return res.status(200).json({ 
									message: 'user logged in',
                  id: user._id,
                  token: 'Bearer ' + token
                });
							}
						);
					}
					else {
						return res.status(401).json({ message: 'Invalid email or password' });
					}
				})
				.catch(err => {
					console.log('err: ', err);
					res.status(500).json({ message: `login failed - ${err}` });
				});
		});
});

router.get('/isUserAuth', verifyJWT, (req: RequestWithBody, res: Response) => {
	console.log('/////// isUserAuth: ');
	console.log('req: ', req.body);

	res.status(200).json({ isLoggedIn: true });
});

// TODO: delete the token from sessionStorage 
// (which can be done through a simple button click that calls 
// sessionStorage.removeItem("token"));

// --- OLD LOGOUT ROUTE - to be deleted ---
// router.get('/logout', (req: Request, res: Response) => {
// 	req.session = undefined;
// 	res.redirect('/');
// });

router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('Welcome to protected route, logged in user');
});

export default router;
