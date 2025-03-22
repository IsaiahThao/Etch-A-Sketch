userInput = 4;
container = document.querySelector('.container')
for (let i =0; i < userInput; i++ ){
    for (let j=0; j < userInput; j++ ){
        const element = document.createElement('div')
        element.id = 'grid'
        container.appendChild(element)
    }
}