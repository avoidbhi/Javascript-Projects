window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    /*checks undefine, null, empty string, zero*/
    if ( !height || isNaN(height) || height <0 )
    {
        result.innerText = "Please provide a valid HEIGHT";
        // innertext-innerHTML for replacing existing value or text
        return ;
    }
    else if ( !weight || isNaN(weight) || weight<0)
    {
        result.innerText = "Please provide a valid WEIGHT";
        return ;
    }

    const bmi = (weight / ((height * height) /10000)).toFixed(2);

    if (bmi < 18.5) 
    {
        result.innerText = `Under Weight: ${bmi}`;
    }
    else if( bmi>=18.5 && bmi <24.9)
    {
        result.innerText = `Normal: ${bmi}`;
    }
    else if( bmi>= 25  && bmi<29.9 )
    {
        result.innerText = `OverWeight: ${bmi}`;
    }
    else if( bmi>= 30  && bmi<34.9 )
    {
        result.innerText = `Obesity (Class 1): ${bmi}`;
    }
    else if( bmi>= 35  && bmi<39.9 )
    {
        result.innerText = `Obesity (Class 2) ${bmi}`;
    }
    else if( bmi>= 40)
    {
        result.innerText = `Extreme Obesity ${bmi}`;
    }


}


// New thing in strings:
// - ' ' single quote -> to conacatenate
// - " " double quote
// - ` ` template string -> ${} -> easy readability