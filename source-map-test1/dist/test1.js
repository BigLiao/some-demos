var btn = document.getElementById('btn');
function add(a, b) {
    return a + b;
}
function handlerClick() {
    console.log('1+2=', add(1, 2));
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', handlerClick);
//# sourceMappingURL=test1.js.map