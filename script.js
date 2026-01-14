function showResult() {
  let name = document.getElementById("name").value;
  let marks = document.getElementById("marks").value;
  let result = document.getElementById("result");

  if (marks >= 40) {
    result.innerHTML = name + " has PASSED";
    result.style.color = "green";
  } else {
    result.innerHTML = name + " has FAILED";
    result.style.color = "red";
  }
}