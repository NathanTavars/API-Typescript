import express from 'express';
import {
    getAllNovoclientesController,
    addNovoclienteController,
    getNovoclienteByIdController,
    updateNovoclienteController,
    deleteNovoclienteController,
} from '../controllers/clienteController';
import { getAllNovoclientes } from '../models/clienteModel';

const router = express.Router();

router.get('/', getAllNovoclientesController);
router.post('/', addNovoclienteController);
router.get('/:id', getNovoclienteByIdController);
router.put('/:id', updateNovoclienteController);
router.delete('/:id', deleteNovoclienteController);

export default router;
