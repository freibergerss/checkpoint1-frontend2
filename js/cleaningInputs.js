let submit2 = document.querySelector("#submit");
console.log(submit2)

//Adicionando novo evento ao input Submit que limpa os campos após o envio das informações
submit2.addEventListener("click", _ => {
    document.querySelector("#title").value = null;
    document.querySelector("#autor").value = null;
    document.querySelector("#description").value = null;
    document.querySelector("#image").value = null;
    document.querySelector("#rating").value = null;
   
})