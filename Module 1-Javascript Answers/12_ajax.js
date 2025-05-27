function submitRegistration(user) {
  document.querySelector("#status").textContent = "Submitting...";
  setTimeout(() => {
    fetch('https://mockapi.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(() => document.querySelector("#status").textContent = "Success!")
      .catch(() => document.querySelector("#status").textContent = "Failed!");
  }, 1000);
}
