var totalBox = 6
var header = document.querySelector('.header')
var guessCode = document.querySelector('#code')
var result = document.querySelector('.result')
var btnGrp = document.querySelectorAll('.btn__area button')
var resetBtn = document.querySelector('.reset')
var boxNode = document.querySelectorAll('.item')
var btnNode = document.querySelectorAll('.type')
var colors = []
var pickedColor


initialize()
function initialize() {
    guessCode.textContent = newColor;
    setColor();
    setFunc();
    resetFunc();
}

resetBtn.addEventListener('click', function() {
    resetFunc()
})

function setColor() {
    for(var i = 0; i < boxNode.length; i++) {
        boxNode[i].style.backgroundColor = colors[i]
        boxNode[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor
            console.log(clickedColor)
            console.log(pickedColor)
            if(clickedColor == pickedColor) {
                result.textContent = 'Wow ! You Guess The Correct Color'
                resetBtn.textContent = 'Play Again'
                matchAllColor(pickedColor)
            } else {
                this.style.backgroundColor = '#535353'
                result.textContent = 'Try Again'
            }
        })
    }
}

function setFunc() {
    for(var i = 0; i < btnNode.length; i++) {
        btnNode[i].addEventListener('click', function(){
            for(var i = 0; i< btnNode.length; i++) {
                btnNode[i].classList.remove('active')
            }
            this.classList.add('active')
            if(this.textContent === 'Easy'){
                totalBox = 3
            } else {
                totalBox = 6
            }
            resetFunc()
        })
    }
}
function resetFunc() {
    colors = randomColors(totalBox)
    pickedColor = selectColor()
    guessCode.textContent = pickedColor
	resetBtn.textContent = "Reset Color"
    for(var i = 0; i < boxNode.length; i++) {
        if(colors[i]) {
            boxNode[i].style.display = 'block'
            boxNode[i].style.backgroundColor = colors[i]
        } else {
            boxNode[i].style.display = 'none'
        }
    }
}

function matchAllColor(winColor) {
    for(var i = 0; i< boxNode.length; i++) {
        boxNode[i].style.backgroundColor = winColor
    }
    header.style.backgroundColor = winColor
}

function selectColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function randomColors(color) {
    var arr = []
    for(var i = 0; i<color; i++) {
        arr.push(newColor())
    }
    return arr
}


function newColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
