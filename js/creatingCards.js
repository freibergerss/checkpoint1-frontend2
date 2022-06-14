let submit = document.querySelector("#submit");
let cardsSection = document.querySelector(".cardsSection");

// Adicionando evento ao input Submit
submit.addEventListener("click", function(e){

    function createObject(){

//Seleção dos nós
        let titleValue = document.querySelector("#title").value;
        let autorValue = document.querySelector("#autor").value;
        let descriptionValue = document.querySelector("#description").value;
        let imageValue = document.querySelector("#image").value;
        let ratingValue = document.querySelector("#rating").value;

//Criação do objeto
        const objeto = [
            {
            title: titleValue,
            autor: autorValue,
            description: descriptionValue,
            rating: ratingValue,
            image: imageValue
            }
        ];

//Definindo condição que impede a criação de cards caso os campos obrigatórios não sejam preenchidos        
        if (titleValue == "" || ratingValue == "" || imageValue == ""){
            alert("Os campos obrigatórios (Título, Avaliação e Imagem) devem ser preenchidos")

//Definindo condição default que cria os cards a partir do objeto criado anteriormente            
        } else{
            for (let i of objeto){
                cardsSection.innerHTML += `
                    <div class="card">
                        <img class="img" src="${i.image}">
                        <h2>${i.title}</h2>
                        <p>(${i.autor})</p>
                        <p class="descricao">${i.description}</p>
                        <div class="score">
                            <p>${i.rating}</p>
                            <img class="star" src="./images/star.png">
                        </div>
                    </div>`
            };
    
        }
        
        e.preventDefault();
    }

    createObject();

});
