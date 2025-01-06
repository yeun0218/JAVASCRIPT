//일종의 라이브러리 자주 호출하는 거 미리 만들어둬
function log(msg){
    const debug = document.getElementById("debugConsole");

    if(debug !== null){
        debug.innerHTML += msg + "<br>";
    }
}