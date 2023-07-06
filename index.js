const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const nextRound = document.getElementById('nxtRound')


const numArray = ['rock', 'paper', 'scissor']

let myLivScore = 0;
let computerLivScore = 0;

rockBtn.addEventListener('click', updateRock);
paperBtn.addEventListener('click', updatePaper);
scissorBtn.addEventListener('click', updateScissor);
nextRound.addEventListener('click', changeRound);

function updateRock(){
    
   let number = (Math.random()*2.5).toFixed(0); 
   document.getElementById('me').innerHTML = rockBtn.innerHTML; 
   document.getElementById('computer').innerHTML = numArray[number]
   
   if(number==1){
    computerLivScore = computerLivScore + 1;
   } 
   if(number==2){
    myLivScore = myLivScore + 1;
   }
   document.getElementById('myScore').textContent = myLivScore;
   document.getElementById('compScore').textContent = computerLivScore;

}

function updatePaper(){

   let number = (Math.random()*2.5).toFixed(0); 
   document.getElementById('me').innerHTML = paperBtn.innerHTML; 
   document.getElementById('computer').innerHTML = numArray[number]

   if(number==0){
    myLivScore = myLivScore + 1;
   }
   if(number==2){
    computerLivScore = computerLivScore + 1;
   }
   document.getElementById('myScore').textContent = myLivScore;
   document.getElementById('compScore').textContent = computerLivScore;
}

function updateScissor(){

   let number = (Math.random()*2.5).toFixed(0); 
   document.getElementById('me').innerHTML = scissorBtn.innerHTML; 
   document.getElementById('computer').innerHTML = numArray[number]

   if(number==0){
    computerLivScore = computerLivScore + 1;
   }
   if(number==1){
    myLivScore = myLivScore + 1;
   }
   document.getElementById('myScore').textContent = myLivScore;
   document.getElementById('compScore').textContent = computerLivScore;
}

function changeRound(){

    document.getElementById('myScore').textContent = ''
    document.getElementById('compScore').textContent = ''

    document.getElementById('me').textContent = ''
    document.getElementById('computer').textContent = ''

    myLivScore = 0;
    computerLivScore = 0;
}