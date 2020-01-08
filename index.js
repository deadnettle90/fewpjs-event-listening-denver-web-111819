
function addingEventListener() {
    const inputButton = document.querySelector("#input")
    inputButton.addEventListener('click', () => {
        alert('i was clicked!!');
    })
}
addingEventListener();