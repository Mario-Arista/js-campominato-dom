// dichiaro elemento in cui creare gioco
const gridElement = document.querySelector(".row");

// dichiaro button
const ButtonElement = document.querySelector("#start-button");

// Inizio evento al click 

ButtonElement.addEventListener("click", function(event){

    // Prevengo eventuali problemi
    event.preventDefault()

    // // resetto la griglia in maniera tale da non cerare una nuava griglia ogni
    // // volta che clicco
    gridElement.innerHTML = "";

    // valore della select
    const difficultyChoice = document.querySelector("#level-select").value;

    // dichiaro container 
    const containerElement = document.getElementById("grid");

    // metto un contatore
    let numberOfCells;

    if (difficultyChoice == "difficile") {

        numberOfCells = 49;
        containerElement.classList.add("container-7");

    } else if (difficultyChoice == "medio") {

        numberOfCells = 81;
        containerElement.classList.add("container-9");

    } else if (difficultyChoice == "facile") {

        numberOfCells = 100;
        containerElement.classList.add("container-10");

    } else {

        alert("Scegli un livello per giocare!");
    }

    for (let i = 1; i < numberOfCells +1; i++) {

        // creo un elemento
        const newElement = document.createElement("div");

        // aggiungo la classe square
        newElement.classList.add("square");

        // aggiungo i numeri nelle celle
        newElement.innerText = i;

        //aggiungo il nuovo elemento alla row
        gridElement.append(newElement);

        //aggiungo che se clicco il nuovo elemento
        // cambia background color
        newElement.addEventListener("click", function() {

            this.classList.add("active");
            console.log("è stata cliccata la cella numero:", this);
            

        });

        
    }

});