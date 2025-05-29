let btn = document.querySelectorAll(".box");
let rb = document.querySelector("#reset");

let hi = document.querySelector(".content");
let msg = document.querySelector("#win");
let nb = document.querySelector("#new");

let turn = true;

const pat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true)
        {
            box.innerText="O";
            box.style.color="Green";
            turn=false;
    
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turn=true;
        }
        box.disabled=true;

        checkwinner();
    });
    
});

const checkwinner=()=>{
    for(let patt of pat)
    {
        let val1= btn[patt[0]].innerText;
        let val2= btn[patt[1]].innerText;
        let val3= btn[patt[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !="")
        {
            if(val1===val2 && val2===val3)
            {
                showwinner(val1);
            }
        }
    }
};

const showwinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    hi.classList.remove("hide");
    disable();  //after winner all boxes are disable
}

const disable=()=>{
    for(box of btn)
    {
        box.disabled=true;
    }
}

const enable=()=>{
    for(box of btn)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const reset=()=>{
    turn=true;
    enable();
    
    hi.classList.add("hide"); 
}


rb.addEventListener("click",reset);
nb.addEventListener("click",reset);