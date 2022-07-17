console.log('red')

const customerBtn = document.getElementById("customer");

const filmmakerBtn = document.getElementById("filmmaker");

const div1 = document.getElementById("case1");
const div2 = document.getElementById("case2");

customerBtn.addEventListener("click", (event) => {
  document.getElementById("case1").style.display = "block";
  document.getElementById("case2").style.display = "none";
})

filmmakerBtn.addEventListener("click", (event) => {
  console.log("html", div2);
  document.getElementById("case1").style.display = "none";
  document.getElementById("case2").style.display = "block";
})