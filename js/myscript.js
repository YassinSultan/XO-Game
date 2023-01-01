let player1Score = document.getElementById("player1Score")
let player2Score = document.getElementById("player2Score")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let squres = document.querySelectorAll(".squre")

let playerX=0
let playerO=0
player1.style.backgroundColor="#222222"
let X = true;
let O = false;

let end1=false
function reset(){
    for(let i=0;i<=8;i++){
        squres[i].innerHTML=""
        squres[i].style.backgroundColor="#22A39F"
        squres[i].style="box-shadow: inset 0px 0px 0px 0px black;"
    }

}

function end(num1,num2,num3){
    end1=true
    player2.style.backgroundColor="#222222"
    player1.style.backgroundColor="#222222"

    squres[num1].style.backgroundColor="rgb(131, 21, 47)"
    squres[num2].style.backgroundColor="rgb(131, 21, 47)"
    squres[num3].style.backgroundColor="rgb(131, 21, 47)"


    setTimeout(function(){
        end1=false
        if(squres[num1].innerHTML=="X"){
            playerX++
            player1Score.innerHTML=playerX
            X =true
            O =false
            player2.style.backgroundColor="#22A39F"
            player1.style.backgroundColor="#222222"
        }
        else if(squres[num1].innerHTML=="O"){
            playerO++
            player2Score.innerHTML=playerO
            X =false
            O =true
            player2.style.backgroundColor="#222222"
            player1.style.backgroundColor="#22A39F"
        }
        reset() 
    },2000)
}


function winner(){

    if(squres[0].innerHTML=="X" && squres[1].innerHTML=="X" && squres[2].innerHTML=="X" && squres[2].innerHTML!=""){
        end(0,1,2)
    }
    else if(squres[0].innerHTML=="O" && squres[1].innerHTML=="O" && squres[2].innerHTML=="O" && squres[2].innerHTML!=""){
        end(0,1,2)
    }
    else if(squres[3].innerHTML=="O" && squres[4].innerHTML=="O" && squres[5].innerHTML=="O" && squres[5].innerHTML!=""){
        end(3,4,5)
    }
    else if(squres[3].innerHTML=="X" && squres[4].innerHTML=="X" && squres[5].innerHTML=="X" && squres[5].innerHTML!=""){
        end(3,4,5)
    }
    else if(squres[6].innerHTML=="O" && squres[7].innerHTML=="O" && squres[8].innerHTML=="O" && squres[8].innerHTML!=""){
        end(6,7,8)
    }
    else if(squres[6].innerHTML=="X" && squres[7].innerHTML=="X" && squres[8].innerHTML=="X" && squres[8].innerHTML!=""){
        end(6,7,8)
        console.log("6  7  8")
    }
    else if(squres[2].innerHTML=="O" && squres[4].innerHTML=="O" && squres[6].innerHTML=="O" && squres[6].innerHTML!=""){
        end(2,4,6)
    }
    else if(squres[2].innerHTML=="X" && squres[4].innerHTML=="X" && squres[6].innerHTML=="X" && squres[6].innerHTML!=""){
        end(2,4,6)
    }
    else if(squres[0].innerHTML=="O" && squres[4].innerHTML=="O" && squres[8].innerHTML=="O" && squres[8].innerHTML!=""){
        end(0,4,8)
    }
    else if(squres[0].innerHTML=="X" && squres[4].innerHTML=="X" && squres[8].innerHTML=="X" && squres[8].innerHTML!=""){
        end(0,4,8)
    }
    else if(squres[0].innerHTML=="O" && squres[3].innerHTML=="O" && squres[6].innerHTML=="O" && squres[6].innerHTML!=""){
        end(0,3,6)
    }
    else if(squres[0].innerHTML=="X" && squres[3].innerHTML=="X" && squres[6].innerHTML=="X" && squres[6].innerHTML!=""){
        end(0,3,6)
    }
    else if(squres[1].innerHTML=="O" && squres[4].innerHTML=="O" && squres[7].innerHTML=="O" && squres[7].innerHTML!=""){
        end(1,4,7)
    }
    else if(squres[1].innerHTML=="X" && squres[4].innerHTML=="X" && squres[7].innerHTML=="X" && squres[7].innerHTML!=""){
        end(1,4,7)
    }
    else if(squres[2].innerHTML=="O" && squres[5].innerHTML=="O" && squres[8].innerHTML=="O" && squres[8].innerHTML!=""){
        end(2,5,8)
    }
    else if(squres[2].innerHTML=="X" && squres[5].innerHTML=="X" && squres[8].innerHTML=="X" && squres[8].innerHTML!=""){
        end(2,5,8)
    }
    else if(squres[0].innerHTML!="" &&squres[1].innerHTML!="" && squres[2].innerHTML!="" && squres[3].innerHTML!="" && squres[4].innerHTML!="" && squres[5].innerHTML!="" && squres[6].innerHTML!="" && squres[7].innerHTML!="" && squres[8].innerHTML!=""){
        setTimeout(()=>{
            reset()
        },500)
    }
}

function game(id){
    let box = document.getElementById(id)
    if(X===true && box.innerHTML ==""){
        box.innerHTML="X"
        X=false
        O=true
        player1.style.backgroundColor="#22A39F"
        player2.style.backgroundColor="#222222"
    }
    else if(O===true && box.innerHTML ==""){
        box.innerHTML="O"
        X=true
        O==false
        player2.style.backgroundColor="#22A39F"
        player1.style.backgroundColor="#222222"
    }
    winner()
}


squres.forEach(squre=>{
    squre.addEventListener("click" ,()=>{
        if(end1===false){
            squre.style="box-shadow:#0000009e 0px 0px 20px 9px inset;"
            game(squre.id)
        }
    })
})

let resetButton = document.getElementById("restBtn")
resetButton.addEventListener("click",()=>{
    
    reset()
})