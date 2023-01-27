const player1=document.querySelector(".player1")
const player2=document.querySelector(".player2")
const stbtn=document.querySelector(".start")
const wrn=document.querySelector('.comment')

if(stbtn){
    stbtn.addEventListener('click',()=>{
        let pll1=player1.value;
        let pll2=player2.value;
        console.log(pll1);
        console.log("hii")
        if(!pll1 || !pll2){
            wrn.innerHTML="* Enter Valid Name!";
            wrn.style.color="red";
            return;
        }
         localStorage.setItem('player-one',pll1);
         localStorage.setItem('player-two',pll2);    
         console.log(localStorage)    
        location.href='game.html';
        });
}



