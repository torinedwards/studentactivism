$(document).ready(function() {
	const $cont = $('.cont');
	const $slider = $('.slider');
	const $nav = $('.nav');
	const winW = $(window).width();
	const animSpd = 750; // Change also in CSS
	const distOfLetGo = winW * 0.2;
	let curSlide = 1;
	let animation = false;
	let diff = 0;

	// Generating slides
	let arrCities = ['','Speech Ban Protests (1963-1965)', 'Civil Rights Protests (1963-1964)', 'Food Workers Strike (1968-1969)', 'Anti-War Protests (1969-1970)', 'Anti-Apartheid Activism (1982-1987)', 'Saunders Hall Protests', 'Silent Sam Movement', '\n']
	let logo = ['','sblogo','crlogo','lslogo','awlogo','aplogo', 'sdlogo', 'sblogo','mt']
	let slidecontent = [' ',' In the early 1960s, North Carolina, and the nation as a whole was a place of social unrest as a result of the rising Civil Rights movement. As many far-left leaning students and citizens began supporting a change from the status quo, many members of the General Assembly feared that other liberal ideas such as communism could gain popularity on campus and result in a challenge to our democratic process.  As a result, on June 26, 1963, the North Carolina General Assembly passed a bill forbidding any known communist and many communist sympathizers from speaking at any UNC school system campuses. Following the passage of the bill, students, faculty and administrators of UNC-Chapel Hill band together to oppose the law. Led, in part, by Student Body President Paul Dickson, the activists filed a successful lawsuit in the federal court system to have the bill thrown out.', 'In February of 1960, the Civil Rights Movement in Chapel Hill started when a group of young black students inspired by the Greensboro sit-ins staged their own at Colonial Drug, a drug store and lunch counter on Franklin Street. Similar to the Greensboro sit-ins, the young students demanded service and were arrested when they refused to leave. The event was the catalyst for future protests at the Carolina Theatre (now known as Varsity Theatre) and Carmichael Arena. Over the next few years, Chapel Hill shops and restaurants slowly began integrating leading up to the passage of the 1965 Civil Rights Act.', 'In February of 1969, just under four years after the Civil Rights Act was successfully passed, UNC-Chapel Hill had technically begun the process of desegregation, but for many students and staff, very little integration had occurred. For example, under two percent of the students on campus identified as non-white. Additionally, many of the black workers in Lenoir Dining Hall were paid below-minimum wage and forced to work off the clock. They also worked for supervisors who were often discriminatory and demeaning. As a result, on February 23, 1969, the lunch workers strike began. Over the coming days and weeks, students from the Black Student Movement, Campus Y, and other student organizations joined together to advocate on behalf of the workers and to coordinate students to help expand the strike. For the next three months, the movement continued on and off until employees were given a raise and black workers were placed in supervisory roles. The strike briefly resumed later on when the dining hall changed management and working conditions deteriorated. The strike finally ended in December when conditions improved.', 'One of the longest lasting and most contentious protests on campus was in regards to the Vietnam war. At first, most students on campus supported the war efforts with only a small number of students participating in anti-war activities. However, in 1963, roughly eight years into the conflict, anti-war groups such as The Student Peace Union and the Students for a Democratic Society began to rally students to protest the war. By 1964, more student organizations such as the Student Government, and the Carolina Political Union began advocating for more open discussions about the war. However, the movement became more strident in May of 1970 when the Student Government called for students to boycott class. More than half of the student body was participating in the protests by this point. A few days later, then-Student Body President Tommy Bello called for an emergency mass-meeting in Polk Place where students could share their feelings and urged students and faculty to support the strike. For the remainder of the semester, student protestors traveled around the state—and country—expressing their concerns about the war.', 'Beginning in 1982, students at UNC began to actively advocate for University funds to cease going to South African companies in order to avoid any kind of indirect support for the racially discriminatory apartheid laws that the South African government had instituted. For almost 4 years, students held rallies and wrote resolutions to try to get administrators to stop investing in South African companies. In early 1986, students decided to take a more drastic approach by building shanties in front of South Building in order to showcase the living conditions of the many South Africans who had been forced to move into shantytowns. Over the next year, student activists polled the student body and over almost two-thirds supported the total divestment of resources from South African companies. The University responded by reducing its investment, but not entirely divesting in South Africa. In 1987, a new student group, Action Against Apartheid, formed and less than a month later held an eight day hunger strike in protest of UNC investments in South Africa. Five months later, the UNC Endowment Board finally agreed to divest all funds in the region, but student continued to protest apartheid—going as far as interrupting University Day in 1987 to pass out leaflets in Memorial Hall. ', 'Thirty years after the death of Confederate Colonel, North Carolina Secretary of State and UNC alumnus William L. Saunders, the University of North Carolina at Chapel Hill christened Sanders Hall on the main quad in 1922. And, for almost 80 years, the building remained without much comment. Then, in 2001, the Black Student Movement recognized the need to change the name as a result of the ties between Col. Saunders and the Ku Klux Klan. Over the next 14 years, BSM and the Silent Sam Coalition partnered together to change the name of the building and remove other examples of white supremacy from the campus. Student protestors were joined by many faculty, staff, and concerned citizens in their efforts to change the name. In 2015, the Board of Trustees voted to rename the hall “Carolina Hall.” Since then, a tour on the history of the hall has been added.', 'At the dedication of the Confederate monument in 1913, on a still segregated UNC campus, former Confederate Soldier, UNC alumnus and Trustee Julian Carr spoke of the valor of his brothers in arms as well as the whipping black women and the importance of maintaining white supremacy despite the fall of slavery. Just over fifty years later, only months after the passage of the Civil Rights Act of 1965, the first recorded advocacy for more contextualization of Silent Sam was featured in the DTH. Over the next fifty years, students would time and time protest against the statue and what it represented. Then, in 2011, the Real Silent Sam Movement, organized by the Real Silent Sam Committee, intensified the protests. Over the next few years, students joined together from a variety of organizations to create a coordinated campaign to legally remove Silent Sam from the campus. Then, in 2018, on the night before the fall semester began, a large protest was held in support of movement leader Maya Little and her legal battles related to her involvement with the movement. The protest ultimately resulted in the statue being pulled down. Following the demonstration, student groups across campus including the Black Student Movement, Campus Y and the Student Government Executive Branch voiced their support of the statues toppling. ', ' ' ]

	 // Change number of slides in CSS also
	let numOfCities = arrCities.length;
	let arrCitiesDivided = [];




	// arrCities.map((city) => {
	// 	let length = city.length;
	// 	let letters = Math.floor(length / 4);
	// 	let exp = new RegExp(".{1," + letters + "}", "g");
	//
	// 	arrCitiesDivided.push(city.match(exp));
	// });

	let generateSlide = function(city) {
		let frag1 = $(document.createDocumentFragment());
		let frag2 = $(document.createDocumentFragment());
		const numSlide = arrCities.indexOf(arrCities[city]) + 1;
		// const firstLetter = arrCitiesDivided[city][0].charAt(0);
		const firstLetter = 'r';


		const $slide =
					$(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
							<div class="slide__darkbg slide--${numSlide}__darkbg"></div>
							<div class="slide__text-wrapper slide--${numSlide}__text-wrapper"></div>
						</div>`);

		const letter =
					$(`<div class="slide__letter slide--${numSlide}__letter">
							${firstLetter}
						</div>`);

		// for (let i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
		// 	const text =
		// 				$(`<div class="slide__text slide__text--${i + 1}">
		// 						${arrCitiesDivided[city][i]}
		// 					</div>`);
		// 	frag1.append(text);
		// }
		// blinking Text
		// get the element
// const text = document.querySelector('.typing-text');

const text = $('.typing-text');

// make a words array
const words = [
  "some call them protesters.",
  "...others call them activists.",
  "we call them students.",
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 100;
  const WORD_STAY_DELAY = 3000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    // element.textContent = textToType;
		$('.typing-text').html(textToType);
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}

	// content being appended on top of the image

	let toAdd = 	'<div class="outerbox"><div class="logo-position">'
		if(logo[city]){
			toAdd += `<img class="logo-size" src="images/${logo[city]}.png" alt="logo"></img>`
		}
		toAdd += `	</div>
					<div class='contain'>
						<div class="city">${arrCities[city]}</div>
						<div class='main-text'>${slidecontent[city]}</div>
					</div>

				</div>`;

		frag1.append(toAdd);







		// slider
		const navSlide = $(`<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`);
		frag2.append(navSlide);
		$nav.append(frag2);

		$slide.find(`.slide--${numSlide}__text-wrapper`).append(letter).append(frag1);
		$slider.append($slide);

		if (arrCities[city].length <= 4) {
			$('.slide--'+ numSlide).find('.slide__text').css("font-size", "12vw");
		}
	};

	for (let i = 0, length = numOfCities; i < length; i++) {
		generateSlide(i);
	}

	$('.nav__slide--1').addClass('nav-active');

	// Navigation
	function bullets(dir) {
		$('.nav__slide--' + curSlide).removeClass('nav-active');
		$('.nav__slide--' + dir).addClass('nav-active');
	}

	function timeout() {
		animation = false;
	}

	function pagination(direction) {
		animation = true;
		diff = 0;
		$slider.addClass('animation');
		$slider.css({
			'transform': 'translate3d(-' + ((curSlide - direction) * 100) + '%, 0, 0)'
		});

		$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - direction) * 50) + '%, 0, 0)'
		});

		$slider.find('.slide__letter').css({
				'transform': 'translate3d(0, 0, 0)',
		});

		$slider.find('.slide__text').css({
			'transform': 'translate3d(0, 0, 0)'
		});
	}

	function navigateRight() {
		if (curSlide >= numOfCities) return;
		pagination(0);
		setTimeout(timeout, animSpd);
		bullets(curSlide + 1);
		curSlide++;
	}

	function navigateLeft() {
		if (curSlide <= 1) return;
		pagination(2);
		setTimeout(timeout, animSpd);
		bullets(curSlide - 1);
		curSlide--;
	}

	function toDefault() {
		pagination(1);
		setTimeout(timeout, animSpd);
	}

	// Events
	$(document).on('mousedown touchstart', '.slide', function(e) {
		if (animation) return;
		let target = +$(this).attr('data-target');
		let startX = e.pageX || e.originalEvent.touches[0].pageX;
		$slider.removeClass('animation');

		$(document).on('mousemove touchmove', function(e) {
			let x = e.pageX || e.originalEvent.touches[0].pageX;
			diff = startX - x;
			if (target === 1 && diff < 0 || target === numOfCities && diff > 0) return;

			$slider.css({
				'transform': 'translate3d(-' + ((curSlide - 1) * 100 + (diff / 30)) + '%, 0, 0)'
			});

			$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - 1) * 50 + (diff / 60)) + '%, 0, 0)'
			});

			$slider.find('.slide__letter').css({
				'transform': 'translate3d(' +  (diff / 60) + 'vw, 0, 0)',
			});

			$slider.find('.slide__text').css({
				'transform': 'translate3d(' + (diff / 15) + 'px, 0, 0)'
			});
		})
	})

	$(document).on('mouseup touchend', function(e) {
		$(document).off('mousemove touchmove');

		if (animation) return;

		if (diff >= distOfLetGo) {
			navigateRight();
		} else if (diff <= -distOfLetGo) {
			navigateLeft();
		} else {
			toDefault();
		}
	});

	$(document).on('click', '.nav__slide:not(.nav-active)', function() {
		let target = +$(this).attr('data-target');
		bullets(target);
		curSlide = target;
		pagination(1);
	});

	$(document).on('click', '.side-nav', function() {
		let target = $(this).attr('data-target');

		if (target === 'right') navigateRight();
		if (target === 'left') navigateLeft();
	});

	$(document).on('keydown', function(e) {
		if (e.which === 39) navigateRight();
		if (e.which === 37) navigateLeft();
	});

	$(document).on('mousewheel DOMMouseScroll', function(e) {
		if (animation) return;
    let delta = e.originalEvent.wheelDelta;

    if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
	 	if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
  });
});




$(document).ready(function(){
	let slide1Content =
	`
		<div class="center">
			<h1 class="typing-text typingtext" ></h1>
		</div>
		<div class='
			sglogo'>
			<img class='stugov' src='images/sglogo.png'>
		</div>

	`;
	$('.slide--1__text-wrapper').append(slide1Content);

	let quiz =
	`<div class='flex'>
		<div class="ysquiz"></div>
	</div>

	`;
	$('.slide--9').append(quiz);
	var myQuiz = new ysQuiz(myQuestions);


})




// quiz
var myQuestions = [{
    question: "What is the sixth month of the year?",
    answers: ["July", "August", "May", "April"],
    correct: "June"
  }, {
    question: "Fill in the missing number: 24, 31, 38, 45, 52, ?",
    answers: ["54", "23", "65", "44"],
    correct: "59"
  }, {
    question: "Which of the dates below is the latest?",
    answers: ["February 20, 1992", "June 14, 1929", "May 31, 1992", "June 6, 1929"],
    correct: "October 14, 1992"
  }, {
    question: "A clock lost 2 minutes and 20 seconds in 40 days. How many seconds did it lose per day?",
    answers: ["1.5", "2", "2.5", "3"],
    correct: "3.5"
  }, {
    question: "A test has 30 questions. If Tom gets 70% correct, how many questions did Tom get wrong?",
    answers: ["7", "8", "10", "6"],
    correct: "9"
  }];
