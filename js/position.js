const $elementExampleFirst = document.querySelector('.square-1')

const $elementExampleLast = document.querySelector('.square-2')

$elementExampleFirst.addEventListener('click', function(event){
    this.classList.toggle('elementExample_isActive')
    $elementExampleLast.classList.add('elementExemple_isActive')
})

$elementExampleLast.addEventListener('click', function(element){
    this.classList.toggle('elementExample_isActive')  
    $elementExampleFirst.classList.add('elementExemple_isActive')
})