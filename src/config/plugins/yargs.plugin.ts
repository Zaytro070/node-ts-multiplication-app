import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
 .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "multiplication_table_base"
 })
 .option("l", {
    alias: "limit",
    type: "number",
    describe: "Multiplication_table_limit"
 })
 .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show_table"
 })
 .option ("n", {
   alias: "name",
   type: "string",
   default: "multiplication-table",
   describe: "file name"
 })
 .option ("d", {
   alias: "destiny",
   type: "string",
   default: "outputs",
   describe: "file destination"
 })
.parseSync();