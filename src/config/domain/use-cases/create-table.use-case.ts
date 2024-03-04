

export interface CreateTableUseCase {
   execute: (params: CreateTableOptions) => string
};

export interface CreateTableOptions {
   base: number;
   limit?: number;
};





export class CreateTable implements CreateTableUseCase{
    constructor () {
    };


execute({base, limit=5}: CreateTableOptions) {
    let outPutMessage= ``

    for(let i=1; i<=limit; i++){
    outPutMessage += `${base} x ${i} = ${base * i}\n`
    }

    return `\n${outPutMessage}\n \n${base}`
 }


}












