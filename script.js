window.onload = function() {
    document.getElementById('image').classList.add('show');
      setTimeout(function() {
          document.getElementById('delayed').style.display = 'block';
          document.getElementById('main').style.margin = 0;
      }, 20000); // 10 seconds
  };

  function checkPassphrase() {
    let passphrase = prompt("Please enter the passphrase:");

    if (passphrase === "he who seeks, finds") {
        window.location.href = "anfang.html"; // Replace with target URL
    } else {
        alert("Incorrect passphrase. Please try again.");
    }
}
