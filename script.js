
const addBtn = document.querySelector('.btn');
const textarea = document.querySelector('textarea');
const noteCon = document.querySelector('.noteContainer');
const placeholder = document.querySelector('#placeholder');

function addNote() {
    let h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode('Note 1'));

    let p = document.createElement('p');
    p.appendChild(document.createTextNode(textarea.value));

    let btn = document.createElement('button');
    btn.appendChild(document.createTextNode('View Detail'));

    let div = document.createElement('div');
    div.classList.add('noteArea');
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);

    placeholder.classList.add('delete');

    noteCon.appendChild(div);
}

addBtn.addEventListener('click', addNote);