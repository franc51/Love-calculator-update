var n = Math.random();
n = Math.floor(n * 100) + 1;

const button = document.getElementById('button');
button.addEventListener('click', showIT);



function showIT(){

    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var result = document.getElementById('result').innerHTML = input1 + " and  " + input2 + " loves eachother   " + n + "%";
    if (n > 80){
        document.getElementById("heart").style.display = "flex";
    } else if (n > 50 ) {
        document.getElementById("sad").style.display = "flex";
    } else {
        document.getElementById("sad").style.display = "flex";
    }
}