var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    var faq = this.nextElementSibling;
    if (faq.style.display === "block") {
      faq.style.display = "none";
    } else {
      faq.style.display = "block";
    }
  });
}