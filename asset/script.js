function handleSubmit(event) {
  event.preventDefault(); // prevent the form from submitting normally

  // get the form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // save the data in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);

  // clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  console.log('Form data saved to local storage.');
}