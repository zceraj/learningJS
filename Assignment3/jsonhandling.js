var response = null;
var followers = null;

document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
  getUser(document.getElementsByTagName('input')[0].value);
});


function getUser(name) {
  fetch('https://api.github.com/users/' + name)
    .then(function(r) {
      return r.json();
    })
    .then(function(j) {
      response = j;
      assignValues();
      getFollowers(j.followers_url);
    })
}

// a bunch of selectors, my more intutitve way to do it 
function assignValues() {
  document.getElementById('loader').style = 'display: none';

  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('name').innerText = response.name;
  document.getElementById('username').innerText = response.login;
  document.getElementById('location').innerText = response.location;
  document.getElementById('bio').innerText = response.bio;
  document.getElementById('count').innerText = 'Followers: ' + response.followers;
}

function getFollowers(url) {
  fetch(url)
    .then(function(r) {
      return r.json();
    })
    .then(function(f) {
      followers = f;
      listFollowers();
    });
}

// standard foreach loop --> creates a list element 
function listFollowers() {
  followers.forEach(function(f) {
    var li = document.createElement('li');
    // url of the follower 
    li.innerHTML = '<a href="' + f.html_url + '">'
    // if you hover on the follower you get their username 
      + '<img src="' + f.avatar_url + '" alt="' + f.login + '"/>'
      + '</a>';
    document.getElementById('list').appendChild(li);
  });
}