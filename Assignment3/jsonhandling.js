var response = null;
var followers = null;

function init() {
  var button = document.getElementById('enter');
  var input = document.getElementById('input');
  if (!button || !input) return;

  button.addEventListener('click', function() {
    var name = input.value.trim();
    if (!name) return;
    getUser(name);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function getUser(name) {
  // Reset UI (best effort)
  var loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'block';
    loader.innerText = 'Loading...';
  }

  fetch('https://api.github.com/users/' + encodeURIComponent(name))
    .then(function(r) {
      return r.json();
    })
    .then(function(j) {
      response = j;
      assignValues();
      return fetch(j.followers_url);
    })
    .then(function(r) {
      return r.json();
    })
    .then(function(f) {
      followers = f;
      listFollowers();
      if (loader) loader.style.display = 'none';
    })
    .catch(function(err) {
      console.error(err);
      if (loader) {
        loader.style.display = 'block';
        loader.innerText = 'Error loading user';
      }
    });
}

function assignValues() {
  var loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';

  // #avatar is a <div>, so we inject an <img>
  var avatar = document.getElementById('avatar');
  if (avatar) {
    avatar.innerHTML = '<img src="' + response.avatar_url + '" alt="' + response.login + '" />';
  }

  var realname = document.getElementById('realname');
  if (realname) realname.innerText = response.name || '';

  var username = document.getElementById('username');
  if (username) username.innerText = response.login || '';

  var location = document.getElementById('location');
  if (location) location.innerText = response.location || '';

  var bio = document.getElementById('bio');
  if (bio) bio.innerText = response.bio || '';

  var numFollowers = document.getElementById('num-followers');
  if (numFollowers) numFollowers.innerText = 'Followers: ' + (response.followers || 0);
}

function listFollowers() {
  // Create the list if it doesn't exist in the HTML.
  var list = document.getElementById('list');
  if (!list) {
    list = document.createElement('ul');
    list.id = 'list';
    var container = document.querySelector('.container') || document.body;
    container.appendChild(list);
  }
  list.innerHTML = '';

  if (!followers || !Array.isArray(followers)) return;

  followers.forEach(function(f) {
    var li = document.createElement('li');
    li.innerHTML =
      '<a href="' + f.html_url + '" target="_blank" rel="noreferrer">' +
        '<img src="' + f.avatar_url + '" alt="' + f.login + '"/>' +
      '</a>';
    list.appendChild(li);
  });
}