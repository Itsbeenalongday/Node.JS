import * as fs from 'fs';

export const createResultFile = (fileName: string, fileContent: string) => {
  fs.writeFile(
    fileName,
    fileContent, 
    'utf8', 
    (error: any) => { 
      if(error){
        console.log(error);
      }else{
        console.log('result saved successful!'); 
      }
    });
}