function slide1(){
  let imgSlider = document.getElementById('slider');
  imgSlider.classList.add('slider-1')
  imgSlider.classList.remove('slider-2')
  setTimeout("slide2()", 6000)
}

function slide2(){
  let imgSlider = document.getElementById('slider')
  imgSlider.classList.add('slider-2')
  imgSlider.classList.remove('slider-1')
  setTimeout("slide1()", 6000)
}