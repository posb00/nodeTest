import { Router, Request, Response } from "express";
const router : Router = Router();
import { indexController } from '../controllers/indexController';

router.get('/', indexController.index);

router.get('/add',(req: Request,res: Response)=>{
    res.send('Form');
})

export default router;