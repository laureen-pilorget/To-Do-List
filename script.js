console.log ("hello World")

const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

console.log(addToDoButton)
console.log(toDoContainer)
console.log(inputField)


addToDoButton.addEventListener('click', function() {
    //vérifier si l'input n'est pas vide
    let paragraph;
    if(inputField.value != ""){
        //si l'input n'est pas vide, créer un paragraphe
        paragraph = document.createElement('p')
    }
    //valoriser ce paragraphe avec le contenu de l'input
    paragraph.innerText= inputField.value

    //styliser le paragraphe
    paragraph.classList.add('paragraphe_style')

    //insérer le paragraph dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph);

    //vider l'input quand le paragraphe est ajouté
    inputField.value = "";

    
    //barrer le paragraphe quand on clique dessus
    paragraph.addEventListener('click',function(){
        paragraph.classList.add('paragraph_click')
    })

    //supprimer la tâche quand on double clique dessus
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})
