const entry = document.getElementById('entryForm');
const form = document.createElement('button');

entry.appendChild('form');

const actionFactory = (title, desc) => {
    const actionItem = () => document.write(`${title}, ${desc}`);
    return { title, desc };
};