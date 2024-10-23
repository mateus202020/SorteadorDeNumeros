const form = document.querySelector(".form");
const fild = document.querySelector(".fild");
const input_1 = document.getElementById("number");
const input_2 = document.getElementById("min");
const input_3 = document.getElementById("max");
const btn_srt = document.querySelector(".btn-srt");
const btn_nv = document.querySelector(".btn_nv");
const result = document.querySelector(".results");
const number = document.querySelector(".number");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dado1 = input_1.value; 
    const dado2 = input_2.value; 
    const dado3 = input_3.value;  

    


    getDrawn(dado1,dado2,dado3);

    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
})

btn_srt.addEventListener('click', e => {
    form.classList.add("disable")
    result.classList.remove("disable")
})

btn_nv.addEventListener("click", e => {
    form.classList.remove("disable")
    result.classList.add("disable")
})


function getDrawn(a,b,c){

    const numeroasgerados = []

    for(let i = 0; i < a; i++){
        
        b = Math.ceil(b);
        c = Math.floor(c)

        const calc = Math.floor(Math.random() * (b - c ) + c);
        numeroasgerados.push(calc)
    }

    const lista = numeroasgerados.forEach( e => {
        const element = document.createElement("div");

        element.innerHTML = `
              <label>${e}</label>
        `
        number.append(element)

        btn_nv.addEventListener("click", e => {
           element.classList.add("disable")
        })
        
    })
    

    return lista
}


