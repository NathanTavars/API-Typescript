export interface Funcionario{
    Nome: string;
    email: string;
    telefone: number;
    funcionarioId: number;
}

const funcionarios: Funcionario[] = [];

export function getAllFuncionarios(): Funcionario[]{
    return funcionarios;
}

export function addFuncionario(funcionario: Funcionario): Funcionario{
    funcionarios.push(funcionario);
    return funcionario ;
}

export function getFuncionarioById(id: number): Funcionario | undefined {
    return funcionarios.find((funci) => funci.funcionarioId === id);
}

export function updateFuncionario(id: number, updatedFuncionario: Funcionario): Funcionario | undefined {
    const index = funcionarios.findIndex((funci) => funci.funcionarioId === id);
    if(index !== -1){
        funcionarios[index] = {...updatedFuncionario, funcionarioId: id};
        return funcionarios[index];
    }
    return undefined;
}

export function deleteFuncionario(id: number): Funcionario | undefined {
    const index = funcionarios.findIndex((funci) => funci.funcionarioId === id);
    if (index !== -1) {
        const deletedFuncionario = funcionarios.splice(index, 1)[0];
        return deletedFuncionario;
    }
    return undefined;
}
