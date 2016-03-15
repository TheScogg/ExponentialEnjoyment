/**
 * Created by Chris on 3/15/2016.
 */
function solveExponent(){
    base = parseInt(document.getElementById("base").value);
    exponent = parseInt(document.getElementById("exponent").value);

    document.getElementById("solution").innerHTML = (base+exponent);

    var solution = base;

    for (var i= exponent; i>1; i=i-1) {
        solution *= base;
    }

    document.getElementById("solution").innerHTML = (solution);
}


