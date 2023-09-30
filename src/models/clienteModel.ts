export interface Novocliente {
    clienteId : number
    clienteNome : string
    clienteEmail : string
    clienteTelefone : number
    clienteCEP : number
}

const novoclientes : Novocliente [] = [];

export function getAllNovoclientes(): Novocliente[]{
    return novoclientes;
}

export function addNovocliente(novocliente: Novocliente): Novocliente{
    novoclientes.push(novocliente);
    return novocliente;
}

export function getNovoclienteById(id: number): Novocliente | undefined{
    return novoclientes.find((cliente) => cliente.clienteId === id);
}

export function updateNovocliente(id: number, updatedNovocliente: Novocliente): Novocliente | undefined {
    const index = novoclientes.findIndex((cliente) => cliente.clienteId === id);
    if (index !== -1){
        novoclientes[index] = { ...updatedNovocliente, clienteId: id };
        return novoclientes[index];
    }
        return undefined;
}

export function deleteNovocliente( id: number): Novocliente | undefined{
    const index = novoclientes.findIndex ((cliente) => cliente.clienteId === id);
    if (index !== -1){
        const deletedNovocliente = novoclientes.splice(index, 1)[0];
        return deletedNovocliente;
    }
    return undefined; 
}