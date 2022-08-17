console.log(document.querySelector('.lesson__link'));

const bodyChildren = document.body.children;
var sayHi;
var yuonchii;
for (const item of bodyChildren){
    if(item.hasAttribute('data-say-hi')){
        sayHi = item;
        break;
    }
}
if(sayHi) console.log(sayHi.dataset.sayHi);
console.log();


