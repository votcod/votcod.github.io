$(document).ready(function(){
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
$('.header__burger').click(function(event){
    $('.header__burger,.header__menu, .header__link, .header__name,.header__photo').toggleClass('active');
    $('body').toggleClass('lock');
 });

$('.header__link,.header__menu').click(function(event){
   $('.header__burger,.header__menu').removeClass('active');
   $('body').removeClass('lock');
});

});


$(document).ready(function(){
	$('.slider').slick({
		/*стрелки*/
		arrows:true,
		/*точки*/
		dots:true,
		/*центрирование текущего слайда. Лучше всего использовать с text-align: center; для item*/
		centerMode: false,
		/*кол-во слайдов для показа*/
		slidesToShow:1,
		/*кол-во слайдов, которые будут пролистываться за один клик*/
		slidesToScroll:1,
		/*автопроигрование слайдов*/
		autoplay:false,
		/*скорость перелистывания слайдов*/
		speed:1000,
		/*остановка автопроигрования при клике на слайдер*/
		pauseOnFocus: true,
		/*остановка автопроигрования при наведении на слайдер*/
		pauseOnHover: true,
		/*остановка автопроигрования при наведении на точки слайдера*/
		pauseOnDotsHover: true,
		/*анимация перелистывания слайдов*/
		easing: 'linear',
		/*скорость автопроигрования слайдов*/
		autoplaySpeed:800,
		/*подстройка сладйдера по высоте слайда ДЛЯ ЛЕНТЫ ДОБАВИТЬ align-items: flex-start;*/
		adaptiveHeight:false,
		/*бесконечность слайдера*/
		infinite: true,
		/*стартовый слайд*/
		initialSlide:0,
		/*свайп слайдов с помощью мышки на ПК*/
		draggable:true,
		/*свайп слайдов с помощью пальца на моб. устройстве*/
		swipe:true,
		/*область срабатывания свайпа*/
		touchThreshold: 5,
		/*возможность передвигать слайд*/
		touchMove:true,
		/*ожидание завершения анимации перед свайпом*/
		waitForAnimate:true,
		/*дает возможность слайдам оперделять ширину слайдера*/
		variableWidth:false,
		/*количество рядов в слайдере*/	
		rows:1,
		/*количество колонок слайдов в ряду*/
		slidesPerRow:2,
		/*вертикальный слайдер, при использованиии не забыть отключить flex-start для ленты и установить высоту для item */
		vertical:false,
		/*вертикальный свайпинг*/
		verticalSwiping:false,
		/*плавная смена слайдов, вместо пролистывания*/
		fade:false,
		// /*связать с другим слайдером для синхронной смены картинок*/
		// asNavFor:".класс слайдера",
		// /*адаптивность слайдера*/
		// responsive:[{
		// 	breakpoint: 768,
		// 	settings: {}
		// }]
		// изменение при адаптиве с max-width на min-width
		// mobileFirst:false,
		// /*перемещение стрелок и точек*/
		// appendArrows: $('.название класса'),
		// appendDots:  $('.название класса'),
	});
});