// console.log(foo);    // ReferenceError : foo is not defined
// let foo;
// let 키워드로 선언한 변수를 변수 선언문 이전에 참조하면 참조 에러 (ReferenceError) 가 발생함.

// console.log(z);  // undefined
// var z;

//var 키워드로 선언한 변수는 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 "선언 단계" 와 "초기화 단계" 가 한번에 진행됨.
//선언 단계에서 실행 컨텍스트의 렉시컬 환경, 즉 스코프에 변수 식별자를 등록하여 자바스크립트 엔진에 변수의 존재를 알림
//그리고 즉시 초기화 단계에서 undefined 로 변수를 초기화함.

// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행됨
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.

// console.log(foo);	// undefined

// var foo;
// console.log(foo);	// undefined

// foo = 1;	// 할당문에서 할당 단계가 실행됨
// console.log(foo);	// 1

