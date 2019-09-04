const arr = [{ Id: 1 }, { Id: 2, Name: "Petya" }, { Id: 3, LastName: "Vitya" }];

var obj = [{ a: 1 }, { b: 2 }, { c: 3 }];

console.log(arr.reduce((a,b) => Object.assign(a,b)));

console.log(Object.assign({}, ...obj));