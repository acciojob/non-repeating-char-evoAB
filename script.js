function firstNonRepeatedChar(str) {
    const freq = new Array(26).fill(0); // Initialize frequency array for lowercase letters

    for (let i = 0; i < str.length; i++) {
        freq[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (freq[str.charCodeAt(i) - 'a'.charCodeAt(0)] === 1) {
            ans = str[i];
            break;
        }
    }

    return ans === "" ? null : ans;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
