const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if (isNaN(height) || height < 0 ){
     results.innerHTML = `please give a valid height ${height}`;

    }else if (isNaN(weight) || weight < 0){
     results.innerHTML = `please give a valid weight ${weight}`;
    } else {
     let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //find healt catogery...........

    let category = ""
    if (bmi < 18.5) {
        category = "Underweight"
    }else if (bmi >= 18.5 && bmi <= 24.9 ){
        category = "NOrmal (healthy weight";

    }else if (bmi >= 25 && bmi <= 29.9){
        category = "Overweight"
    } else {
        category = "Obese";
    }

    //show the result.....

      results.innerHTML = `<h3>Your BMI is ${bmi}</h3>;
            
      <p>You are in the <strong>${category}</strong.></p>`

   }

})




    