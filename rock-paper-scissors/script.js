let scoreBoard=JSON.parse(localStorage.getItem('scoreBoard'))  ||  {
   
        wins:0,
        losses:0,
        ties:0
}

score();

function roboMove(){
    let robo=Math.random();
    let randomMove=''
    if(robo<0.33){
         return randomMove='rock'
    }
    else if(robo>=0.33 && robo<0.66){
        return randomMove='paper'
    }
    else{
        return randomMove='scissors'
    }
}
let result='';
 function resultCal(playerMove,randomMove){
    if(playerMove==='rock'){
        if(randomMove==='rock'){
            result='tie';
            scoreBoard.ties+=1;
        }
        else if(randomMove==='paper'){
            result='lose';
            scoreBoard.losses+=1;
        }
        else{
            result='win';
            scoreBoard.wins+=1;
        }
    }
    else if(playerMove==='paper'){
        if(randomMove==='rock'){
            result='win';
            scoreBoard.wins+=1;
        }
        else if(randomMove==='paper'){
            result='tie';
            scoreBoard.ties+=1;
        }
        else{
            result='lose';
            scoreBoard.losses+=1;
        }
    }
    else if(playerMove==='scissors'){
        if(randomMove==='rock'){
            result='lose';
            scoreBoard.losses+=1;
        }
        else if(randomMove==='paper'){
            result='win';
            scoreBoard.wins+=1;
        }
        else{
            result='tie';
            scoreBoard.ties+=1;
        }
    }
    localStorage.setItem('scoreBoard',JSON.stringify(scoreBoard));

    resultDisplay(playerMove,randomMove);

    score();

   

 }

 function score(){
    document.querySelector('.js-score').innerHTML=
    `
        WINS : ${scoreBoard.wins} . 
        LOSSES : ${scoreBoard.losses} .
        TIES : ${scoreBoard.ties}
           
    `
}
 
function resultDisplay(playerMove,randomMove){
    let moves=document.querySelector('.js-moves');
    let icons={
        rock:'<i class="fa-solid fa-hand-fist"></i>',
        paper:'<i class="fa-solid fa-hand"></i>',
        scissors:'<i class="fa-solid fa-hand-peace"></i>'
    };
    moves.innerHTML=
    `
    you
    ${icons[playerMove]}
    ${icons[randomMove]}
    robo
    `
}