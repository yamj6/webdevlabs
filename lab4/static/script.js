var x = 5;
var y = 7;
var z = x+y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A+B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1+x2;
    console.log(x3);
}
SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("Good job!");
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];
function FindTheBanana(L) {
    for (let index = 0; index < L.length; index++) {
        const fruit = L[index];
        if (fruit == "Banana") {
            // window.alert("found Banana in " + index);
            let tempNoWindowAlert;
        }
    }
}
FindTheBanana(L1);
FindTheBanana(L2);

L1.forEach(FindTheBanana2);
L2.forEach(FindTheBanana2);
function FindTheBanana2(fruit, index, array) {
    if (fruit == "Banana") {
        // window.alert("We found a banana in the " + array + " array");
        let tempNoWindowAlert;
    }
}

function GreetingFunc() {
    var d = new Date();
    var h = d.getHours();
    if (5<=h && h<12) {
        document.getElementById("greeting").innerHTML = "Good morning, I am Annie";
    } else if (12<=h && h<18) {
        document.getElementById("greeting").innerHTML = "Good afternoon, I am Annie";
    } else if (18<=h && h<20) {
        document.getElementById("greeting").innerHTML = "Good evening, I am Annie";
    } else {
        document.getElementById("greeting").innerHTML = "Good night, I am Annie";
    }
}
GreetingFunc();

function addYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.getElementById("copyYear").innerHTML = "Copyright©" + year;
}

function showList() {
    document.getElementById("favList").style.display = "block";
    document.getElementById("seeMoreButton").style.display = "none";
}

$(document).ready(function(){
    $("#readMoreButton").click(function(){
        $("#readMoreIntro").show();
        $("#readLessButton").show();
        $("#readMoreButton").hide();
    })
    $("#readLessButton").click(function(){
        $("#readMoreIntro").hide();
        $("#readLessButton").hide();
        $("#readMoreButton").show();
    })
})

function validate(){
    let userName = document.getElementById("fullname");
    let userEmail = document.getElementById("email");
    let userComment = document.getElementById("comment");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userComment.checkValidity()) {
        document.getElementById("validationFailMessage").innerHTML = "Please fill out all the fields in the form.";
    }
}