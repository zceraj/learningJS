fetch('https://api.github.com/users/zceraj')
  .then(function(r) {
    console.log(r.status);
    return r.json();
  })
  .then(function(j) {
    console.log(j);
  })
