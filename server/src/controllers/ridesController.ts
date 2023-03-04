
import { Router, Request, Response} from 'express';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
	console.log('-----------  GET profile');
	res.json('response from GET server');
	// const requests = await Email.find({ _user: req.user.id })
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
	console.log('----------- POST profile');
	res.json('response from POST server');
});

router.put("/edit/:id", async (req: Request, res: Response) => {
	console.log('-----------  PUT profile');
	res.json('response from PUT server');
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
	console.log('-----------  DELETE profile');
	res.json('response from DELETE server');
});

export default router;