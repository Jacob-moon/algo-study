const arr = [1, 2, 3];
arr.push(4);      // 맨 뒤 삽입
arr.unshift(0);   // 맨 앞 삽입
arr.pop();        // 맨 뒤 삭제
arr.shift();      // 맨 앞 삭제
console.log(arr);

// set-basic.ts
const set = new Set([1, 2, 3]);
set.add(2);      // 중복은 추가 안 됨
set.add(4);
set.delete(1);
console.log(set.has(4)); // true
console.log(set);