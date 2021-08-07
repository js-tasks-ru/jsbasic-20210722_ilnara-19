let str = 'grid-gap-column';

let itemIndex;

let strNew;

function camelize(str) {
  
  let arr = str.split(''); 


  while (arr.indexOf ('-') != -1) {
    itemIndex = arr.indexOf('-'); 
    arr.splice(itemIndex, 1); 
    arr[itemIndex] = arr[itemIndex].toUpperCase() +       arr[itemIndex+1];  
    arr.splice(itemIndex + 1, 1); 
  }
  
  strNew = arr.join('');
  return strNew; 
}

console.log(camelize(str));
