const bookArray = [];
const cells = document.querySelector("td");
const form = document.querySelector("form");
const table = document.querySelector("table");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const close = document.querySelector("#close");
const book1 = new Book("Ruby tutorial", "Micheal Hartl", 100, true);
const book2 = new Book("Python Programming", "Swaroop C H", 300, true);

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
  title=document.createElement('th')
  author=document.createElement('th')
  pages=document.createElement('th')
  read=document.createElement('th')
  table.appendChild(title).innerHTML="Title";
  table.appendChild(author).innerHTML="Author";
  table.appendChild(pages).innerHTML="Pages";
  table.appendChild(read).innerHTML="Read?";
  for (row = 0; row < bookArray.length; row++) {
    tr = document.createElement('tr');
    tdTitle = document.createElement('td');
    tdAuthor = document.createElement('td')
    tdPages = document.createElement('td')
    tdRead = document.createElement('td')
    deleteB = document.createElement('button')
    deleteB.dataset.name = row;
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPages);
    tr.appendChild(tdRead);
    tr.appendChild(deleteB).innerHTML="delete";
    tdTitle.innerHTML = bookArray[row].title;
    tdAuthor.innerHTML = bookArray[row].author;
    tdPages.innerHTML = bookArray[row].pages;
    tdRead.innerHTML = bookArray[row].read;
    table.appendChild(tr).dataset.name = row;
    console.log(tr.dataset)
  };
  let deletes=document.querySelectorAll("[data-name]")
  for(i=0;i < deletes.length;i++){
    deletes[i].addEventListener("click",function(e){
      console.log(e.target.dataset.name)
      removeBook(e.target.dataset.name)
      e.stopPropagation();
    });
  }
};

function removeBook(index) {
  bookArray.splice(index,1);
  while(table.hasChildNodes())
  {
   table.removeChild(table.firstChild);
 };
 createTable()
}

button.addEventListener("click", function(){
  container.style.display="block";
  button.style.display="none";
})

form.addEventListener("submit", function(e){
  e.preventDefault()
  button.style.display="block";
  container.style.display="none";
  title = form.elements["title"].value
  author = form.elements["author"].value
  pages = form.elements["pages"].value
  read = form.elements["read"].value
  let formBook = new Book(title,author,pages,read);
  addBookToLibrary(formBook);
  while(table.hasChildNodes())
  {
   table.removeChild(table.firstChild);
 };
 createTable()
});

close.addEventListener("click", function(){
  container.style.display="none";
  button.style.display="block";
});

addBookToLibrary(book1);
addBookToLibrary(book2);
createTable()