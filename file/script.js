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
            msg = 'correct!';
        break;

        case 8:
            msg = 'Incorrect!';
        break;
    }


    document.getElementById('ans').innerHTML = msg;
}

