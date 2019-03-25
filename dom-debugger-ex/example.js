var count = 0;
var counter = document.querySelector("counter");
var incrementBtn = document.querySelector(".btn");
var surpriseArticle = document.querySelector("#surprisezone");

incrementBtn.addEventListener("click", countUp);

function countUp() {
    count ++;
    counter.innerText = count;
    if (count % 2 === 0) {
        alert("Get ready for a surprise");
        surprise();
    }
}

function surprise() { 
    var newSuprise = document.createElement("h3")
    newSuprise.innerText = "SURPRISE"
    surpriseArticle.appendChild(newSuprise);
}