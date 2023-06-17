window.onload = function () {
    document.getElementById("edit-book").style.display = 'none';
    
    fetchBooks();

    document.getElementById("submit").onclick = function () {
        saveBook();
    }
}

async function fetchBooks() {
    let html = `
    <tr>
    <th>ID</th>
    <th>Title</th>
    <th>ISBN</th>
    <th>Published Date</th>
    <th>Author</th>
    <th>Actions</th>
    </tr>`;
    const response = await fetch("http://localhost:3000/books");
    const books = await response.json();
    books.forEach(book =>
        html += `<tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.ISBN}</td>
        <td>${book.publishedDate}</td>
        <td>${book.author}</td>
        <td>
        <a href='' onclick="deleteBook('${book.id}')">Delete</a>
        <a href='#' onclick="updateBook('${book.id}')">Update</a>
        </td>
        </tr>`);

    document.getElementById("book-list").innerHTML = html;
}

async function saveBook() {

    await fetch("http://localhost:3000/books", {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById("title").value,
            ISBN: document.getElementById("ISBN").value,
            publishedDate: document.getElementById("publishedDate").value,
            author: document.getElementById("author").value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    fetchBooks();
    clearData();
}

async function deleteBook(bookId) {

    const url = `http://localhost:3000/books/${bookId}`;

    await fetch(url, {
        method: 'DELETE',
    });
    fetchBooks();
}

async function updateBook(bookId) {

    document.getElementById("edit-book").style.display = 'block';
    document.getElementById("add-book").style.display = 'none';

    const url = `http://localhost:3000/books/${bookId}`;

    const response = await fetch(url);
    const book = await response.json();
    document.getElementById("edt-title").value = book.title;
    document.getElementById("edt-ISBN").value = book.ISBN;
    document.getElementById("edt-publishedDate").value = book.publishedDate;
    document.getElementById("edt-author").value = book.author;

    document.getElementById("update").onclick = function () {
        update(url);
    }

}

async function update(url) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: document.getElementById("edt-title").value,
            ISBN: document.getElementById("edt-ISBN").value,
            publishedDate: document.getElementById("edt-publishedDate").value,
            author: document.getElementById("edt-author").value
        })
    });
    if(response){
        document.getElementById("edit-book").style.display = 'none';
        document.getElementById("add-book").style.display = 'block';
    }
    fetchBooks();
    
}

function clearData(){
    document.getElementById("title").value = "";
    document.getElementById("ISBN").value = "";
    document.getElementById("publishedDate").value = "";
    document.getElementById("author").value = "";
}