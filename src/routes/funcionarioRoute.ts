import express from 'express';
import {
    getAllFuncionariosController,
    addFuncionarioController,
    getFuncionarioByIdController,
    updateFuncionarioController,
    deleteFuncionarioController,
} from '../controllers/funcionarioController';

const router = express.Router();

router.get('/', getAllFuncionariosController);
router.post('/', addFuncionarioController);
router.get('/:id', getFuncionarioByIdController);
router.put('/:id', updateFuncionarioController);
router.delete('/:id', deleteFuncionarioController);

export default router;
