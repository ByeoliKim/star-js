function getFn() {
    const pv = 5;
    return function (n) {
        return pv + n;
    }
}
const defVal = 100;
const add5Fn = getFn();
console.log(add5Fn(30) + defVal);   //135

const x = 1;
function foo() {
    const x = 10;
    bar();
}
function bar() {
    console.log(x)
}
foo();  //1
bar();  //1

const b = 1;

function outer() {
	const b = 10;
    const inner = function () { console.log(b); }
    return inner;
}

// outer 함수를 호출하면 중첩 함수 inner 를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.

const innerFunc = outer();
innerFunc();    //10

//inner 함수는 (중첩 함수) outer 함수 (외부 함수) 의 변수를 참조하고 있기 때문에 코드의 실행 결과에서는 외부 함수인 outer 함수의 지역 변수 x 의 값인 10이 출력된다. 이러한 중첩 함수를 클로저라고 함!

const counter = (function () {
    // 카운터 상태 변수
    let num = 0;

    // 클로저인 메서드를 갖는 객체를 반환
    // 객체 리터럴은 스코프를 만들지 않음
    // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경임
    
    return {
        // num: 0, 프로퍼티는 pbulic 하므로 은닉되지 않음!
        increase() {
            return ++num;
        },
        decrease() {
            return num > 0 ? --num : 0;
        }
    };
}());

console.log(counter.increase());	//1
console.log(counter.increase());	//2
console.log(counter.decrease());	//1
console.log(counter.decrease());	//0

// 함수를 인수로 전달받고 함수를 반환하는 고차함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter 를 기억하는 클로저를 반환한다.
function makeCounter (predicate) {
    // 카운터 상태를 유지하기 위한 자유 변수
    let counter = 0;

    // 클로저를 반환
    return function () {
        // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
        counter = predicate(counter);
        return counter;
    };
}

// 보조함수
function increase2(n) {
    return ++n;
}

// 보조함수
function decrease2(n) {
    return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환함
const increaser = makeCounter(increase2);
console.log(increaser());   //1
console.log(increaser());   //2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동되지 않음
const decreaser = makeCounter(decrease2);
console.log(decreaser());   //-1
console.log(decreaser());   //-2

//독립된 카운터가 아닌, 연동하여 증감이 가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 함.

//함수를 반환하는 고차 함수
//이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter 를 기억하는 클로저를 반환한다.
const counter2 = (function () {
    //카운터 상태를 유지하기 위한 자유 변수
    let counter2 = 0;
    //함수를 인수로 전달받아 클로저를 반환
    return function (predicate) {
        //인수로 전달받은 보조 함수에 상태 변경을 위임함
        counter2 = predicate(counter2);
        return counter2;
    };
}());

//보조함수
function increase3 (n) {
    return ++n;
}

//보조함수
function decrease3 (n) {
    return --n;
}

//보조함수를 전달하여 호출
console.log(counter2(increase3));
console.log(counter2(increase3));
console.log(counter2(decrease3));
console.log(counter2(decrease3));
//자유변수를 공유하고 있돵.