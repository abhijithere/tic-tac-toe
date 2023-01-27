const name1=document.getElementById('name1')
const name2=document.getElementById('name2')
let music = new Audio("tap.wav")
if(name1 && name2){
    const a=localStorage.getItem('player-one')
    const b=localStorage.getItem('player-two')
    name1.innerText=a;
    name2.innerText=b;
}
 
const checkwin=()=>{
    const btn2=document.querySelectorAll('.table-btn')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const x=document.querySelector('.back');
    const g=document.querySelector(".drop");  
    const get=document.querySelector(".actual_name");
    const a1=localStorage.getItem('player-one')
    const b1=localStorage.getItem('player-two')
    const con=document.querySelector(".congo")
    let p=0;
    wins.forEach((e)=>{
        if((btn2[e[0]].innerText=== btn2[e[1]].innerText) && (btn2[e[2]].innerText===btn2[e[1]].innerText) && btn2[e[0]].innerText!==""){
            if(btn2[e[0]].innerText==='X' && p==0){
                p++;
                g.classList.add('drop1');
                x.classList.add('back1');
                get.innerText=a1;
                con.innerHTML='Congatulations'

          }
          if(btn2[e[0]].innerText==='O' && p==0){
            p=1;
            g.classList.add('drop1');
            x.classList.add('back1');
            get.innerText=b1;
            con.innerHTML='Congatulations'
          }
        }
    })
        let a12=0;
        for (let i=0;i<btn1.length;i++){
            if(btn1[i].innerText===""){
                a12=1;
                break;
            }
            // g.classList.add('drop1');
            // x.classList.add('back1');
            // con.innerHTML="Match Draw !!"
            }
            if(a12==0){
                g.classList.add('drop1');
                x.classList.add('back1');
                get.innerText="";
                con.innerHTML="Match Draw !!"
            }
    
}
const btn1=document.querySelectorAll('.table-btn')
console.log(btn1)
let m=true;
for (let i=0;i<btn1.length;i++){
    btn1[i].addEventListener("click",()=>{
        music.play();
        if(m){
            if(!btn1[i].innerText){
                btn1[i].innerText='X';
                btn1[i].classList.add("rd");
                checkwin();
                m=false;
            }
        }
        else{
            if(!btn1[i].innerText){
            btn1[i].innerText='O';
            btn1[i].classList.add("grn");
            checkwin();
            m=true;
            }
        }

    })
}

const l=document.querySelector('.rest');
const k=document.querySelectorAll('.table-btn')
l.addEventListener('click',()=>{
    k.forEach((e)=>{
        e.innerText="";
    })   
    const n=document.querySelector('.cm');
        n.innerText="";
})

const close=document.querySelector(".imgcl");
const w=document.querySelector('.back');
const s=document.querySelector(".drop");
const k1=document.querySelectorAll('.table-btn')

close.addEventListener("click",()=>{
    s.classList.remove('drop1');
    w.classList.remove('back1');
    k.forEach((e)=>{
        e.innerText="";
    })   
    m=true;
})