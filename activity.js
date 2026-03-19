function getElementsByAttribute(attribute, value) {
  // regex of all elements --> find all the elements 
  var all = document.getElementsByTagName('*');
  // empty array 
  var found = [];

  // loop through all the attributes 
  for (var i = 0; i < all. length; i++){ 
    element = all[i]; 
    //add it to the array if it has all the attribute
    if (all[i].getAttribute(attriute)==value){ 
      found.push(all[i]);
    }
  } 
  return found; 
} 
