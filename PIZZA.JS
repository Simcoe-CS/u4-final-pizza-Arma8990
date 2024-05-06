function reset() {
    out1.innerHTML = "...";
    out2.innerHTML = "...";
    out3.innerHTML = "...";
}

function calc() {
let option = document.getElementsByName("op")

let total = 0;

if (option[0].checked) {

total = total + Number(option[0].value);

}

if (option[1].checked) {

total = total + Number(option[1].value);

}

if (option[2].checked) {

total = total + Number(option[2].value);

}

if (option[3].checked) {

total = total + Number(option[3].value);

}

if (option[4].checked) {

total = total + Number(option[4].value);

}

if (option[5].checked) {

total = total + Number(option[5].value);

}

let tot = total * 0.13
out1.innerHTML = "Your total before tax is $" + total;
out2.innerHTML = "Your total with tax is $" + tot.toFixed(2)
out3.innerHTML = "Your total is $" + (Number(total) + Number(tot)).toFixed(2)

}

