const display = document.getElementById("display");

function AppendToDisplay(input)
{
    display.value += input;
}

function ClearDisplay()
{
    display.value -= display.value;
}

// function BackSpace(){
//     display.value = display.value();
// }

function Calculate()
{
    display.value = eval(display.value);
}