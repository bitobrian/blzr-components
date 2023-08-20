function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function addDragStartListener(elementId) {
    document.getElementById(elementId).addEventListener("dragstart", dragstart_handler);
}