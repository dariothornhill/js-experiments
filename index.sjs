syntax repeat = function (ctx) {
    var ident =  ctx.next().value;
    var code = ctx.next().value;
    return #`for (let i = 0; i < ${ident}; i++) { ${code} }`;
}
syntax nine = function(ctx) {
    var ident =  ctx.next().value;
    var code = ctx.next().value;
    return #`for (let i = 0; i < ${ident}; i++) { repeat 3(${code}) }`;
}

nine 3(console.log('.'));
console.log("done");



