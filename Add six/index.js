function createBase(base){
 function add(num){
     return base + num;
 }
  return add;
}
const addSix = createBase(6);
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));