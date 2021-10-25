(() => {
const inputEl = document.getElementById("input-field");
const buttonEl = document.getElementById("btn");
const listEl = document.getElementById("list");
const templateEl = document.getElementById('template').innerHTML;
const onDeleteEls = evt => {
    evt.target.parentElement.remove()
}
const onThroughEl = evt => {
    evt.target.nextElementSibling.classList.add('strikethrough-text')
}

buttonEl.addEventListener('click', () => {
    const contentEl = inputEl.value;
    if (!contentEl) {
        return;
    }
    const listItemEl = document.createElement('li');
    listItemEl.innerHTML = templateEl.replace('{{contentEl}}', contentEl);
    inputEl.value = '';

    listEl.append(listItemEl);
    listItemEl.querySelector('#btn-delete').addEventListener('click', onDeleteEls);
    listItemEl.querySelector('.checkbox').addEventListener('change', onThroughEl)
    
})
}
)()
