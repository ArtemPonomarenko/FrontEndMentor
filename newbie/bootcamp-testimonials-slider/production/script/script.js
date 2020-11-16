var prev = $(".slider__btn--prev");
var next = $(".slider__btn--next");

prev.on("click", function(){
  $(".slider__photo img").attr("src", tanya.src);
  $(".slider__text").text(tanya.testimonial);
  $(".slider__name").text(tanya.name);
  $(".slider__position").text(tanya.position);
});
next.on("click", function(){
  $(".slider__photo img").attr("src", john.src);
  $(".slider__text").text(john.testimonial);
  $(".slider__name").text(john.name);
  $(".slider__position").text(john.position);
})


var tanya = {
  src: "images/image-tanya.jpg",
  id: 1,
  name: "Tanya Sinclair",
  position: "UX Engineer",
  testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future. ”`
};

var john = {
  src: "images/image-john.jpg",
  id: 2,
  name: "John Tarkpor",
  position: "Junior Front-end Developerr",
  testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
};





