window.onload = function(){
	//variables for navbar
	const navbar = document.querySelector('.navbar');
	const navbarLi = navbar.querySelectorAll('li');//this will return the array of all elements

	//applying event listeners for click on each li
	for(let i=0; i<navbarLi.length;i++){
		navbarLi[i].addEventListener('click',function(e){
			const navbarLiActive = navbar.querySelector('li.active');

			//logic
			navbarLiActive.classList.remove('active');
			this.classList.add('active');
		});
	}

	//varibales for slider
	const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');
	const sliderIndicator = document.querySelector('.slideindicators');
	const sliderIndicatorInput = sliderIndicator.querySelectorAll('input');
	

	// adding addEventListener
	prevBtn.addEventListener("click",function(){
		prevSlide();
	});
	nextBtn.addEventListener("click",function(){
		nextSlide();
	});
	for(let i =0; i <sliderIndicatorInput.length; i++) {
		sliderIndicatorInput[i].addEventListener("click",function(){
			sliderIndicators(i);
		});
	}
}
let slideNo = 0;
const prevSlide = ()=>{
	const sliderIndicator = document.querySelector('.slideindicators');
	const sliderIndicatorInput = sliderIndicator.querySelectorAll('input');
	const slider = document.querySelector('.slides');
	const slides = slider.querySelectorAll('.slide');
	const slideCount = document.querySelector('.slideCount');
	const slideCountSpan = slideCount.querySelectorAll('span');
	const slideCountSpanActive = slideCount.querySelector('span.active');
	const bannerBefore = document.querySelector('.banner-before');
	const bannerBeforeSpanActive = bannerBefore.querySelector('span.active');
	const bannerBeforeSpan = bannerBefore.querySelectorAll('span');

	//logic
	slideCountSpanActive.classList.remove('active');
	bannerBeforeSpanActive.classList.remove('active');
	if(slideNo == 0){
		slideNo = slides.length -1;
	}else{
		slideNo -= 1;
	}
	slider.style.marginLeft = '-'+slideNo+'00%';
	sliderIndicatorInput[slideNo].checked = true;
	slideCountSpan[slideNo].classList.add('active');
	bannerBeforeSpan[slideNo].classList.add('active');
};
const nextSlide = ()=>{
	const sliderIndicator = document.querySelector('.slideindicators');
	const sliderIndicatorInput = sliderIndicator.querySelectorAll('input');
	const slider = document.querySelector('.slides');
	const slides = slider.querySelectorAll('.slide');
	const slideCount = document.querySelector('.slideCount');
	const slideCountSpan = slideCount.querySelectorAll('span');
	const slideCountSpanActive = slideCount.querySelector('span.active');
	const bannerBefore = document.querySelector('.banner-before');
	const bannerBeforeSpanActive = bannerBefore.querySelector('span.active');
	const bannerBeforeSpan = bannerBefore.querySelectorAll('span');

	//logic
	slideCountSpanActive.classList.remove('active');
	bannerBeforeSpanActive.classList.remove('active');
	if(slideNo == slides.length-1){
		slideNo = 0;
	}	else{
		slideNo += 1;
	}
	slider.style.marginLeft = '-'+slideNo+'00%';
	sliderIndicatorInput[slideNo].checked = true;
	slideCountSpan[slideNo].classList.add('active');
	bannerBeforeSpan[slideNo].classList.add('active');
};
const sliderIndicators = (i)=>{
	const slider = document.querySelector('.slides');
	const slides = slider.querySelectorAll('.slide');
	const slideCount = document.querySelector('.slideCount');
	const slideCountSpan = slideCount.querySelectorAll('span');
	const slideCountSpanActive = slideCount.querySelector('span.active');
	const bannerBefore = document.querySelector('.banner-before');
	const bannerBeforeSpanActive = bannerBefore.querySelector('span.active');
	const bannerBeforeSpan = bannerBefore.querySelectorAll('span');

	//logic
	slideCountSpanActive.classList.remove('active');
	bannerBeforeSpanActive.classList.remove('active');
	slideNo = i;
	slider.style.marginLeft = '-'+slideNo+'00%';
	slideCountSpan[slideNo].classList.add('active');
	bannerBeforeSpan[slideNo].classList.add('active');

};