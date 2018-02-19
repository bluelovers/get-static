/**
 * Created by user on 2018/2/19/019.
 */

// @ts-ignore
export function getStatic<T>(target): T
{
	// @ts-ignore
	return target.__proto__.constructor;
}

export default getStatic;
