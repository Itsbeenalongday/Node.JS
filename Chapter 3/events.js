const EventEmitter = require('events');

const customEvent = new EventEmitter();

const Event1FirstCallback = () => {
	console.log('event1 occur first');
};

customEvent.addListener('event1', Event1FirstCallback);

customEvent.addListener('event1', () => {
	console.log('event1 occur second');
});

customEvent.addListener('event1', () => {
	console.log('event1 occur third');
});

const Event2FirstCallback = () => {
	console.log('event2 occur');
};

customEvent.on('event2', Event2FirstCallback);

customEvent.once('event3', () => {
	console.log('event3 occur exactly once');
});

customEvent.emit('event1');
customEvent.emit('event2');
customEvent.emit('event3');

customEvent.removeListener('event1', Event1FirstCallback); // 이벤트 리스너 1개만 제거

customEvent.emit('event1');
customEvent.emit('event2');
customEvent.emit('event3');

customEvent.removeAllListeners('event1'); // 이벤트 리스너 모두 제거(여러개일 경우)

customEvent.off('event2', Event2FirstCallback);

customEvent.emit('event1');
customEvent.emit('event2');
customEvent.emit('event3');

customEvent.listenerCount('event1'); // 이벤트 리스너의 개수를 반환