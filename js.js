///-заполнить массив числами от 1 до 15
 let arr = [];

for (let i = 1; i <= 15; i++) {
	arr[i] = i;
}
console.log(arr); 

///-заполнить массив числами от 7 до 15

  let arr = [];

for (let i = 7; i <= 15; i++) {
	arr[i] = i;
}
console.log (arr); 

///-заполнить массив числами от 1 до 10 меняя знак (1, -2, 3, -4...)
// выведет отдельно элементы массива
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log ( -i );
  }
  else {
      console.log (i);
  }
} 

// тот случай, когда намудрила, но работает 
let arr = [1,2,3,4,5,6,7,8,9,10]
for(let i = 1; i < arr.length; i++){

arr.splice(i,1, ++i*-1);
}
console.log(arr);

///-заполнить массив числами от 1 до 10, создать второй массив и перенести в него четные числа из первого

// вар 1
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = Object.assign([] ,arr1);
let result = arr2.filter(function(elem) {
	return elem % 2 == 0;
});

console.log (result);

// вар 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(n => n % 2 == 0);
console.log (oddNumbers);


///-создать массив С числами от 1 до 10, посчитать сумму всех элементов 
// вариант 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 1; i < arr.length; i++) {
	sum += arr[i];
}
console.log (sum);

// вариант 2

let arr = [];
let sum = 0;
for (let i = 1; i <= 10; i++) {
  arr [i] = i;
	sum += arr[i];
}
console.log (sum);

// вариант 3

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const total = numbers.reduce((total, n) => total + n);
console.log(total);

///-создать массив С числами от 1 до 10, посчитать сумму квадратов всех нечетных элементов

let arr = [];
let sum = 0;
for (let i = 1; i <= 10 ; i += 2) {
  arr [i] = i;
  sum += arr[i] * arr[i];
}
console.log (sum);
 
///-создать array(1-23, 1) и array(1-23, 3), перенести в третий массив числа, которые есть в обоих массивах

let arr1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let arr2 = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
function unique(arr3){
  let result = [];
  for (let str of arr3) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let arr3 = arr1.concat(arr2)
arr3.sort(function(a,b){ 
  return a - b
})
console.log( unique(arr3) ); 


///-заполнить массив так [1, 2, 2, 3, 3, 3, ...] числами от 1 до 10 повторяться должны только четные значения, а нечетные - записываться один раз
