// const menubar = document.getElementById("myBox")
// console.log(menubar);


// function onToggle() {
//     menubar.classList.toggle("!left-0")
// }

function onToggle() {
    const menu = document.getElementById('myBox');
    if (menu.style.left === '0%') {
        menu.style.left = '-100%';
    } else {
        menu.style.left = '0%';
    }
}