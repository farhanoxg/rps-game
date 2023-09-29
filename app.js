const choices= document.querySelectorAll('.choice');
const score=document.getElementById('score');
const result= document.getElementById('result');
const restart= document.getElementById('restart');
const modal=document.querySelector('.modal');
const  scoreboard={
    player:0,
    computer:0
}

// play game
function play(e){
    restart.style.display='inline-block';
    const playerChoice=(e.target.id);
    const computerChoice=getComputerChoice();
    // console.log(playerChoice, computerChoice);
    const winner= getWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice);

    console.log(playerChoice,computerChoice,winner);
}

//get computer choice
function getComputerChoice(){
    const rand=Math.random();
if(rand<0.34){
    return 'rock';
}
else if(rand <=0.67){
    return 'paper';
}
else{
    return 'scissors';
}
}

//get result
function getWinner(player,computer){
    if(player=== computer){
        return 'draw'
    } else if(player==='rock'){
        if(computer==='paper'){
            return 'computer'
        }else{
            return 'player'
        }
    }
    else if(player==='paper'){
        if(computer==='scissors'){
            return 'computer';
        }else{
            return 'player'
        }
    }
    else if(player==='scissors'){
        if(computer==='rock'){
            return 'computer';
        }
        else{
            return 'player'
        }

    }
}

//show winner

function showWinner(winner,computerChoice){
    if (winner==='player'){
        //increase player score
        scoreboard.player++;
        //show modal result
        result.innerHTML=`
        <h1 class="text-win">You Win</h1>
        <i class="fa-regular fa-hand-${computerChoice} fa-5x"></i>
         <p>computer choose <strong>${computerChoice}</strong></p>
         `;

    }else if(winner==='computer'){
          //increase computer score
          scoreboard.computer++;
          //show modal result
          result.innerHTML=`
          <h1 class="text-lose">You Lose</h1>
          <i class="fa-regular fa-hand-${computerChoice} fa-5x"></i>
           <p>computer choose <strong>${computerChoice}</strong></p>
           `;
    }
    else{
        result.innerHTML=`
          <h1 style="color: #003699;" >Draw</h1>
          <i class="fa-regular fa-hand-${computerChoice} fa-5x"></i>
           <p>computer choose <strong>${computerChoice}</strong></p>
           `;
    }
    //show score
    score.innerHTML=`
    <p>player:${scoreboard.player}</p>
    <p>computer:${scoreboard.computer}</p>
    `

    modal.style.display='block'
}
//clear modal
function clearModal(e){
    if(e.target== modal){
        modal.style.display='none'
    }
}

//restart game
function restatGame(){
    scoreboard.player=0;
    scoreboard.computer=0;
     score.innerHTML=`
     <p>player:0</p>
     <p>computer:0</p>
     `
     restart.style.display='none';
}


//event listner
choices.forEach(choice => choice.addEventListener('click',play));
window.addEventListener('click',clearModal);
restart.addEventListener('click',restatGame);