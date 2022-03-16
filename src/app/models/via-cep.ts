export class ViaCEP {

    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    
    constructor(object: Partial<ViaCEP>) {
        Object.assign(this, object);
    }
}