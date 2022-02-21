function myAns(ans){
    var msg = '';
    

   switch(ans){
       case 8:
            msg = 'Incorrect!';
            document.getElementById("ans").style.color = "red";
        break;

        case 6:
            msg = 'Incorrect!';
            document.getElementById("ans").style.color = "red";
        break;

        case 7:
            msg = 'Correct you are amazing!';
            document.getElementById("ans").style.color = "green";
        break;

        case 10:
            msg = 'Incorrect!';
            document.getElementById("ans").style.color = "red";
        break;
    }


    document.getElementById('ans').innerHTML = msg;
}

