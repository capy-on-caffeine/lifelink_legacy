window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY >= 50) {
      navbar.style.background = 'linear-gradient(90deg, hsl(0, 0%, 98%) 0%, hsl(0, 0%, 98%) 20%, hsl(0, 0%, 100%) 20%, hsl(0, 0%, 100%) 100%)';
    } else {
      navbar.style.background = 'transparent';
    }
});

const detailUpdateButton = document.getElementById('updateBtn');
detailUpdateButton.addEventListener('click', function() {
  var wrapper = document.querySelector('.modal-wrapper');
  wrapper.style.display = 'block';
  // const body = document.getElementById('bd');
  document.body.style.overflow = 'hidden !important';
});

const cancelButton = document.getElementById('cancelBtn');
cancelButton.addEventListener('click', function() {
  var wrapper = document.querySelector('.modal-wrapper');
  wrapper.style.display = 'none';
  // const body = document.getElementById('bd');
  document.body.style.overflow = 'auto';
});