//sleep 함수는 일정 시간 (delay) 이 경과한 이후에 콜백 함수 (func) 를 호출함.

function sleep(func, delay) {
    // Date.now() 는 현재 시간을 숫자 (ms) 로 반환한다.
    const delayUntil = Date.now() + delay;

    // 현재 시간 (Date.now()) 에 delay 를 더한 delayUntil 이 현재 시간보다 작으면 계속 반복함
    while (Date.now() < delayUntil);
    // 일정 시간 (delay) 이 경과한 이후에 콜백 함수 (func) 를 호출함
    func();
}

function foo () {
    console.log('foo');
}

function bar () {
    console.log('bar');
}

// sleep 함수는 3초 이상 실행됨
sleep(foo, 3 * 1000);
// bar 함수는 sleep 함수의 실행이 종료된 이후에 호출되므로 3초 이상 블로킹됨
bar();
// (3초 경과 후) foo 호출 -> bar 호출

// 현재 실행 중인 태스크가 종료될 때까지 다음에 실행될 태스크가 대기하는 방식을 동기(Synchronous) 처리라고 한다.
// 동기 처리 방식은 태스크를 순서대로 하나씩 처리하므로 실행 순서가 보장된다는 장점이 있지만, 앞선 태스크가 종료할 때까지 이후 태스크들이 블로킹된다는 단점이 있음.