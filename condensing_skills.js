// chriseckenrode [12:04 PM] 
// ```// write a function that accepts an array of objects with the following structure,
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
 
// // and returns an array of objects with the following structure. users are grouped by skill
// /*
// [
//   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 } 
// ];
// */

// ```

// We'll say .length is ok to use for native methods

// var organize = function(array) {
// 	var newArr = [];
// 	for (var i = 0; i < array.length; i++) {
// 		var newObj = {};
// 		var userArr = [];
// 		userArr.push(array[i].user);
// 		newObj["skill"] = array[i].skill;
// 		newObj["user"] = userArr;

// 		// console.log(newObj["skill"]);
// 		// console.log(newObj["user"]);

// 		if (newArr.length === 0) {
// 			newArr.push(newObj);
// 		} 

// 		for (var t = 0; t < newArr.length; t++) {
// 			if (newArr[t].skill === array[i].skill){
// 				var userToAdd = newObj.user[0];
// 				console.log("USER TO ADD: " + userToAdd);
// 				newArr[t]["user"].push(userToAdd);
// 			} else {
// 				console.log("HERE");
// 				console.log("HERE 2: " + newObj);
// 				userArr.push(newObj);
// 				console.log("ARRAY: " +userArr);
// 			}
// 		}

// 	}
// 	console.log(newArr);
// };

var newArray = function(array) {
	var skillArr = [];
	skillArr.push(array[0].skill);
	
	for (var i = 0; i < array.length; i++) {
		// var skill = array[i].skill;
		// skillArr.push(array[0].skill);
		for (var j = 0; j < skillArr.length; j++) {
			if (j === skillArr.length) {
				var skillObj = {};
				skillObj["skill"] = array[i].skill;
				skillArr.push(skillObj);
			}
		}
	}
	console.log(skillArr);
	// return skillArr;
}

newArray(endorsements);

// organize(endorsements);