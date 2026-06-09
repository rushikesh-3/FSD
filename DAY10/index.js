function saveLocal() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  alert("Saved in Local Storage");
}

function saveSession() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);

  alert("Saved in Session Storage");
}

function showData() {
  let localName = localStorage.getItem("name");
  let localEmail = localStorage.getItem("email");

  let sessionName = sessionStorage.getItem("name");
  let sessionEmail = sessionStorage.getItem("email");

  document.getElementById("output").innerHTML =
    "<b>Local Storage:</b><br>" +
    localName +
    " - " +
    localEmail +
    "<br><br>" +
    "<b>Session Storage:</b><br>" +
    sessionName +
    " - " +
    sessionEmail;
}

function clearData() {
  localStorage.clear();
  sessionStorage.clear();

  alert("All Data Cleared");
}
