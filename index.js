const userInput = 16;
let width = Math.floor(420/userInput)
container = document.querySelector('.container')

function createGrid(){
    for (let i =0; i < userInput; i++ ){
        for (let j=0; j < userInput; j++ ){
            const element = document.createElement('div')
            element.id = 'grid'
            element.style.width=`${width}px`;
            element.style.height=`${width}px`;
            container.appendChild(element)
        }
    }
}
