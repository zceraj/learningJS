function getElementsByAttribute(attribute, value) {
  var all = document.getElementsByTagName('*');
  var found = [];
  
  for (var i = 0; i < all. length; i++){ 
    element = all[i]; 
    if (all[i].getAttribute(attriute)==value){ 
      found.push(all[i]);
    }
  } 
  return found; 
} 
