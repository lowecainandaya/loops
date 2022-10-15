export function loop(call, count) {
    for (var i = 0; i <= count; i++) {
        call();
    }
}
export function every(array, call) {
    for (var i = 0; i < array.length; i++) {
        call(array[i]);
    }
}
export function until(condition, call) {
    do {
        call();
    } while (condition === true);
}
const main = {
    loop, every, until
};
export default main;
