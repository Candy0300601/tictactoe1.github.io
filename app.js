let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=false;

const showwinner=(winner)=>
{
  msg.innerText="Congratulations , Winner is "+winner;
  msgcont.classList.remove("hide");
  disableboxes();

};

const resetgame=()=>
{
    turno=false;
    enableboxes();
    msgcont.classList.add("hide");
};

const disableboxes=()=>
{
    for(let box of boxes)
    {
         box.disabled=true;
    }
}//

const enableboxes=()=>
{
    for(let box of boxes)
    {
         box.disabled=false;
         box.innerText="";
    }
}

const winpattern=[[0,1,2],[3,4,5],[6,7,8],
           [0,3,6],[1,4,7],[2,5,8],
           [0,4,8],[2,4,6]];

boxes.forEach((box) => 
{
     box.addEventListener("click",()=>
     {
         console.log("box is clicked ! ");
         if(turno==true)
         {
             box.innerText="O";
             turno=false;

         }
         else{
            box.innerText="X";
            turno=true;
         }
         box.disabled=true;

         checkwinner();
     });
});
const checkwinner=()=>
{
     for(let pattern of winpattern)
     {
       //  console.log(pattern);
         console.log(pattern[0], pattern[1],pattern[2]); 
         let pos1=boxes[pattern[0]].innerText;
         let pos2=boxes[pattern[1]].innerText;
         let pos3=boxes[pattern[2]].innerText;
         console.log(pos1,pos2,pos3);

     if( pos1!="" && pos2!="" && pos3!="" &&pos1===pos2 && pos2===pos3)
       {
                 showwinner(pos1);            
       }
     }
};

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);

