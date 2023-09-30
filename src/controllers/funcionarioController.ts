import { Request, Response } from "express";
import { Funcionario, getAllFuncionarios, addFuncionario, getFuncionarioById, updateFuncionario, deleteFuncionario } from "../models/funcionarioModel";

export function getAllFuncionariosController(req: Request, res: Response): void {
    const funcionarios = getAllFuncionarios();
    res.json(funcionarios);
}

export function addFuncionarioController(req: Request, res: Response): void { const newFuncionario: Funcionario = req.body;
const funcionario = addFuncionario(newFuncionario);
res.status(201).json(funcionario);
}

export function getFuncionarioByIdController(req: Request, res: Response): void {
    const{id} = req.params;
    const funcionariosId = parseInt(id, 10);
    const funcionario = getFuncionarioById(funcionariosId);

    if (funcionario) {
        res.json(funcionario);
    }else {
        res.status(404).json({ message: 'Funcionario nao encontrado'});
    }
}

export function updateFuncionarioController(req: Request, res: Response): void {
    const { id } = req.params;
    const funcionarioId = parseInt(id, 10);
    const updatedFuncionario: Funcionario = req.body;

    const updated = updateFuncionario(funcionarioId, updatedFuncionario);
    if (updated) {
        res.json(updated);  
    }else {
        res.status(404).json({message: 'Funcionario nao encontrado'});
    }
}

export function deleteFuncionarioController(req: Request, res: Response): void{
    const { id } = req.params;
    const funcionarioId = parseInt(id, 10);

    const deleted = deleteFuncionario(funcionarioId);
    if (deleted){
        res.json(deleted);
    }else {
        res.status(404).json({message: 'Funcionario nao encontrado'});
    }
}
