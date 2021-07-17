const run = () => {
  console.log('run after 3 sec');
};

const mainContext = () => {
  console.log('start program');
  setTimeout(run, 3000); 
  // go to background run(), timer and then after 3 second event loop push task queue,
  // if callstack is empty then, run() execute else wait until callstack is empty
  console.log('end program');
}

mainContext();