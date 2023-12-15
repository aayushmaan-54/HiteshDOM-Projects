'use strict'

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');
const books = document.querySelector('.books');
let title_value, author_value, year_value;

btn.addEventListener('click', function (e) {
    e.preventDefault();
    title_value = title.value;
    author_value = author.value;
    year_value = year.value;

    books.insertAdjacentHTML('beforeend',
    `<tbody>
        <tr>
            <td>&nbsp;${title_value}</td>
            <td>&nbsp;${author_value}</td>
            <td>&nbsp;${year_value}</td>
        </tr>
    </tbody>`);
});
