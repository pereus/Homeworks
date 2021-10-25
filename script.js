(() => {
const inputEl = document.getElementById("input-field");
const buttonEl = document.getElementById("btn");

buttonEl.addEventListener('click', () => {
 console.log(inputEl.value);
    inputEl.value = '';
})
}
)();