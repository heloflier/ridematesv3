
import { Router, Request, Response} from 'express';
import Ride from '../models/Ride';

const router = Router();

//=================================================
// 	Requests for a Ride
//=================================================

router.get('/:id', async (req: Request, res: Response) => {
	console.log('-----------  GET ride', req.params.id);
	const ride = await Ride.findById(req.params.id);
	res.json(ride);
	console.log('ride: ', ride);
});

router.post("/create", async (req: Request, res: Response) => {
	console.log('----------- POST ride');
	res.json('response from POST server');
});

router.put("/edit/:id", async (req: Request, res: Response) => {
	console.log('-----------  PUT ride');
	res.json('response from PUT server');
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
	console.log('-----------  DELETE ride');
	res.json('response from DELETE server');
});

export default router;