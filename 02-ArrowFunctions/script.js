// Select all the list items on the page and convert to array
const arr = Array.from(document.querySelectorAll('[data-time]'));
//console.log(arr);
// Filter for only the elements that contain the word 'flexbox'
const arrFilter = arr
    .filter(item => item.textContent.includes("Flexbox"))
    .map( item => item.dataset.time)
    .map( item => {
          const splt = item.split(':');
          return splt[0]*60 + +splt[1];
    })
    .reduce((sum, current) => (+sum +  +current), 0);
// рџ”Ґ This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
console.log(arrFilter);