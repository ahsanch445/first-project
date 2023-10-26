

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:.2,
    y:10,
    duration:1,
   ease:Power3,
    opacity:0
   
})
Shery.textAnimate(".heading h1" , {
   
    style: 2,
    y: 20,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".animi",{
    y:50,
    stagger:.5,
    opacity:0,
    ease:Expo,
    duration:1,
  });

  Shery.imageEffect(".allinone img", {
    style: 3 ,
    config:{"uFrequencyX":{"value":13.22,"range":[0,100]},"uFrequencyY":{"value":5.79,"range":[0,100]},"uFrequencyZ":{"value":34.71,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.7},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500220089796638},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
    
    
  });
  Shery.imageEffect(".sustainimg img", {
    style: 5 ,
   config:{"a":{"value":0.99,"range":[0,30]},"b":{"value":-0.59,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5999847409781033},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,


  });
  gsap.from(".textimg img",{
    y:"70",
    duration:1,
    opacity:0,
    ease:Expo
  })

  Shery.imageEffect("#banimg", {
    style: 5,
    config:{"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.93,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1505452342487885},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.31,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
   
    gooey: true,
  });
  
  var vido =document.querySelector(".future button")
  vido.addEventListener("mouseover",()=>{
    gsap.to(".future video",{
      opacity:1,
duration:1,
ease:Power4
    })
  })
  var vido1 =document.querySelector(".future button")
  vido1.addEventListener("mouseleave",()=>{
    gsap.to(".future video",{
      opacity:0,
duration:1,
ease:Power4
    })
  })