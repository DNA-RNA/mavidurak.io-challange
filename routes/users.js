import { Router } from 'express';
const router = Router();

router.get('/',(req,res) =>{
    console.log('text2');
    res.send('helllo');
});
export default router;
