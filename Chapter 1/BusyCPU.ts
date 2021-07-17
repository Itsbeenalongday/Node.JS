
import { createResultFile } from "./util";

let i = 0;
let start = Date.now();

const count = () => {
  // stressed cpu
  for(let j=0; j < 1e9; ++j){
    i+=1;
  }

  const spentTime = Date.now() - start;

  createResultFile(
    'result_busy_cpu.txt',
    `Time spent processing: ${spentTime}ms`
  )
}

count();