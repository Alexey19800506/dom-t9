const tasksList = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderTasks = listItems => {
    const listElem = document.querySelector('.list');
    const listItemElems = listItems.sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);
            return listItemElem;
        });
    listElem.append(...listItemElems);
};
renderTasks(tasksList);
const elem1 = document.body.children[1].children[1].children[0];
elem1.remove();
const elem2 = document.body.children[1].children[1].children[0];
elem2.remove();