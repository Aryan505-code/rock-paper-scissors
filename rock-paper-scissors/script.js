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
            result='TIE';
            scoreBoard.ties+=1;
        }
        else if(randomMove==='paper'){
            result='YOU LOSE';
            scoreBoard.losses+=1;
        }
        else{
            result='YOU WIN';
            scoreBoard.wins+=1;
        }
    }
    else if(playerMove==='paper'){
        if(randomMove==='rock'){
            result='YOU WIN';
            scoreBoard.wins+=1;
        }
        else if(randomMove==='paper'){
            result='TIE';
            scoreBoard.ties+=1;
        }
        else{
            result='YOU LOSE';
            scoreBoard.losses+=1;
        }
    }
    else if(playerMove==='scissors'){
        if(randomMove==='rock'){
            result='YOU LOSE';
            scoreBoard.losses+=1;
        }
        else if(randomMove==='paper'){
            result='YOU WIN';
            scoreBoard.wins+=1;
        }
        else{
            result='TIE';
            scoreBoard.ties+=1;
        }
    }
    localStorage.setItem('scoreBoard',JSON.stringify(scoreBoard));
    document.querySelector('.js-result').innerHTML=`${result}`
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
    YOU
    ${icons[playerMove]}
    ${icons[randomMove]}
    ROBO
    `
}