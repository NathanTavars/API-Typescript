import { Request, Response } from "express";
import { novaRoupa, getRoupa, addRoupa, getRoupaById, updateRoupa, deleteRoupa } from "../models/roupaModel";

export function getRoupaController(req: Request, res: Response): void {
    const roupas = getRoupa();
    res.json(roupas);
}

export function addRoupaController(req: Request, res: Response): void { 
const newRoupa: novaRoupa = req.body;
const superroupa = addRoupa(newRoupa);
res.status(201).json(superroupa);
}

export function getRoupaByIdController(req: Request, res: Response): void {
    const{id} = req.params;
    const roupaId = parseInt(id, 10);
    const superroupa = getRoupaById(roupaId);

    if (superroupa) {
        res.json(superroupa);
    }else {
        res.status(404).json({ message: 'roupa nao encontrada'});
    }
}

export function updateRoupaController(req: Request, res: Response): void {
    const { id } = req.params;
    const roupaId = parseInt(id, 10);
    const updatedRoupa: novaRoupa = req.body;

    const updated = updateRoupa(roupaId, updatedRoupa);
    if (updated) {
        res.json(updated);  
    }else {
        res.status(404).json({message: 'Roupa nao encontrada'});
    }
}

export function deleteRoupaController(req: Request, res: Response): void{
    const { id } = req.params;
    const roupaId = parseInt(id, 10);

    const deleted = deleteRoupa(roupaId);
    if (deleted){
        res.json(deleted);
    }else {
        res.status(404).json({message: 'roupa nao encontrada'});
    }
}
