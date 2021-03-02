
var numActivities = 0;

function addActivity(){
    // catturo l'elemento html dall'input
    let nActInp = document.getElementById("newActivity");
    if (nActInp.value.trim() != ""){
        // creazione elemento LI
        let nActItem = document.createElement("li");
        // popoliamo l'elemento LI
        nActItem.innerHTML = nActInp.value;
        // aggiungo anche l'evento click
        nActItem.onclick = function() {
            if (this.classList.contains("done")){
                this.classList.remove("done");
                this.classList.add("todo");
            } else {
                this.classList.remove("todo");
                this.classList.add("done");
            }     
        }
        // incrementiamo il contatore 
        numActivities++;
        //mettiamo il contatore nell'html
        document.getElementById("numActivities").innerHTML = numActivities;
        // aggiungo elemento alla lista "listActivity"
        document.getElementById("listActivity").appendChild(nActItem);
        //pulisco casella input
        nActInp.value = "";    
    }
}
function clearList(){
    numActivities = 0;
    document.getElementById("numActivities").innerHTML = numActivities;
    document.getElementById("listActivity").innerHTML = "";
}
function setItem(activity){
  
    if (activity.classList.contains("done")){
        activity.classList.remove("done");
        activity.classList.add("todo");
    } else {
        activity.classList.remove("todo");
        activity.classList.add("done");
    }

}