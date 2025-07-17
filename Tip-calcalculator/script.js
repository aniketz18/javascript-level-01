function calculateTotal() {
    let billAmt = parseFloat(document.querySelector("#bill-amt").value);
    let tipAmt = parseFloat(document.querySelector("#tip-amt").value);
    let totalAmt = billAmt + (tipAmt / 100 * billAmt);
    document.querySelector("#res-amt").innerHTML = totalAmt;
}

document.querySelector(".btn").addEventListener("click", calculateTotal);
