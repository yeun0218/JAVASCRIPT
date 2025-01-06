
/*
import h, {number, str as name, arr, func} from './module.js'; //선언부에는 백틱사용 못해

console.log(" 여기는 main.js 입니다. ");
console.log("main.js : ", h);
console.log("main.js : ", number, name, arr, func);

//모듈을 사용하고 있으므로 html에서 타입 지정 해줘야해 
// 이름없는 데이터는 number로 받아
//str 이름 대신에 name 쓰겠다 "선언된 이름 as 바꾸고싶은 이름"
*/

import * as mod from './module.js';
console.log(mod.default);
console.log(mod.arr, mod.str, mod.number, mod.func);
//다 하나하나 불러오기 힘들때는 * 사용해서 전체 다 불러와  이때도 이름은 설정해줘야해

//import {a} from './a.js';
//import {b} from './b.js';
import {a, b} from './util.js'; //비슷한 형태의 js한꺼번에 가져오고 싶으면 그것만 js파일에 또 묶어서 

console.log(a(), b()); //함수 자체를 호출하면 return값 가져올 수 있어 

const parent = document.querySelector(".parent");
console.log(parent.innerHTML); //parent 안에 있는 거 확인하고 싶어 
