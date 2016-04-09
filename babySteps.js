var sum = 0;
for (var j = 2; j < process.argv.length; j++){
  sum += Number(process.argv[j]);
}
  
console.log(sum);

