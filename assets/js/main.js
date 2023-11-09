//Перше рівняння

let aa = 1 + 3 - 5 * 2;
let bb;
bb = 2 ** 3 / 5;
const cc = 7;
let result = aa + bb * cc;

console.log("Значення aa: " + aa);
console.log("Значення bb: " + bb);
console.log("Значення result: " + result);

//Друге рівняння

const a = 4;
const b = -5;
const c = 1;

const discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`Рівняння має два корені: x1 = ${x1}, x2 = ${x2}`);
} else if (discriminant === 0) {
  const x = -b / (2 * a);
  console.log(`Рівняння має один корінь: x = ${x}`);
} else {
  console.log("Рівняння не має реальних коренів");
}
