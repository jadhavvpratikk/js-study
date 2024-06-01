const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

//marvelHeroes.push(dcHeroes);

//console.log(marvelHeroes);
//It got merge because of push both as below
//It performs action on shallow copy = same reference
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//in 3 index of array if we want to access each element we have to do below operation - bad practice
// console.log(marvelHeroes[3][0]);//superman
// console.log(marvelHeroes[3][1]);//flash
// console.log(marvelHeroes[3][2]);//batman

const newConcat = marvelHeroes.concat(dcHeroes);

//console.log(newConcat);
//It performs deep copy = new references
//Now the output is in concat mode = Combines two array and return a new array
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//another way to join using spread
//take a example of glass and drop it it will be spread like ...
//const newSpread = [...marvelHeroes, ...dcHeroes];//joins two arrays

//console.log(newSpread);

const newArrayInArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
//above contains arrays inside array with element and inside element there is another array

const newJoinedArray = (newArrayInArray.flat(Infinity));//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

//console.log(newJoinedArray);


//to check we have array - use isArray

console.log(Array.isArray("Pratik"));//false

//from is used to convert the string to array

console.log(Array.from("Pratik"));//[ 'P', 'r', 'a', 't', 'i', 'k' ]

console.log(Array.from({name:"pratik"}));//[]
//it will give empty array because it not able to convert  inside {} flower bracket

//of operator  - return a array
let scope1 = 100
let scope2 = 200
let scope3 = 300
console.log(Array.of(scope1,scope2,scope3));//[ 100, 200, 300 ]






