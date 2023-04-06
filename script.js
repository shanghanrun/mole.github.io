const grid = document.querySelector('.grid')
const squares =document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft =document.querySelector('#time-left')
const score = document.querySelector('#score')

let result =0
let hitPosition 
let counter = 15

let timerId = null
let counterId = null


function randomSquare(){
  squares.forEach(square=> {
    square.classList.remove('mole')
    //classList에 add, remove, toggle 메소드를 사용할 수 있다.
  })
  let randNumber = Math.floor(Math.random() * 9) //0~8
  let randSquare = squares[randNumber]//인덱스 0~8
  randSquare.classList.add('mole')
  hitPosition = randSquare.id 
  if(timerId === 9) { clearInterval(timerId)}
}

squares.forEach(square=>{
  square.addEventListener('mousedown', ()=>{
    if (square.id === hitPosition){
      result++
      console.log(result)
      score.innerHTML = result
      hitPosition = null
    }
  })
})

function moveSquare(){  
  timerId = setInterval(randomSquare, 800)
  // timerId는 clearInterval(timerId) 할 때 사용할 값
}
function countIt(){  
  counterId = setInterval(countDown, 800)  
}

function countDown(){
  counter --
  timeLeft.innerHTML = counter 
  if (counter == 0){
    clearInterval(counterId);
    grid.remove()
    const endMessage = document.createElement('h1')
    endMessage.innerHTML = "Game Over"
    // alert('game over')
    if (result >= 8){
      document.body.appendChild(endMessage)
      const img = document.createElement('img')
      const images = ['1.png', '2.png', '3.png', '4.png']
      const randNum = Math.floor(Math.random()*4)
      console.log(randNum)
      const chosenImage = images[randNum]
      img.src = `images/${chosenImage}` 
      img.style.width = '600px'
      img.style.height = '800px'
      document.body.appendChild(img) 
      // 혹은 img.setAttribute('src', `images/${chosenImage}`)  
      
    }
  }   
}

moveSquare();
countIt();
// 이렇게 함수를 직접 실행할 수도 있지만, 그냥 
// let timerId = setInterval(randomSquare, 1000)
// let countId = setInterval(countDown, 1000)
// 식으로 해도 된다.