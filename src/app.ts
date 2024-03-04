import { ServerApp } from "./presentation/server-app"
import { yarg } from "./config/plugins/yargs.plugin"



(async () => {
   await main()
})()
 


async function main () {
   const {
      b: base, 
      l: limit, 
      s: show,
      n: name,
      d: destiny  } = yarg;
   ServerApp.run({base, limit, show, name, destiny});
};

