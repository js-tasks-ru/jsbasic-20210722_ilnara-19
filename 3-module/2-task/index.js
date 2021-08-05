let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let arrNew = [];

  for (let i = 0; i < arr.length; i++){
    
    if ( arr[i] >= a && arr[i] <= b) {
  
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console. log(arr);


