document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var cta = document.querySelector('.nav-cta');
  if (toggle) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      if (cta) cta.classList.toggle('open');
    });
  }

  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = buildContactMailto(contactForm);
    });
  }
});

function buildContactMailto(form) {
  var name = form.querySelector('#name').value.trim();
  var business = form.querySelector('#business').value.trim();
  var email = form.querySelector('#email').value.trim();
  var message = form.querySelector('#message').value.trim();

  var subject = 'Enquiry from ' + name + (business ? ' (' + business + ')' : '');
  var lines = ['Name: ' + name];
  if (business) lines.push('Business: ' + business);
  lines.push('Email: ' + email, '', message);

  return 'mailto:hello@autonook.co.za'
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(lines.join('\n'));
}
