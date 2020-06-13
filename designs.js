// color & size input
const colorPicker = document.getElementById('colorPicker');
const Height = document.getElementById('inputHeight');
const Width = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

// to make the grid
function makeGrid() {
    for (let x = 0; x < Height.value;x++){
        const row = pixelCanvas.insertRow(0);
        for (let y = 0; y < Width.value; y++){
            row.insertCell(0);
        }
    }}

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit',function(event) {
    pixelCanvas.innerHTML='';
    event.preventDefault();
    makeGrid();
});
pixelCanvas.addEventListener('click', function(event){
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = colorPicker.value;
    }
})


