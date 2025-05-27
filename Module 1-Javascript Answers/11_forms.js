document.querySelector("#regForm").onsubmit = function(e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;
  if (!name.value || !email.value) {
    document.querySelector("#error").textContent = "All fields required!";
    return;
  }
  // process registration
};
