const arr = [1];
const objss = { name: { dog: "chos", cat: "meo" }, age: 230 };

const xxx = arr.reduce((ob, item) => {
  return ob["name"];
}, objss);

xxx.dog = "gogogo";

console.log(objss);
