const notes_cont = document.querySelector('.notes-cont');
const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notes_cont.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorage(){
    localStorage.setItem('notes', notes_cont.innerHTML);
}

createBtn.addEventListener('click', ()=>{
    let input_box = document.createElement('p');
    let img = document.createElement('img');
    input_box.className = 'input-box';
    input_box.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    notes_cont.appendChild(input_box).appendChild(img);
});


notes_cont.addEventListener('click', function(e) {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});