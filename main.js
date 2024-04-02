function flipcoin(){
 let result = Math.round(Math.random());
 if (result === 1) {
  return  "head";
 } else {
  return "tails";
 }
}
console.log(flipcoin())
