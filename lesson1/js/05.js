let x = 6, y = 14, z = 4
//x += y - x++ * z;
console.log(x * z)//крок 1
console.log(y - x * z)//крок 2
console.log(x += y - x++ * z)//крок 3

x = 6, y = 14, z = 4
//z = --x - y * 5;
console.log(--x)//крок 1
console.log(y * 5)//крок 2
console.log(x - y * 5)//крок 3
console.log(z = x - y * 5)//крок 4
x = 6, y = 14, z = 4
//y /= x + 5 % z;
console.log(5 % z)//крок 1
console.log(x + 5 % z)//крок 2
console.log(y /= x + 5 % z)//крок 3
x = 6, y = 14, z = 4
//z = x++ + y * 5; 
console.log(y * 5)//крок 1
console.log(x + y * 5)//крок 2
console.log(z = x++ + y * 5)//крок 3
x = 6, y = 14, z = 4
//x = y - x++ * z;  
console.log(x * z)//крок 1
console.log(y - x * z)//крок 2
console.log(x = y - x++ * z)//крок 3