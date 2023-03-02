# console.write()
This adds an additional function for the global [`console`](https://developer.mozilla.org/en-US/docs/Web/API/Console) object. With `console.write()` you can write directly to the stdout process of [Deno](https://deno.land/). As I mentioned this function is written for [Deno](https://deno.land/) and will **only** work with the Deno runtime environment! If you use `console.write()` remember that it is an **async** function. So you have to await it if needed.

## How to use

###### import
```ts
import 'console.ts';
```

###### syntax
```ts
console.write(data : Uint8Array);
```

###### example
```ts
await console.write(new TextEncoder().encode('Hello World!'));
```

###### output
```
Hello World!
```




## Why not simply use `console.log()`?
In `console.log()`, a `\n` always gets appended to the end as a newline character. With `console.write()` you can write directly to the stdout and have much more control over it.




## As a comparison

###### using `console.log()`
```ts
console.log('Hello World 1!');
console.log('Hello World 2!');
```
results in:
```
Hello World 1!   <--- Linebreak (\n)
Hello World 2!   <--- Linebreak (\n)
                 <--- New empty line
```

###### using `console.write()`
```ts
await console.write(new TextEncoder().encode('Hello World 1!'));
await console.write(new TextEncoder().encode('Hello World 2!'));
```
results in:
```
Hello World 1!Hello World 2!   <--- No Linebreak
```




## Final words
I hope this little function will help you with your projects. 😜❤
