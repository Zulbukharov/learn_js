## ARRAY

> declare array

```js
let todoList = [];
```

```js
function rememberTo(task) {
	todoList.push(task);
}
```

```js
function whatIsNext() {
	return todoList.shift();
}
```

```js
function urgentlyRememberTo(task) {
	todoList.unshift(task);
}
```

```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
```

```js
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```

```js
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
```

```js
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```

> add elements in slice

```js
console.log(["hello", "bro"].join(" "));
// -> hello bro
```

```js
[1].concat([2])
// [1, 2]
```

## STRINGS

> strings are constants

```js
console.log("раз два три".indexOf("ва"));
// -> 5 
```

```js
console.log(" ладно \n ".trim());
// → ладно
```