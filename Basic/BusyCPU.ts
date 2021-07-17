const fs = require('fs'); 

let i = 0;
let start = Date.now();

const count = () => {
  // stressed cpu
  for(let j=0; j < 1e9; ++j){
    i+=1;
  }

  const spentTime = Date.now() - start;

  fs.writeFile(
    'result.txt',
    `Time spent processing: ${spentTime}ms`, 
    'utf8', 
    (error) => { 
      if(error){
        console.log(error);
      }else{
        console.log('result saved successful!'); 
      }
    });
}

count();