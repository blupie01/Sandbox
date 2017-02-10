var test = "RACECAR";

var palindrome = function(word) {
	var word = word.toUpperCase();
	for (var i = 0; i < word.length; i++) {
		if (word[i] !== word[word.length-1-i]) {
			return false;
		};
	};
	return true;
};

console.log(palindrome("RaCeCaR"));
console.log(palindrome("AABBSSCCSSBBAA"));
console.log(palindrome("derp"));
console.log(palindrome("roar"));