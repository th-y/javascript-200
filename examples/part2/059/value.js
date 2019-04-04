export let value = 1;

setTimeout(() => {
    value++;
}, 1000);

setTimeout(() => console.log(value), 2000);