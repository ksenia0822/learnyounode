// console.log(process.argv);

// process.argv.forEach(function(val, index, array) {
//   console.log(index + ': ' + val);
// });

var result = 0;
for(var i = 2; i < process.argv.length; i++) {
	result += Number(process.argv[i]);
}
console.log(result);