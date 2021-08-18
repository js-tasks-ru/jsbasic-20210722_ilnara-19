
function makeFriendsList(friends) {
 
  let ul = document.createElement('ul');
    
  for (let j = 0; j < friends.length; j++) {
    let li = document.createElement('li');
    li.innerHTML = (friends[j].firstName + ' ' + friends[j].lastName);
    ul.append(li);
  }
  
  return ul;
}



