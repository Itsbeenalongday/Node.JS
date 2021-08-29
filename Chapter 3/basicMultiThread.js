import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

import { cpus, arch, platform } from 'os';

const min = 2;

let primes = [];

const findPrimes = (start, range) => {
	let isPrime = true;
	let end = start + range;

	for(let i=start; i< end; ++i){
		for(let j=min; j < Math.sqrt(end); ++j){
			if( i !== j && i % j === 0){
				isPrime = false;
				break;
			}
		}
		if(isPrime) primes.push(i);
		isPrime = true;
	}
}

if(isMainThread){
	const max = 10000000;
	const threadCount = 8;
	const threads = new Set();
	const range = Math.ceil((max - min) / threadCount);
	let start = min;

	// 범위 분할
	for(let i = 0; i < threadCount; ++i){
		const wStart = start;
		threads.add(new Worker(__filename, { 
			workerData: {
				start: wStart,
				range,
			}
		}));
		start += range;
	}

	for(let worker of threads){
		worker.on('error', (err) => {
			throw err;
		});
		
		worker.on('exit', () => {
			threads.delete(worker);
			if(!threads.size){
        console.log(arch());
        console.log(platform());
        console.log(`cpu model: ${cpus()[0].model}`);
        console.log(`number of cores: ${cpus().length}`);
        console.log(primes.length);
      } 
		});

		worker.on('message', (msg) => {
			primes = primes.concat(msg);
		});
  }

} else {
	findPrimes(workerData.start, workerData.range);
	parentPort.postMessage(primes);
}