

let btn = document.getElementById('burger-btn');
let menu = document.getElementById('header-list');

btn.onclick = () =>{
    if(menu.className.includes('header-list-show')){
        menu.className = 'header-list';
    } else{
        menu.className += ' header-list-show';
    }
}
