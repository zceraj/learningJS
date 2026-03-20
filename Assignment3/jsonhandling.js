fetch('https://api.github.com/users/zceraj')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    document.getElementById('username').innerText = j.login;
  })
