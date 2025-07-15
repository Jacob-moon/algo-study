const set1 = new Set([10, 20, 30, 40]);

//검색
console.log(set1.has(20));
console.log(set1.has(50));

//삽입
set1.add(50);
set1.add(10); //중복 안됨
console.log(set1);

//삭제
set1.delete(20);
console.log(set1);