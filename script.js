function calculateBMI() {
    // Get input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = weight / ((height / 100) * (height / 100));

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="pink-box">
                                <h3>Your BMI: ${bmi.toFixed(2)}</h3>
                                <p>Category: ${category}</p>
                                <p>Suggestions for food choices:</p>
                                <ul>
                                    <li>Underweight: Eat nutrient-dense foods with healthy fats and proteins.</li>
                                    <li>Normal weight: Maintain a balanced diet with plenty of fruits, vegetables, and whole grains.</li>
                                    <li>Overweight: Focus on portion control and limit high-calorie foods.</li>
                                    <li>Obese: Consult with a healthcare provider for personalized dietary recommendations.</li>
                                </ul>
                            </div>`;
}

