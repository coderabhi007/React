function genTicket(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 10));
}

function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

export { genTicket, sum };
