var active = 3;
var minicircles = document.querySelectorAll(".minicircle");
 gsap.to(minicircles[active-1],{
  opacity: 20
 })


 var sec = document.querySelectorAll(".sec");
 gsap.to(sec[active-1],{
  opacity: 1 
  // delay: 1
 })




 minicircles.forEach(function(val,index){
  val.addEventListener("click",function(){
    gsap.to("#circle",{
      rotate: (3-(index+1))*10,
      ease: Expo.easeInOut,
      duration: 2
    })
    greyout();
    gsap.to(this, {
      opacity: 20,
      duration: 1
    })
    gsap.to(sec[index],{
      opacity: 1,
      // delay: 1
    })



     gsap.to(sec[active-1], {
       opacity: 0.4,
      // delay: 1
    })
  })

function greyout(){
  gsap.to(minicircles, {
    opacity: .08,
    // duration: 1
  })
  gsap.to(sec, {
    opacity:  .4,
    // delay: 1
  })
}



gsap.to("#circle",{
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2
})

 });
