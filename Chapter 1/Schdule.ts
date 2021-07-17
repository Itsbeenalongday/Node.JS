import { createResultFile } from "./util";

let iter = 0;

let startTime = Date.now();

const countBusy = () => {
  // counting 마지막 turn 999000000 ~
  if( iter < 1e9 - 1e6 ) setTimeout(countBusy);

  // 작업 단위를 백만으로 끊음
  // 1. 첫 번째 부분 카운팅: 1 ~ 1000000
  // 2. 두 번째 부분 카운팅: 1000001 ~ 2000000
  do {
    iter += 1;
  }while(iter % 1e6 != 0);

  if(iter === 1e9){
    createResultFile(
    'result_schedule_ts.txt',
    `Time spent processing: ${Date.now() - startTime}ms`
    );
  }
};

countBusy();