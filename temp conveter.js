let inputValue = document.getElementById('input-value');
let result = document.getElementById('result');
let conversionType = document.querySelector('input[name="conversion"]:checked');

let conversionOptions = {
    'f-to-c': (value) => (value - 32) * 5 / 9,
    'c-to-f': (value) => (value * 9 / 5) + 32
};

inputValue.addEventListener('input', () => {
    let value = parseFloat(inputValue.value);
    let convertedValue = eval(conversionOptions[conversionType.value](value) * 100) / 100;
    result.value = convertedValue;
});

let convertedValue = Number
conversionType.addEventListener('change', () => {
    let value = parseFloat(inputValue.value);
    let convertedValue = eval(conversionOptions[conversionType.value](value) * 100) / 100;
    result.value = convertedValue;
});
