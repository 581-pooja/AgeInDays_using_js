
//Challenge 1: Your Age in Days

function ageInDays(){
    var birthYear = prompt("What is Your Birth year?...Good Friend");
    var ageInDayss = (2021- birthYear) * 365;
    var h1 = document.createElement('h1');//it will create h1 tags
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');//it creates a textbox i.e. textNode \
    h1.setAttribute('id','ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset(){
    document.getElementById('ageIndays').remove();
}


