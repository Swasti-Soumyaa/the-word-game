player1=localStorage.getItem("player_1_name");
player2=localStorage.getItem("player_2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1+":";
document.getElementById("player2_name").innerHTML=player2+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;


document.getElementById("question_turn").innerHTML="question_turn-"+player1;
document.getElementById("answer_turn").innerHTML="answer_turn-"+player2;

function send(){

    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    first_letter=word.charAt(1);
    middle_position=Math.floor(word.length/2);
    middle_letter=word.charAt(middle_position);
    last_postion=word.length-1 
    last_letter=word.charAt(last_postion);

    remove_letter1=word.replace(first_letter,"_");
    remove_letterMiddle=remove_letter1.replace(middle_letter,"_");
    remove_letterLast=remove_letterMiddle.replace(last_letter,"_");

    question_tag="<h4 id='word_display'>Q. "+remove_letterLast+"</h4>";
    answer_tag="<br>Answer: <input type='text' id='input_check_box'>";
    button_tag="<br><br> <button class='btn btn-info' onclick=check()>Check</button>";

    row=question_tag+answer_tag+button_tag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

    
}


question_turn="player1"
answer_turn="player2"


function check(){

    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if( answer==word){

        if(answer_turn=="player1"){

            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

            
        }
        else{

            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }


    if(question_turn=="player1"){

        question_turn="player2"
        document.getElementById("question_turn").innerHTML="question_turn-"+player2;
    }
    else{
        question_turn="player1"
        document.getElementById("question_turn").innerHTML="question_turn-"+player1;
    }

    if(answer_turn=="player1"){

        answer_turn="player2"
        document.getElementById("answer_turn").innerHTML="answer_turn-"+player2;

    }
    else{
        answer_turn="player1"
        document.getElementById("answer_turn").innerHTML="answer_turn-"+player1;

    }

    document.getElementById("output").innerHTML="";

}



