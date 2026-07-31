const generates =document.querySelector("#generates");
const para =document.querySelector("#para");
let len=15;
let useletter=true;
let useLower=true;
let useUpper=true;
let useNum=true;

generates.addEventListener("click",()=>{
 console.log("Buttin pressed");
 para.innerText = generaPass(len,useletter,useLower,useUpper,useNum);
});

let generaPass = (len,useletter,useLower,useUpper,useNum) => {
    const lower = "abcdefghijklmnopqrstuvqwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter = "!@#$%&*()?";
    const numss = 1234567890;
    let char = "" ;
    if (useUpper) {
        char+=upper;
    }
    if (useletter) {
        char+=letter;
    }
    if (useNum) {
        char+=numss;
    }
    let pass = "";
    for(let i = 0; i < len; i++){
        let idx = Math.floor(Math.random()*char.length);
        pass += char[idx];
    }
    return pass;
}