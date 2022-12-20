const entry = document.getElementById('entryForm');
const form = document.createElement('button');
let inputTitle;
let inputDesc;

form.setAttribute('id', 'theForm');
form.addEventListener('click', () => {
    inputTitle = prompt("Enter a title:");
    inputDesc = prompt("Enter a description:");
});
entry.appendChild('form');

const actionFactory = (title, desc) => {
    const actionItem = () => document.write(`${title}, ${desc}`);
    return { title, desc, actionItem };
};