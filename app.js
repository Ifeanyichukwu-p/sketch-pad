const gridSize = document.querySelector('.grid-size');
const copyInput = document.querySelector('#copy-input');
const promptMsg = document.querySelector('#prompt')
const apply = document.querySelector('.submit');
const btnBlack = document.querySelector('.black');
const btnGreen = document.querySelector('.green');
const gridContainer = document.querySelector('.grid-container');
let numberEntered;
let boxes;


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
        pixel.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'black';
        });
        pixel.style.backgroundColor = 'white';
        pixel.style.border = '1px solid yellow';
        gridContainer.insertAdjacentElement('beforeend',pixel);
    }

    
    

}

function colorDiv(){
    
}



