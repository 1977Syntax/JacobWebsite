// script.js

document.querySelectorAll('#cool-stuff li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on: ${item.textContent}`);
    });
});
