const menuIcon = document.querySelector('.menu-icon')
const header = document.querySelector('header')
const scroll = document.querySelector('body')

menuIcon.addEventListener('click', ()=>{
  menuIcon.classList.toggle('menu-icon--active')
  header.classList.toggle('header-mobile')
  scroll.classList.toggle('no-scroll')
})

/*SLIDER-ARROWS*/

const sliderArrows = document.querySelector('.slider-arrows'),
      slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__items'),
      prev = sliderArrows.querySelector('.left-arrow'),
      next = sliderArrows.querySelector('.right-arrow')


let slideIndex =0;

prev.addEventListener('click', () => showSlideArrow(-1))
next.addEventListener('click', () => showSlideArrow(1))

function showSlideArrow(n){
  // console.log(n)

  slideIndex += n;
  
  if(slideIndex < 0){
    slideIndex = slidesArrows.length -1
  }
  if(slideIndex >= slidesArrows.length){
    slideIndex = 0
  }

  slidesArrows.forEach(item => item.style.display = 'none')
  slidesArrows[slideIndex].style.display = 'block'
}

showSlideArrow(0)








/*SLIDER POINTS*/

const sliderPoints = document.querySelector('.slider-points'),
      slidesPoints = sliderPoints.querySelectorAll('.slider-points__item'),
      wrapperPoints = sliderPoints.querySelector('.slider-pointer__items')


const points =[]

for(let i = 0; i < slidesPoints.length; i++){
  const point = document.createElement('button')

  point.dataset.slideTo = i
  point.classList.add('point')
  point.classList.add('opacity')
  

  point.addEventListener('click', showSlidePoints)

  wrapperPoints.append(point)

  points.push(point)
}






/*SLIDER POINTS TIMER*/

function timerToSlider(){
  slideTo++
}

setTimeout(timerToSlider, 1000);


/*--------------*/






slidesPoints.forEach(item => item.style.display ='none')
slidesPoints[0].style.display ='block'
points[0].classList.add('point-active')

function showSlidePoints(e){
  const slideTo = e.target.dataset.slideTo

  slidesPoints.forEach(item => item.style.display ='none')
  slidesPoints[slideTo].style.display ='block'

  points.forEach(point => point.classList.remove('point-active'))
  e.target.classList.add('point-active')
}





/*SLIDER-3*/

const sliderOrange = document.querySelector('.orange'),
      slidersOrangeItems = sliderOrange.querySelectorAll('.orange__item'),
      nextOrange = sliderOrange.querySelector('.orange__arrow')


let indexOrange = 0

nextOrange.addEventListener('click',()=> nextSlider(1))

/*TIMER*/
let timerOrange = setInterval(nextSlider, 7000, 1)
nextOrange.addEventListener('click', ()=> clearInterval(timerOrange))
timerOrange = setInterval(nextSlider, 7000, 1)





function nextSlider(num){

  indexOrange += num

  if(indexOrange >= slidersOrangeItems.length){
    indexOrange = 0
  }

  slidersOrangeItems.forEach(item => item.style.display='none')
  slidersOrangeItems[indexOrange].style.display='block'


}
nextSlider(0)
