// Selecting elements
const paragraph1 = document.getElementById('paragraph1');
const paragraph2 = document.getElementById('paragraph2');
const btnAdd = document.getElementById('btnAdd');
const btnChange = document.getElementById('btnChange');
const btnHighlight = document.getElementById('btnHighlight');

// Adding event listeners
btnAdd.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a dynamically added paragraph.';
    document.getElementById('container').appendChild(newParagraph);
});

btnChange.addEventListener('click', function() {
    paragraph1.textContent = 'This is the updated content of the first paragraph.';
});

btnHighlight.addEventListener('click', function() {
    paragraph2.classList.toggle('highlight');
});