const gridSize = document.querySelector('.grid-size');
const copyInput = document.querySelector('#copy-input');
const promptMsg = document.querySelector('#prompt')
const apply = document.querySelector('.submit');
const gridContainer = document.querySelector('.grid-container');
const resetGrid = document.querySelector('.reset');


let numberEntered;
let color ;
let click = true;


gridSize.addEventListener('keyup',function(){
    
        numberEntered = gridSize.value;
    
        copyInput.textContent = 'x' + ' ' + ' ' + numberEntered;
    


});

apply.addEventListener('click',function(){
    if (numberEntered <= 1 || numberEntered < 0 || numberEntered > 99 || isNaN(numberEntered) || numberEntered === '' ){
        promptMsg.textContent = 'Make sure the number you entered is between 2 and 99';
    }else{
    drawGrid(numberEntered);
    promptMsg.textContent = '';
    }
})

const drawGrid = (numberEntered) => {
    let squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${numberEntered},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numberEntered},1fr)`;


    for(i = 0; i < numberEntered**2 ; i++){
        pixel = document.createElement('div');
        pixel.addEventListener('mouseover', colorDiv);
        pixel.style.backgroundColor = 'white';
        gridContainer.insertAdjacentElement('beforeend',pixel);
    }

    
    

}

function colorDiv(){
    if(color == 'random'){
        this.style.backgroundColor = randColor();
    }else if (color == 'black'){
        this.style.backgroundColor = 'black';
    }else if (color == 'red'){
        this.style.backgroundColor = 'red';
    }else if (color == 'green'){
        this.style.backgroundColor = 'green';
    }else if (color == 'gray'){
        this.style.backgroundColor = 'gray';
    }else{
        this.style.backgroundColor = 'white';
    }

    
}

function changeColor (choice){
    color = choice
}
    


resetGrid.addEventListener('click', () => {
    let squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    gridSize.value = '';
    promptMsg.textContent = 'Play by selecting gridsize of numbers between 2 and 99';
    copyInput.textContent = '';
})







function  randColor() {
    const R = Math.floor((Math.random() * 255) + 1);
    const G = Math.floor((Math.random() * 255) + 1);
    const B = Math.floor((Math.random() * 255) + 1);
    return `rgb(${R}, ${G}, ${B})`
}
