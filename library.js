let Library= [];

// getting all elements from dom
const addbutton = document.getElementById('add-btn');
const over_lay = document.getElementById('overlay');
const bookshelf = document.getElementById('shelf');
const form = document.getElementById('form');
const form_container = document.getElementById('container2');
const submit= document.getElementById('submit');
const closeb = document.getElementById('close');

let formopen = false;

// function for cuntructor
function Booksconstruct(Title,Author,Pages,Read){

this.Title= Title;
this.Author=Author;
this.Pages=Pages;
this.Read=Read;

}

// fuction for adding books in array

function addBookstoarray(title,author,pages,read){
const book = new Booksconstruct(title,author,pages,read);
Library.push(book)
showdata(title,author,pages,read);

};

//Getting Data from Form 

submit.addEventListener('click' ,getdataform);
function getdataform(){
const title1 = document.getElementById('book').value;
const author1 = document.getElementById('author').value;
const pages1 = document.getElementById('pages').value;
const read1 = document.getElementById('read').value;


if(title1 == "" || author1 == "" || pages1 == "" || read1 == ""){
    alert("Please Enter Required Book Information!");
    return false;
}else{
    addBookstoarray(title1,author1,pages1,read1);
    closeform();
}
   form.reset();
   
}


let changevar = false;

// displaying data on page 

function showdata(til,au,pa,rea){

let showbook = document.createElement('div');

showbook.classList.add('book');




showbook.innerHTML = ` <h3>${til}</h3>
<p>Author: ${au}</p>
<p>Pages: ${pa}</p>
<div class="buttons">
    <button class="${rea}" id="change" onclick="changestatus(this)">Read: ${rea}</button>
    <button class="delete" id="delete" onclick="del(this)">Delete</button>
</div>`;



bookshelf.appendChild(showbook);



}

// delete button
function del(e){

    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);

}

//change status 
function changestatus(e){

   
    









    if(e.textContent == "Read: Yes"){
        e.textContent = "Read: No";
        e.style.backgroundColor = "#ce351d";
    }else {
        e.textContent = "Read: Yes";
        e.style.backgroundColor = "rgb(48, 85, 11)";
    }

    
  // (e.classList.contains("Yes") ?  e.classList.toggle("No") : e.classList.toggle("Yes"));
    
}




// putting events on buttons

addbutton.addEventListener('click',formOpenandClose);

function formOpenandClose(){

    if(formopen){
        form_container.style.transform = "scale(0)";
        over_lay.style.opacity = 0;
        form.reset();
        formopen = false;
    }else{
        form_container.style.transform= "scale(1)";
        over_lay.style.opacity = 1;
       form.reset();
        formopen = true;
    }
}

closeb.addEventListener('click', closeform);

function closeform(){
    form_container.style.transform = "scale(0)";
        over_lay.style.opacity = 0;
       form.reset();
        formopen = false;
}


