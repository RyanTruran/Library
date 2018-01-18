let bookArray = [];

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

let book1 = new Book("Ruby tutorial", "Micheal Hartl", 100, true)
let book2 = new Book("Python Programming", "Swaroop C H", 300, true)

addBookToLibrary(book1);
addBookToLibrary(book2);

const table = document.querySelector('table');
function createTable(){
for (row = 0; row < bookArray.length; row++) {
    tr = document.createElement('tr');
        tdTitle = document.createElement('td');
        tdAuthor = document.createElement('td')
        tdPages = document.createElement('td')
        tdRead = document.createElement('td')
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        tdTitle.innerHTML = bookArray[row].title;
        tdAuthor.innerHTML = bookArray[row].author;
        tdPages.innerHTML = bookArray[row].pages;
        tdRead.innerHTML = bookArray[row].read;
    table.appendChild(tr);
};
};

let cells = document.querySelector("td")
const form = document.querySelector("form")
form.addEventListener("submit", function(e){
  e.preventDefault()
  title = form.elements["title"].value
  author = form.elements["author"].value
  pages = form.elements["pages"].value
  read = form.elements["read"].value
  let formBook = new Book(title,author,pages,read);
  addBookToLibrary(formBook);
 
    while(table.hasChildNodes())
    {
       table.removeChild(table.firstChild);
    }
  createTable()
  console.log(bookArray)
});

createTable()