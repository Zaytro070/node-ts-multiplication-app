
import fs from "fs"

export interface ClassTable{
 execute: (options: DataSource) => boolean
};

export interface DataSource {
    fileContent:      string;
    fileDestination?: string;
    fileName?:        string;
};



export class SaveTable implements ClassTable {

constructor(){
}

execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "multiplication-table",
}: DataSource): boolean{

  try {
    fs.mkdirSync(fileDestination, {recursive: true})
    fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
    console.log("Se creo con exito!!!!")
    return true

  } catch(error) {
    console.error(`Error: ${error} `)
    return false
  }


  
 };

};