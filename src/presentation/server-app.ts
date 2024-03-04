import { number } from "yargs"
import { CreateTable } from "../config/domain/use-cases/create-table.use-case"
import { SaveTable } from "../config/domain/use-cases/save-file.use-case"


interface runOptions {
    base:  number,
    limit?:  number,
    show:  boolean,
    name: string,
    destiny: string,
};




export class ServerApp {
static run({base, limit, show, name, destiny}: runOptions){
    console.log("server running...")
   let table = new CreateTable().execute({base, limit})
   let wasSave = new SaveTable()
   .execute({fileContent: table, fileDestination: `${destiny}/tabla del ${base}`, fileName: name})

    if(show)console.log(table)

}


}