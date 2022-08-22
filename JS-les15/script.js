const menuBody = document.querySelector('.menu__body');
const search = document.querySelector('.txt-item');
const searchLimit = search.getAttribute('maxlength');
const searchCounter = document.querySelector('.menu__body span');
searchCounter.innerHTML = searchLimit;

search.addEventListener("keyup", setCounter);
search.addEventListener("keydown", function (event){
    if (event.repeat) setCounter();
})

document.addEventListener("click", menu);
document.addEventListener("keydown", function (event){
    if (event.key === 'Escape') menuBody.classList.remove("menu-active");
})

function menu(event){
    if (event.target.closest('.menu__btn')){
        menuBody.classList.toggle("menu-active");
    }
    if (!event.target.closest('.menu')){
        menuBody.classList.remove("menu-active");
    }
}

function setCounter() {
    const counterResult = searchLimit - search.value.length;
    searchCounter.innerHTML = counterResult;
}