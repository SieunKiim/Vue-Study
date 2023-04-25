// 함수 선언문
function sum(a,b){
    return a+b;
}

// 함수 표현식
var sum = function(a,b){
    return a+b;
}

// 화살표 함수 표현식
var sum = (a,b) => {
    return a+b;
}

// 화살표 함수 표현식 2
var sum = (a,b) => a+b;

// 화살표 함수 타입 지정

var sum = (a: number, b: number): number => {
    return a+b;
}