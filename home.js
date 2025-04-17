function task() {

    var input = document.getElementById("input").value + " ";
    var list = document.getElementById("doIt");
    var li = document.createElement("li");

    li.className = "selectionné";
    var doneButton = document.createElement("button");
    doneButton.innerHTML = "Tache terminé";
    doneButton.onclick = moveDoIt;
    doneButton.className = "Déplacé dans Terminé";
    li.appendChild(document.createTextNode(input));
    li.appendChild(doneButton);
    list.appendChild(li);

    li.className = "selectionné";
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.onclick = del;
    deleteButton.className = "Supprimé";
    li.appendChild(deleteButton);
    list.appendChild(li); 
  }
  
  function moveDoIt(prev) {
    prev.preventDefault();
    var btn = prev.target;
    var li = btn.closest("li");
    btn.remove();
    document.getElementById("didIt").appendChild(li);
  }

  function del(prev) {
    prev.preventDefault();
    var btn = prev.target;
    var li = btn.closest("li");
    li.remove();
}
