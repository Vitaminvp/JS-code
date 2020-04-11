

Promise.sequence([wait(1000), wait(2000), wait(3000)]).then(() => {
  console.log(`Done after approx 6 sec :)`);
});

const wait = ms => new Promise(resolve => setTimeout(() => resolve(ms), ms));
const timeNow = () => new Date().toLocaleString();

const promiseChain = arr => {
  if (!arr.length) return arr;
  const onePromise = (res, i) => {
    if (i < arr.length) {
      arr[i].then(data => {
        console.log(timeNow());
        return onePromise([...res, data], ++i);
      });
    } else {
      return res;
    }
  };
  return onePromise([], 0);
};

console.log(promiseChain([wait(1000), wait(2000), wait(3000)]))
