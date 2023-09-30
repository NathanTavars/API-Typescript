export interface novaRoupa{
     roupaId: number; 
     modelo: string; 
     tamanho: string; 
     cor: string; 
     valor: number;

}

const roupas: novaRoupa [] = [];

export function getRoupa(): novaRoupa [] {
    return roupas


}

export function addRoupa (roupanova : novaRoupa): novaRoupa{
    roupas.push(roupanova);
    return roupanova;
}

export function getRoupaById(id: number): novaRoupa | undefined {
    return roupas.find((roup) => roup.roupaId === id);

}

export function updateRoupa (id: number, updatedRoupa: novaRoupa): novaRoupa | undefined{
    const index = roupas.findIndex((roup) => roup.roupaId === id);
    if (index !== -1){
        roupas[index] = { ...updatedRoupa, roupaId: id};
        return roupas [index];
    }
    return undefined; 
}
export function deleteRoupa(id: number): novaRoupa | undefined {
    const index = roupas.findIndex((roup) => roup.roupaId === id);
    if (index !== -1){
        const deletedR = roupas.splice(index, 1)[0]
        return deletedR;
    }
    return undefined;    

}




