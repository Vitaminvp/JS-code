const Box = x => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`
});

const char = str =>
  Box(str)
    .map(s => s.trim())
    .map(r => new Number(r))
    .map(i => ++i)
    .map(i => String.fromCharCode(i))
    .map(s => s.toLowerCase());

const result = char(' 64 ');

console.log(result)
