import { Router, Request, Response} from 'express';

const router = Router();

//=================================================
// 	displaying all the requests for a user
//=================================================

router.get('/profile', async (req: Request, res: Response) => {
	console.log('in profile', req, res);
	res.json('response from server');
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

export { router };
