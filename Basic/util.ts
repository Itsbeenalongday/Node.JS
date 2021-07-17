declare const require: any

const fs = require('fs');

interface FileProps {
  fileName: string;
  fileContent: string;
}

export const createResultFile = <FileProps>(fileName: FileProps, fileContent: FileProps) => {
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