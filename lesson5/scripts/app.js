const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const myFavChap = input.value;

    if (myFavChap != "") {
        input.value = "";

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listBtn.setAttribute("class","delete");
        const ariaLabel = "delete" + " " + myFavChap;
        listBtn.setAttribute("aria-label",ariaLabel);

        listItem.appendChild(listText);
        listText.textContent = myFavChap;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        })
    }

    input.focus();
})