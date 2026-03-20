fetch('https://api.github.com/users/zceraj')
  //the then is for sequential requests 
  .then(function(r) {
    // r is the response object which is the response from the server
    console.log(r.status);
    return r.json();
  })
  // then calls are similar to callbacks but used for promises 
  .then(function(j) {
    console.log(j);
  })
  // can continue to chain then calls 
