
const header = () => {

  // scroll header
  const scrollHeader = () => {
  	const headerBg = document.querySelector('.header__bg');
  	const headerIntro = document.querySelector('.header__intro');
  	const sectionBelow = document.querySelector('header.header').nextSibling.nextElementSibling.offsetTop;
  	window.addEventListener('scroll', function () {

  		if (sectionBelow >= window.pageYOffset) {
  			const topOffset = document.querySelector('body').scrollTop;
        // pure JS
  			// headerBg.setAttribute('style', 'top:' + -(topOffset/10) + '%;');
  			// headerIntro.setAttribute('style', 'top:' + (50 + topOffset / 40).toFixed(2) + '%');
        // jQuery
        $(headerBg).css({
         'top' : -(topOffset/10) + '%',
        });
        $(headerIntro).css({
         'top' : (50 + topOffset / 40).toFixed(2) + '%',
        });
  		}

  	});
  };

  // typed
  const typeIntro = () => {
  	$(".typed").typed({
  		strings: ["My name is A. Kierski", "I'm a front-end developer", "I love simplicity"],
  		typeSpeed: 100,
  		backDelay: 900,
  		loop: true
  	});
  };

  // indicator
  const moveToSection = () => {

  	const indicator = document.querySelector('.indicator');
  	const sectionBelow = document.querySelector('header.header').nextSibling.nextElementSibling;
  	const sectionBelowoffsetTop = sectionBelow.offsetTop;
  	const header = document.querySelector('header.header');
  	const headerffsetTop = header.offsetTop;

  	// window.addEventListener
  	window.addEventListener('scroll', function () {
  		if (sectionBelowoffsetTop / 2 >= window.pageYOffset) {
  			indicator.classList.remove('indicator--animate');
  		} else {
  			indicator.classList.add('indicator--animate');
  		}
  		checkHash();
  	});

  	// click listener
  	indicator.addEventListener('click', function (e) {
  		e.preventDefault();

  		if (indicator.href.substr(this.href.lastIndexOf('/') + 1) === header.id) {
  			$('html,body').animate({
  				scrollTop: headerffsetTop
  			}, 500);
  		} else {
  			$('html,body').animate({
  				scrollTop: sectionBelowoffsetTop
  			}, 500);
  		}

  		indicator.classList.toggle('indicator--animate');
  		checkHash();
  	});

  	const checkHash = () => {
  		if (indicator.classList.contains('indicator--animate')) {
  			indicator.href = header.id;
  		} else {
  			indicator.href = sectionBelow.id;
  		}
  	};

  };

  // functions init
  scrollHeader();
  typeIntro();
  moveToSection();

};
