const arr = [
    {name: '헤림', age: 6},
    {name: '현일', age: 3},
    {name: '현아', age: 5},
    {name: '우림', age: 2}
];

const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});

const arr3 = arr.map(el => el.name);

console.log(arr2);
console.log(arr3);