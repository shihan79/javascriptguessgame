let player1input = document.querySelector('.player1input')
let player1button = document.querySelector('.player1button')
let error1 = document.querySelector('.error1')
let player2input = document.querySelector('.player2input')
let player2button = document.querySelector('.player2button')
let error2 = document.querySelector('.error2')
let chance = document.querySelector('.chance')
let player2 = document.querySelector('.player2')
let count = 5
// player1input
player1button.addEventListener('click',function(){
    console.log(player1input.value)
    // Null value reject
    if(!player1input.value){
        error1.innerHTML = 'please enter somthing'
    }else{
        // NaN value reject
        if((NaN)){
        error1.innerHTML = 'please enter number'   
        }else{
            // telling to put value between 1 t0 10
           if(player1input.value>0 && player1input.value<11){
              document.querySelector('.player1').style.display = 'none'
              player1input.style.display = 'none'
              player1button.style.display = 'none'
              error1.style.display = 'none'
              document.querySelector('.player2').style.display = 'block'
              player2input.style.display = 'inline-block'
              player2button.style.display = 'inline-block'
              error2.style.display = 'block'
              chance.style.display = 'block'
              chance.innerHTML = `chance: ${count}`
              console.log('game start')
            //   if input not between 1 t0 10
        }else{
            error1.innerHTML = 'please enter a number between 1 to 10'
        }
    }
    }
})
// player2input 
player2button.addEventListener('click',function(){
    // null value reject
    if(!player2input.value){
        error2.innerHTML = 'please enter something'

    }else{
        // input within the limit
        if(player2input.value>0 && player2input.value<11){

    console.log(player2input.value)
    
    chance.innerHTML = `chance : ${count}`
    // game won for player2
    if(player1input.value == player2input.value){
           player2.innerHTML = "player2 win"
           chance.style.display ='none'
           player2input.style.display = 'none'
              player2button.style.display = 'none'
              error2.style.display = 'none'
    }
    // game won for player1
else{      
        count = count-1
        console.log(`chance:${count}`)
        // no count left 
if(count==0){
    player2.innerHTML = 'player1 win'
    chance.style.display ='none'
    player2input.style.display = 'none'
    player2button.style.display = 'none'
    error2.style.display = 'none'
    //still  count left
}else{
    chance.innerHTML = `chance : ${count}`
}    
   
}
// if input not between 1 t0 10
    }else{
        error2.innerHTML = 'please enter a number between 1 to 10'
    }
}
}
)

