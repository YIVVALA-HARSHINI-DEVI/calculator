function display(val)
{
    document.getElementById("expression").value+=val;
}
//function that evaluates the digit and return result
function solve()
 {
    let a = document.getElementById("expression").value;
    let b = eval(a);
    document.getElementById("expression").value = b;
}
//function that clear the display
function clearall()
{
    document.getElementById("expression").value = "";
}