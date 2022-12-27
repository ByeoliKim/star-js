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