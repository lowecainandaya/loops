"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.until = exports.every = exports.loop = void 0;
function loop(call, count) {
    for (var i = 0; i <= count; i++) {
        call();
    }
}
exports.loop = loop;
function every(array, call) {
    for (var i = 0; i < array.length; i++) {
        call(array[i]);
    }
}
exports.every = every;
function until(condition, call) {
    do {
        call();
    } while (condition === true);
}
exports.until = until;
const main = {
    loop, every, until
};
exports.default = main;
