function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 30;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        home.classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);


window.addEventListener('scroll', function() {
	var element = document.querySelector('#container');
	var position = element.getBoundingClientRect();

	// checking for partial visibility
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
    const stcounters = this.document.querySelectorAll(".counter");
    for (let i = 0; i < stcounters.length; i++) {
    stcounters[i].classList.add("start");
    }
    const counters = document.querySelectorAll('.counter.start');
    const speed = 300;
    counters.forEach( counter => {
    const animate = () => {
    const value = +counter.getAttribute('number');
    const data = +counter.innerText;
   
    const time = value / speed;
    if(data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 50);
      }else{
        counter.innerText = value;
      }
   
    }
 
    animate();
    });
	}
});