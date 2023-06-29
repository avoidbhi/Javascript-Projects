window.onload = () => {
// we'll apply a clickListener in numbers class
   const buttons = document.querySelectorAll('.numbers');
   const screen = document.querySelector('.screen');
   const equals = document.querySelector('#btn-equals');
   const clear = document.querySelector('#btn-clear');

    buttons.forEach(button => {
        button.addEventListener('click', (e)=> {
            console.log(e.target.innerHTML);
            screen.value += e.target.innerHTML;
        })
    })

    equals.addEventListener('click', (e) => {
        if (!screen.value) 
        {
            screen.value = "Enter value";
        }
        else 
        {
            screen.value = eval(screen.value)
        }
    })

    clear.addEventListener('click', () => {
        screen.value = "";
    })

}