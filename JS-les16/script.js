const mainForm = document.forms.mainform;
const text = mainForm.text;
const select = mainForm.select;

const textPlaceholder = text.placeholder;
console.log(textPlaceholder)

text.addEventListener("focus", function (e){
    text.placeholder = "";
})

text.addEventListener("blur", function (e){
    text.placeholder = textPlaceholder;
})

mainForm.addEventListener("focus", function (e){
    mainForm.classList.toggle("_focus");
    console.log("focus");
})

mainForm.addEventListener("blur", function (e){
    mainForm.classList.remove("_focus");
    console.log("unfocus");
})

select.addEventListener("change", function (e){
    console.log("Change select")
})