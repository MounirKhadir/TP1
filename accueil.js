const taskInput = document.getElementById("taskInput") ;
const addTaskBtn = document.getElementById("addTask") ;
const taskList = document.getElementById("taskList") ;

var task = 'Tache';
var i = 0;
// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et
//nouvelles lignes) au début et à la fin d'une chaîne.

addTaskBtn.addEventListener("click", addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !==""){
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = "";
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('id','delButton');
        deleteBtn.textContent = "Supprimer";
        const doneBtn = document.createElement("button");
        doneBtn.setAttribute('id','doneBtn')
        doneBtn.textContent = "Terminer";
        listItem.appendChild(doneBtn);
        doneBtn.addEventListener("click",() => {
            taskText.strike();
        })


         
        // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un
        //noeud existant en tant que dernier enfant d'un noeud parent particulier.
        listItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
        listItem.remove();
 });
 } else{
    alert("Veuillez entrer une tâche valide.");
 }

}