const alphaCap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let inputField = document.querySelector('.input');
const display = document.querySelector('button');

nameDisplayer();
function nameDisplayer(){ 

  display.addEventListener('click', flipDown);

}

function flipDown(e){

e.target.remove();
[...inputField.value].forEach(alphabet => {
 
  creatTheCrad(alphabet);

});
}
    
function creatTheCrad(alphabet){

  //creating the elements with adding the classes;
let flipCard = document.createElement('div');
flipCard.className = 'flip-card';
let flip = document.createElement('div');
flip.className = 'flip';
let flipTop = document.createElement('div');
flipTop.className = "flip-top";
let flipBottom = document.createElement('div');
flipBottom.className = "flip-bottom";
let overleyTop = document.createElement('div');
overleyTop.className = "overlay-top";
let overleyBottom = document.createElement('div');
overleyBottom.className = "overlay-bottom";
 // appending the div elements to each other;
flip.append(flipTop);
flip.append(flipBottom);
flip.append(overleyTop);
flip.append(overleyBottom);
flipCard.append(flip);
document.body.append(flipCard);
 // adding the animation class ('.anim') to the flip div;
flip.classList.add('anim');
let flipChildren = flip.children;
console.log(flipChildren);
let index = 0;
const animInterval = setInterval(myAnimation, 600);
function myAnimation(){
  for ( child of flipChildren){
  child.textContent = alphaCap[index];
  }  
  index++;
  if (child.textContent == alphabet){
    flip.classList.remove('anim');
    clearInterval(animInterval);
  }
}
}
