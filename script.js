function calculate() {

    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);

    let interest = (p * r * t) / 100;
    let amount = p + interest;

    document.getElementById("result").innerHTML =
        "Interest: " + interest + "<br>Total Amount: " + amount;
}
