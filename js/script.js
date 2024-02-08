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

    // Dichiaro i 3 array con numeri casuali
    const randomNumers100Cells = randomNumberEasy();
    console.log("numeri con bombe LIVELLO FACILE", randomNumers100Cells);
            
    const randomNumers81Cells = randomNumberMedium();
    console.log("numeri con bombe LIVELLO MEDIUM", randomNumers81Cells);
            
    const randomNumers49Cells = randomNumberDifficult();
    console.log("numeri con bombe LIVELLO DIFFICILE", randomNumers49Cells);


    
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

            if (difficultyChoice == "facile" && randomNumers100Cells.includes(i)) {
                this.classList.add("bomb");
                console.log("è stata cliccata la cella con bomba:", this);
                newElement.innerText = "";
                
            }

            if (difficultyChoice == "medio"  && randomNumers81Cells.includes(i)) {
                this.classList.add("bomb");
                console.log("è stata cliccata la cella con bomba:", this);
                newElement.innerText = "";
            }

            if (difficultyChoice == "difficile"  && randomNumers49Cells.includes(i)) {
                this.classList.add("bomb");
                console.log("è stata cliccata la cella con bomba:", this);
                newElement.innerText = "";
            }

            this.classList.add("active");
            console.log("è stata cliccata la cella senza bomba:", this);
            
            

        });

        
    }

});


// Funzione che mi genera 16 numeri random diversi tra 1 e 100

function randomNumberEasy() {

    const arrayEasy = [];

    while (arrayEasy.length < 16) {
        const random100Numbers = Math.floor(Math.random() * 100) + 1;

        if (!arrayEasy.includes(random100Numbers)){
            arrayEasy.push(random100Numbers);
        }
    }

    return arrayEasy;
}

// Funzione che mi genera 16 numeri random diversi tra 1 e 81

function randomNumberMedium() {

    const arrayMedium = [];

    while (arrayMedium.length < 16) {
        const random81Numbers = Math.floor(Math.random() * 81) + 1;

        if (!arrayMedium.includes(random81Numbers)){
            arrayMedium.push(random81Numbers);
        }
    }

    return arrayMedium;
}

// Funzione che mi genera 16 numeri random diversi tra 1 e 49

function randomNumberDifficult() {

    const arrayDifficult = [];

    while (arrayDifficult.length < 16) {
        const random49Numbers = Math.floor(Math.random() * 49) + 1;

        if (!arrayDifficult.includes(random49Numbers)){
            arrayDifficult.push(random49Numbers);
        }
    }

    return arrayDifficult;
}




