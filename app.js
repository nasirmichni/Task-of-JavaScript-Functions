function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value.toLowerCase();
    const outputElement = document.getElementById('palindromeOutput');
    outputElement.textContent = isPalindrome(input) ? "Palindrome" : "Not Palindrome";
    outputElement.style.color = "red";
}

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findMinMax() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const outputElement = document.getElementById('minMaxOutput');
    outputElement.textContent = `Minimum: ${min}, Maximum: ${max}`;
    outputElement.style.color = "blue";
}

function identifyMissingNumbers() {
    const input = document.getElementById('missingInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    const missingNumbers = [];
    for (let i = 11; i <= 20; i++) {
        if (!numbers.includes(i)) {
            missingNumbers.push(i);
        }
    }
    const outputElement = document.getElementById('missingOutput');
    if (missingNumbers.length === 0) {
        outputElement.textContent = "No missing numbers found.";
    } else {
        outputElement.textContent = `Missing numbers: ${missingNumbers.join(', ')}`;
        outputElement.style.color = "green";
    }
}
