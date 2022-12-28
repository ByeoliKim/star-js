function foo () {
    console.log ('foo');
}

function bar() {
    console.log('bar');
}

// 타이머 함수 setTimeout 은 일정 시간이 경과한 이후에 콜백 함수 foo 를 호출함
// 타이머 함수 setTimeout 은 bar 함수를 블로킹하지 않는다.
setTimeout(foo, 3 * 1000);
bar();
// bar 호출 -> (3초 경과 후) foo 호출