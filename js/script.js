const pinOutput = document.getElementById('pinOutput');
let pinInput = document.getElementById('pinInput');
let inputBtn = document.getElementsByClassName('button');
const matched = document.getElementById("matched");
const notMatched = document.getElementById("notMatched");
let randomNumber = 0;
let output = "";
//  generating random number & show then
function generateRandomNumber() {
    let randomNumber = Math.random() * 9000;
    randomNumber = Math.floor(randomNumber) + 1000;
    return randomNumber;
};
// pin matcher function
function matchPin() {
    const enteredPin = pinInput.value;
    if (parseInt(enteredPin) === randomNumber) {
        matched.style.display = "block";
        notMatched.style.display = "none";
    } else {
        matched.style.display = "none";
        notMatched.style.display = "block";
    }
}
document.getElementById('generateBtn').addEventListener('click', () => {
    randomNumber = generateRandomNumber();
    pinOutput.value = randomNumber;
});
// pin matcher key functionality
for (let i = 0; i < inputBtn.length; i++) {
    const button = inputBtn[i];
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'C') {
            output = '';
            pinInput.value = output;
        } else if (e.target.innerHTML == '&lt;') {
            output = output.substring(0, output.length - 1);
            pinInput.value = output
        } else {
            output += e.target.innerHTML;
            pinInput.value = output;
            
        }
    });
};
document.querySelector('.submit-btn').addEventListener('click', () => {
    if (output.length === 4) {
        matchPin();
    }
});