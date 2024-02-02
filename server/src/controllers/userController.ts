import { Router, Request, Response} from 'express';
import User from '../models/User';

const router = Router();

//=================================================
// 	Requests for a User
//=================================================

router.get('/:id', async (req: Request, res: Response) => {
	console.log('-----------  GET user', req.params.id);
	const user = await User.findById(req.params.id);
	res.json(user);
	console.log('user: ', user);
	// 	// .select({
	// 		// recipients: false
	// 	// })
	// 	.then(function(results) {
	// 		console.log('in /api/request GET route');
	// 		console.log('results: ', results);
	// 		res.json(results);
	// 	});
});

router.post("/create", async (req: Request, res: Response) => {
	console.log('----------- POST user');
	res.json('response from POST server');
});

router.put("/edit/:id", async (req: Request, res: Response) => {
	console.log('-----------  PUT user');
	res.json('response from PUT server');
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
	console.log('-----------  DELETE user');
	res.json('response from DELETE server');
});

export default router;
