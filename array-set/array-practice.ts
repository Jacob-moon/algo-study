const arr1 = [10, 20, 30, 40];

//읽기
console.log(arr1[2]);

// 검색
console.log(arr1.includes(20));
console.log(arr1.indexOf(50));

// 삽입
arr1.push(50);
arr1.unshift(5);
console.log(arr1);

//삭제
arr1.pop();
arr1.shift();
console.log(arr1);

arr1.splice(2, 0, 25);
console.log(arr1);
arr1.splice(3, 1);
console.log(arr1);