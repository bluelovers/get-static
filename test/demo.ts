/**
 * Created by user on 2018/2/19/019.
 */

import getStatic from '..';

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
