import {Request, Response} from 'express';
import { Novocliente, getAllNovoclientes, addNovocliente, getNovoclienteById, updateNovocliente, deleteNovocliente }
from '../models/clienteModel';

export function getAllNovoclientesController(req: Request, res: Response): void {
    const novoclientes = getAllNovoclientes();
    res.json(novoclientes);
}

export function addNovoclienteController(req: Request, res: Response): void { 
    const newNovocliente: Novocliente = req.body;
    const novocliente  = addNovocliente(newNovocliente);
    res.status(201).json(novocliente);
}

export function getNovoclienteByIdController(req: Request, res: Response): void {
    const{id} = req.params;
    const novoclienteId = parseInt(id, 10);
    const novocliente = getNovoclienteById(novoclienteId);

    if (novocliente) {
        res.json(novocliente);
    }else {
        res.status(404).json({ message: 'Cliente not found **'});
    }
}

export function updateNovoclienteController(req: Request, res: Response): void {
    const { id } = req.params;
    const novoclienteId = parseInt(id, 10);
    const updatedNovocliente: Novocliente = req.body;

    const updated = updateNovocliente (novoclienteId, updatedNovocliente);
    if (updated) {
        res.json(updated);  
    }else {
        res.status(404).json({message: 'Cliente not found **'});
    }
}

export function deleteNovoclienteController(req: Request, res: Response): void{
    const { id } = req.params;
    const novoclienteId = parseInt(id, 10);

    const deleted = deleteNovocliente(novoclienteId);
    if (deleted){
        res.json(deleted);
    }else {
        res.status(404).json({message: 'Cliente not found **'});
    }
}
