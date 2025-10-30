let boxes=document.querySelectorAll(".box")
let rb=document.querySelector("#rs")
let last=document.querySelector(".last")
let msg=document.querySelector("#msg")
let ngb=document.querySelector("#nrs")

let o = true;
let c=0   //counting no.of filled boxes

const wp = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const newg=()=>{
    o=true;
    c=0
    ena();
    last.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (o) {   //player 1st turn is 0
            box.innerText="o";   //print 0
            box.style.color="brown";
            o=false;  //nxt getting no 0 no output nothing just one zero on 1st time
         }  else{  //nxt box's click will come after 1st click of "0" on 1st box
            box.innerText="x";  //print X
            box.style.color="black";
            o=true;  //will make click as true so nxt time it goes to if block and print 0
        }
        box.disabled=true;  //we can't press 2nd time to change X from 0 and vice versa
        c++   //if a box is clicked then it is filled so c increases
        
        let iw=cw();    //initialising a new function which equals to cw (checking winner)
        
        if (c===9 && !iw){  //checking if c=9(all boxes filled/not) and not equal with function called as checking winner
            gamedraw();   //if no winning patterns are satisfied and all boxes are filled then this function executes
        }
    });
});

const gamedraw=()=>{
    msg.innerText="Tie Game";       //function for game tie/draw
    last.classList.remove("hide");
    dis();
};

const dis=()=>{
    for (let j of boxes){
        j.disabled=true;
    }
};

const ena=()=>{
    for (let j of boxes){
        j.disabled=false;
        j.innerText="";
    }
};

const sw=(p1)=>{
    msg.innerText= "Winner is - " + p1;
    last.classList.remove("hide");
    dis();
};

//for (pattern of wp)  //for iterating through winning patterns
//console.log (pattern[0],pattern[1],pattern[2]) //getting the place of boxes
//console.log (boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]) //getting the index of the box
//console.log (boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)  //now the inner text will be the "X" or "O" according to what we clicked, it will see what is coming either 0 or X

const cw = () => {
    for (let pattern of wp) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1!="" && p2!="" && p3!=""){
            if (p1===p2 && p2===p3){
                sw(p1);
                return true;
                }
            }
        }
    };

ngb.addEventListener("click",newg);
rb.addEventListener("click",newg);