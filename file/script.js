function myAns(ans){
    var msg = '';
    

   switch(ans){
       case 8:
            msg = 'Incorrect!';
        break;

        case 6:
            msg = 'Incorrect!';
        break;

        case 7:
            msg = 'Correct you are amazing!';
            document.getElementById("ans").style.color = "green";
        break;

        case 10:
            msg = 'Incorrect!';
        break;
    }


    document.getElementById('ans').innerHTML = msg;
}

