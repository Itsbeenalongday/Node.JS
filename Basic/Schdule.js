"use strict";
exports.__esModule = true;
var util_1 = require("./util");
var i = 0;
var start = Date.now();
var count = function () {
    // counting 마지막 turn 999000000 ~
    if (i < 1e9 - 1e6)
        setTimeout(count);
    // 작업 단위를 백만으로 끊음
    // 1. 첫 번째 부분 카운팅: 1 ~ 1000000
    // 2. 두 번째 부분 카운팅: 1000001 ~ 2000000
    do {
        i += 1;
    } while (i % 1e6);
    if (i === 1e9) {
        util_1.createResultFile('result_schedule_ts.txt', "Time spent processing: " + (Date.now() - start) + "ms");
    }
};
