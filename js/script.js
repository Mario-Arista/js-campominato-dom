// dichiaro elemento in cui creare gioco
const gridElement = document.querySelector(".row");

// dichiaro button
const ButtonElement = document.querySelector("#start-button");

// Inizio evento al click 

ButtonElement.addEventListener("click", function(event){

    // Prevengo eventuali problemi
    event.preventDefault()

    // // resetto la griglia in maniera tale da non creare una nuava griglia ogni
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

    // Dichiaro l'array con numeri casuali
    const randomNumers = randomNumberEasy(numberOfCells);
    console.log("numeri con bombe LIVELLO FACILE", randomNumers);

    // Faccio vedere punteggio
    document.querySelector(".hidden-points").classList.remove("d-none");

    // dichiaro contatore iniziando da stringa 0000
    let punteggioPerClick = document.querySelector(".counter");

    // dichiaro contatore punteggio
    let counter = 0;

    for (let i = 1; i < numberOfCells +1; i++) {

        // creo un elemento
        const newElement = document.createElement("div");

        // aggiungo la classe square
        newElement.classList.add("square");

        // aggiungo i numeri nelle celle
        newElement.innerText = i;

        //aggiungo il nuovo elemento alla row
        gridElement.append(newElement);

        // eventi al chick sulle celle del gioco
        newElement.addEventListener("click", function() {

            // se la cella ha una bomba 
            if (randomNumers.includes(i)) {
                
                this.classList.add("bomb");
                console.log("è stata cliccata la cella con bomba:", this);
                this.innerText = "BOMB!";

                // Messaggio "hai perso"
                document.querySelector(".hidden-lost").classList.remove("d-none");
                
                // BONUS 1
                // Utente non può cliccare più su altre celle
                gridElement.classList.add("no-more-click");


                // BONUS 2
                const everyCellList = gridElement.querySelectorAll(".square");
    
                for(let i = 0; i < everyCellList.length; i++) {
                    // per ogni cella della griglia
            
                    if(randomNumers.includes(Number(everyCellList[i].innerText))) {
                        everyCellList[i].classList.add("bomb");
                        everyCellList[i].innerText = "BOMB!";

                    }
                }

            // se la cella non ha una bomba   
            } else {

                counter += 0;

                this.classList.add("active");
                punteggioPerClick.innerHTML = "";

                counter++; 
                punteggioPerClick.innerText = counter;
            }
            



        });

        
    }

});


// Funzione che mi genera 16 numeri random diversi

function randomNumberEasy(max) {

    const arrayEasy = [];

    while (arrayEasy.length < 16) {
        const random100Numbers = Math.floor(Math.random() * max) + 1;

        if (!arrayEasy.includes(random100Numbers)){
            arrayEasy.push(random100Numbers);
        }
    }

    return arrayEasy;
}


