# get-static

> get static class by give a object

`npm install get-static`

## demo

```ts
const getStatic = require("get-static/node");

import getStatic from 'get-static';
```

```ts
export class A
{
	static b()
	{
		console.log('this is static b');
	}

	b()
	{
		console.log('this is b');
	}
}

export let a = new A();
export const c = getStatic<typeof A>(a);

c.b();
a.b();
```

```
this is static b
this is b
```

```ts
export declare class A {
    static b(): void;
    b(): void;
}
export declare let a: A;
export declare const c: typeof A;
```
