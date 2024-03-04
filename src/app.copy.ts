import yargs, { number } from "yargs";
import { yarg } from "./config/plugins/yargs.plugin";

import fs from "fs"


const {b:base, l:limit, s:show} = yarg




let table = "";

const  table5 = (type: number) => {

const headerMessage = `
==============================================
            tabla del ${type}
==============================================
`
for(let i=0; i<=limit; i++){
table += `${type} x ${i} = ${type * i}\n`
}
return `${headerMessage}\n \n${table}`
}

let result = table5(base)

if(yarg.s){
    console.log(result)
}



const rout = "outputs"


fs.mkdirSync(rout, {recursive: true})
fs.writeFileSync(`${rout}/Tabla.txt`, result)






