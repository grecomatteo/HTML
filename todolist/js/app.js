
var numActivities = 0;

function addActivity(){
    // catturo l'elemento html dall'input
    let nActInp = document.getElementById("newActivity");
    
    if (nActInp.value.trim() != ""){
        // creazione dei vari elementi necessari
        let nActItem = document.createElement("li");
        let nActImg = document.createElement("img");
        let nActSpan = document.createElement("span");

        // qui imposto i parametri dell'immagine
        nActImg.src = "img/btn_delete.png";
        nActImg.onclick = function(event){
            // puntando al padre vado all'elemento LI, in posizione quindi superiore all'img
            let myList = event.target.parentNode;
            // ora poi punto al padre successiva che sarebbe tutta la lista
            // e faccio il remove dalla lista completa della lista ottenuta prima
            myList.parentNode.removeChild(myList);
            //aggiorno il contatore decrementando
            numActivities--;
            document.getElementById("numActivities").innerHTML = numActivities;
        }

        // qui imposto lo span
        nActSpan.innerHTML = nActInp.value;

        // aggiungo anche l'evento click
        nActSpan.onclick = function() {
            if (this.classList.contains("done")){
                this.classList.remove("done");
                this.classList.add("todo");
            } else {
                this.classList.remove("todo");
                this.classList.add("done");
            }     
        }

        // devo aggiungere i due figli al list item
        nActItem.appendChild(nActImg);
        nActItem.appendChild(nActSpan);

        // aggiungo elemento alla lista "listActivity"
        document.getElementById("listActivity").appendChild(nActItem);

        // incrementiamo il contatore 
        numActivities++;

        //mettiamo il contatore nell'html
        document.getElementById("numActivities").innerHTML = numActivities;

        //pulisco casella input
        nActInp.value = "";    
    }
}
function clearList(){
    numActivities = 0;
    document.getElementById("numActivities").innerHTML = numActivities;
    document.getElementById("listActivity").innerHTML = "";
}
