import express from 'express';
import {
getRoupaController, 
addRoupaController, 
getRoupaByIdController, 
updateRoupaController, 
deleteRoupaController, 
} from '../controllers/roupaController';
const router = express. Router();
router.get('/', getRoupaController );
router.post('/', addRoupaController); 
router.get('/:id', getRoupaByIdController); 
router.put('/:id', updateRoupaController);
router.delete('/:id', deleteRoupaController);
export default router;