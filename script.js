document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var cta = document.querySelector('.nav-cta');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    if (cta) cta.classList.toggle('open');
  });
});
