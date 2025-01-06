//export const hello = "Hello World!!"; 
//hello 라는 변수를 내보내겠다(받을때도 같은 변수로 받아야해)
//다른 자바스크립트에서도 사용할 수 있도록 내보내는거 export
//무조건 선언해줘야해 export const~~ = ~~ (안전하게 주고받을 수 있게끔)

/* 기본 내보내기 */
export const number = 123;
//변수 없이 값 자체만 내보낼때
//-> default는 하나만 사용 가능 
// -> import 부분에서 중괄호 없이 맨 앞에 와야해 

//const hello = "Hello World"
export default "helloworld"

export const str = "홍길동";
export const arr = [1, 2, 3];

export const func= ()=>{ 
    console.log("func가 호출됨")
}
//export function func()=>{}