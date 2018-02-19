"use strict";
/**
 * Created by user on 2018/2/19/019.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function getStatic(target) {
    // @ts-ignore
    return target.__proto__.constructor;
}
exports.getStatic = getStatic;
exports.default = getStatic;
