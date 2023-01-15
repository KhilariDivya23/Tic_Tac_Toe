let player1 = true, player2 = false;

let does_draw = function (){
    for(let i=1; i<=9; i++){
        if (document.getElementById("btn" + String(i)).innerHTML === ""){
            return false;
        }
    }
    return true;
}

let display = function (msg){
    document.getElementsByClassName("players")[0].style.display = "none";
    document.getElementById("msg").style.display = "flex";
    document.getElementById("msg").innerText = msg;

}

let disable_board = function (){
    for (let i=1; i<=9; i++){
        document.getElementById("btn" + String(i)).disabled = true;
    }
}

let does_win = (val) => {
    let ans1 = true, ans2 = true, ans3 = true, ans4 = true, ans5 = true, ans6 = true, ans7 = true, ans8 = true;
    for (let i=1; i<=3 ; i++){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans1 = false;
            break;
        }
    }
    for (let i=4; i<=6 ; i++){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans2 = false;
            break;
        }
    }

    for (let i=7; i<=9 ; i++){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans3 = false;
            break;
        }
    }

    for (let i=1; i<=7 ; i+= 3){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans4 = false;
            break;
        }
    }

    for (let i=2; i<=8 ; i+= 3){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans5 = false;
            break;
        }
    }

    for (let i=3; i<=9 ; i+= 3){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans6 = false;
            break;
        }
    }

    for (let i=1; i<=9 ; i+= 4){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans7 = false;
            break;
        }
    }

    for (let i=3; i<=7 ; i+= 2){
        if (document.getElementById("btn" + String(i)).innerHTML !== val){
            ans8 = false;
            break;
        }
    }
    return ans1 || ans2 || ans3 || ans4 || ans5 || ans6 || ans7 || ans8
}


let is_valid = function(val){
    let btn = document.getElementById(val).innerText;
    // display();
    if (btn === ""){
        if (player1){
            document.getElementById(val).innerText = 'X';
            if (does_win("X")){
                display("Player 1 Wins!!");
                disable_board();
                return;
            }
            if (does_draw()){
                display("Draw!!");
                disable_board();
                return;
            }
            player2 = true;
            player1 = false;
            document.getElementById("player1").style.color = "black";
            document.getElementById("player2").style.color = "red";
        }
        else{
            document.getElementById(val).innerText = "O";
            if (does_win("O")){
                display("Player 2 Wins!!");
                disable_board();
                return;
            }
            if (does_draw()){
                display("Draw!!");
                disable_board();
                return;
            }
            player2 = false;
            player1 = true;
            document.getElementById("player2").style.color = "black";
            document.getElementById("player1").style.color = "red";
        }
        document.getElementById(val).disabled = true;
    }
}

let reset = function (){
    for(let i=1; i<=9; i++){
        document.getElementById("btn" + String(i)).value = "";
        document.getElementById("btn" + String(i)).disabled = false;
    }
    window.location.reload();
}

