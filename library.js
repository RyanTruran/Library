const bookArray = [];
const cells = document.querySelector("td");
const form = document.querySelector("form");
const table = document.querySelector("table");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const close = document.querySelector("#close");
const book1 = new Book("Ruby tutorial", "Micheal Hartl", 100, "Read");
const book2 = new Book("Python Programming", "Swaroop C H", 300, "Not read");

function Book(title,author,pages,read){
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
 this.info = function(){
  return title+" by "+author+", "+pages+" pages"+", "+read;
};
};

function addBookToLibrary(book){
  bookArray.push(book);
};

function createTable(){
  title=document.createElement('th');
  author=document.createElement('th');
  pages=document.createElement('th');
  read=document.createElement('th');
  edit=document.createElement('th');
  table.appendChild(title).innerHTML="Title";
  table.appendChild(author).innerHTML="Author";
  table.appendChild(pages).innerHTML="Pages";
  table.appendChild(read).innerHTML="Read";
  table.appendChild(edit).innerHTML="Edit";
  for (row = 0; row < bookArray.length; row++) {
    tr = document.createElement('tr');
    tdTitle = document.createElement('td');
    tdAuthor = document.createElement('td');
    tdPages = document.createElement('td');
    tdRead = document.createElement('td');
    toggleC = document.createElement('td');
    deleteC = document.createElement('td');
    deleteB = document.createElement('button');
    toggleB = document.createElement('button');
    toggleB.classList.add("mystyle");
    toggleB.dataset.number = row;
    deleteB.dataset.name = row;
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPages);
    tr.appendChild(toggleC).appendChild(toggleB).innerHTML=bookArray[row].read
    tr.appendChild(deleteC).appendChild(deleteB).innerHTML="Delete book";
    tdTitle.innerHTML = bookArray[row].title;
    tdAuthor.innerHTML = bookArray[row].author;
    tdPages.innerHTML = bookArray[row].pages;
    table.appendChild(tr);
  };
  let deleteObj=document.querySelectorAll("[data-name]")
  for(i=0;i < deleteObj.length;i++){
    deleteObj[i].addEventListener("click",function(e){
      removeBook(e.target.dataset.name);
    });
    let toggleButton=document.querySelectorAll(".mystyle");
    for(i=0;i < toggleButton.length;i++){
      toggleButton[i].addEventListener("click", function(e){
       bookArray[e.target.dataset.number].toggle();
     });
    };
  };
};

Book.prototype.toggle = function(){
  this.read == "Read" ? this.read="Not read" : this.read="Read";
  while(table.hasChildNodes())
  {
   table.removeChild(table.firstChild);
 };
 createTable()
};

function removeBook(index) {
  bookArray.splice(index,1);
  while(table.hasChildNodes())
  {
   table.removeChild(table.firstChild);
 };
 createTable();
}

button.addEventListener("click", function(){
  container.style.display="block";
  button.style.display="none";
});

form.addEventListener("submit", function(e){
  e.preventDefault();
  button.style.display="block";
  container.style.display="none";
  title = form.elements["title"].value;
  author = form.elements["author"].value;
  pages = form.elements["pages"].value;
  read = form.elements["read"].value;
  let formBook = new Book(title,author,pages,read);
  addBookToLibrary(formBook);
  while(table.hasChildNodes())
  {
   table.removeChild(table.firstChild);
 };
 createTable();
});

close.addEventListener("click", function(){
  container.style.display="none";
  button.style.display="block";
});

addBookToLibrary(book1);
addBookToLibrary(book2);
createTable();