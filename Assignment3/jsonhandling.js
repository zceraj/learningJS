fetch('https://api.github.com/users/zceraj')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    document.getElementById('username').innerText = j.login;
  })
  .then(function(e) {
    console.log(e);
    document.getElementById('avatar').innerText = e.avatar_url;
  })
  .then(function(e) {
    console.log(e);
    document.getElementById('realname').innerText = e.name;
  })
  .then(function(e) {
    console.log(e);
    document.getElementById('location').innerText = e.location;
  })
  .then(function(e) {
    console.log(e);
    document.getElementById('bio').innerText = e.bio;
  })
  .then(function(e) {
    console.log(e);
    document.getElementById('num-followers').innerText = e.followers;
  })
  .then(function(e) {
    console.log(e);
    document.getElementById('loading').innerText = 'Loading...';
  }); 
  // display avatar, username, real name, location, bio, and num followers 
  // get username and avatar of followers 
  // add a loading indicator 
  // add an input box that takes in other names to display 
