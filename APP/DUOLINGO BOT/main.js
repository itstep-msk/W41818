var lesson = document.querySelector('[data-test="skill-tree"]').children[1].firstElementChild;
var practic;
var secondaryButton;

lesson.click();

var practicTimer = setInterval(function() {
	practic = lesson.children[0].lastElementChild.children[0].lastElementChild.firstElementChild;
	
	if(practic) {
		practic.click();
		//clearInterval(practicTimer)
	}
}, 100);

var secondaryButtonID = setInterval(function() {
	secondaryButton = document.querySelector('[data-test="secondary-button"]');
		
	if(secondaryButton) {
		console.log("TRUE")
		secondaryButton.click();
		clearInterval(secondaryButtonID);
	}
}, 100);

var challengeTimerID = setInterval(function challenger() {


///////////////////////////////////////////////////////////////////////////////////////////
lesson = document.querySelector('[data-test="skill-tree"]');

var practicTimer = setInterval(function() {
	if(lesson) {
		lesson = lesson.children[1].firstElementChild;
		practic = lesson.children[0].lastElementChild.children[0].lastElementChild.firstElementChild;
	}
	
	if(practic) {
		practic.click();
		//clearInterval(practicTimer)
	}
}, 100);

var secondaryButtonID = setInterval(function() {
	secondaryButton = document.querySelector('[data-test="secondary-button"]');
		
	if(secondaryButton) {
		console.log("TRUE")
		secondaryButton.click();
		clearInterval(secondaryButtonID);
		challenger();
	}
}, 100);

///////////////////////////////////////////////////////////////////////////

	var challenge = document.querySelector('[data-test^="challenge"]');

	if(challenge) {
		var dataTest = challenge.getAttribute("data-test");
		var playerNext;
		var question;
		var questionText;
		var answers;

		if(dataTest == "challenge challenge-form") {
			question = document.querySelector('[data-test="challenge-form-prompt"]');
			questionText = question.getAttribute("data-prompt");
			answers = document.querySelectorAll('[data-test="challenge-select"]');

			for(var i = 0; i < answers.length; i++) {
				var thisAnswer = answers[i].children[0].innerText.replace(/\d/gi,"");

				if(thisAnswer == answersList[dataTest][questionText]) {
					answers[i].children[0].click();
					playerNext = document.querySelector('[data-test="player-next"]');
					playerNext.click();
					
					setTimeout(function() {
						playerNext = document.querySelector('[data-test="player-next"]');
						playerNext.click();
						// ЗАПУСКАЕМ ФУНКЦИЮ ЗАНОВО
						challenger();
					}, 1000)
				}
			}
		}
		if(dataTest == "challenge challenge-translate") {
			var hintToken = document.querySelectorAll('[data-test="hint-token"]');
			var input = document.querySelector('[data-test="challenge-translate-input"]');
			question = "";
			
			for(var i = 0; i < hintToken.length; i++) {
				question += hintToken[i].innerText;
			}
			
			question = question.replace(/\n/gi, "")
			input.focus();
			input.value = answersList[dataTest][question];
			input.blur();

			playerNext = document.querySelector('[data-test="player-next"]');
			playerNext.click();

			setTimeout(function() {
				playerNext = document.querySelector('[data-test="player-next"]');
				playerNext.click();
				// ЗАПУСКАЕМ ФУНКЦИЮ ЗАНОВО
				challenger();
			}, 1000)
		}
		if(dataTest == "challenge challenge-judge") {
			question = document.querySelector('[data-test="challenge-header"]').nextElementSibling.children[0];
			questionText = question.innerHTML;
			answers = document.querySelectorAll('[data-test="challenge-judge-item"]');

			for(var i = 0; i < answers.length; i++) {
				var thisAnswer = answers[i].children[0].innerText.replace(/\d/gi,"");

				if(thisAnswer == answersList[dataTest][questionText]) {
					answers[i].children[0].click();
					playerNext = document.querySelector('[data-test="player-next"]');
					playerNext.click();
					
					setTimeout(function() {
						playerNext = document.querySelector('[data-test="player-next"]');
						playerNext.click();
						// ЗАПУСКАЕМ ФУНКЦИЮ ЗАНОВО
						challenger();
					}, 1000)
				}
			}
		}
		if(dataTest == "challenge challenge-listen" 
			|| dataTest == "challenge challenge-speak"
			|| dataTest == "challenge challenge-listenTap") {
			var playerSkip = document.querySelector('[data-test="player-skip"]');
			playerSkip.click();

			setTimeout(function() {
				playerNext = document.querySelector('[data-test="player-next"]');
				playerNext.click();
				// ЗАПУСКАЕМ ФУНКЦИЮ ЗАНОВО
				challenger();
			}, 1000)
		}

		clearInterval(challengeTimerID);
	}
}, 100)

var answersList = {
	"challenge challenge-form": {
		"I am ___ boy.": "a",
		"I am ___ girl.": "a",
		"I am ___ woman.": "a",
		"She ___ a woman.": "is",
		"She ___ a girl.": "is",
		"He ___ a boy.": "is",
		"He ___ a man.": "is",
		"___ I a man?": "Am",
		"___ I a woman?": "Am",
		"___ I a boy?": "Am",
		"___ I a girl?": "Am",
		"I ___ a woman.":"am",
		"I ___.": "eat",
		"I ___ an apple.": "eat",
		"She ___.": "eats",
		"The boy eats ___.": "bread",
		"I eat ___.": "bread",
		"I drink ___.": "water",
		"He drinks ___.": "water",
		"She drinks ___.": "water",
		"The boy drinks ___.": "water",
		"The man drinks ___.": "water",
		"The girl drinks ___.": "water",
		"I ___ water.": "drink",
		"She ___ water.": "drinks",
		"a ___": "man",
		"Am I a ___?": "woman"
	},
	"challenge challenge-name": {},
	"challenge challenge-judge": {
		"Она ест.": "She eats.",
		"Она ест хлеб.": "She eats bread.",
		"Он ест.": "He eats.",
		"Он пьёт.": "He drinks.",
		"Эта девочка пьёт воду.": "The girl drinks water.",
		"Эта девочка ест.": "The girl eats.",
		"Эта девочка ест яблоко.": "The girl eats an apple.",
		"Этот мальчик пьёт воду.": "The boy drinks water.",
		"Я ем яблоко.": "I eat an apple.",
		"Я ем хлеб.": "I eat bread.",
		"Я - мальчик.": "I am a boy.",
		"женщина и яблоко": "a woman and an apple",
		"Она ест яблоко.": "She eats an apple.",
		"Я ем и пью.": "I eat and drink.",
		"Я пью и ем.": "I drink and eat.",
		"мальчик": "a boy",
		"девочка": "a girl",
		"мужчина": "a man",
		"женщина": "a woman",
		"яблоко": "an apple",
		"Этот мальчик ест хлеб.": "The boy eats bread.",
		"Этот мальчик ест яблоко.": "The boy eats an apple.",
		"Он является мужчиной.": "He is a man.",
		"Am I a ___?": "woman",
		"Я пью воду.": "I drink water.",
		"Он пьёт воду.": "He drinks water.",
		"Он ест яблоко.": "He is eating an apple.",
		"Он ест хлеб.": "He eats bread.",
		"Я пью.": "I drink.",
		"Я ем.": "I eat.",
		"Она пьёт.": "She drinks.",
		"Она пьёт воду.": "She drinks water.",
		"Эта женщина ест.": "The woman eats.",
		"Эта женщина пьёт воду.": "The woman drinks water.",
		"Эта женщина ест яблоко.": "The woman eats an apple.",
		"Этот мужчина пьёт.": "The man drinks.",
		"Этот мужчина ест.": "The man eats.",
		"Этот мужчина пьёт воду.": "The man drinks water.",
		"Этот мужчина ест яблоко.": "The man eats an apple.",
		"Эта девочка ест хлеб.": "The girl eats bread.",
		"Она является женщиной.": "She is a woman.",
		"Я являюсь женщиной.": "I am a woman.",
		"Я являюсь мужчиной, а она является женщиной.": "I am a man and she is a woman.",
		"Я являюсь мужчиной.": "I am a man."
	},
	"challenge challenge-translate": {
		"an apple":"яблоко",
		"She is a girl.":"Она девочка",
		"I drink.":"Я пью",
		"The boy eats.": "Этот мальчик ест",
		"The boy eats an apple.":"Мальчик ест яблоко",
		"The boy eats bread.": "Это мальчик ест хлеб",
		"He is a man.":"Он является мужчиной",
		"a woman and an apple":"Женщина и яблоко",
		"a boy": "Мальчик",
		"a girl": "Девочка",
		"I am a man.": "Я являюсь мужчиной",
		"I eat.":"Я ем",
		"He eats.":"Он ест",
		"She eats.":"Она ест",
		"I eat and drink.":"Я ем и пью",
		"He eats bread.": "Он ест хлеб",
		"The girl eats.":"Эта девочка ест",
		"The girl eats an apple.": "Эта девочка ест яблоко",
		"The man eats an apple.": "Этот мужчина ест яблоко",
		"He drinks.":"Он пьет",
		"He drinks water.":"Он пьет воду",
		"The girl drinks water.":"Эта девочка пьет воду",
		"I am the boy.":"Я тот самый мальчик",
		"Am I a woman?":"Я женщина ?",
		"Am I a boy?": "Я мальчик ?",
		"Am I a girl?": "Я девочка ?",
		"Am I a man?": "Я мужчина ?",
		"The boy drinks water.":"Этот мальчик пьет воду",
		"He eats bread.":"Он ест хлеб",
		"a woman": "женщина",
		"Is he a boy?": "Он мальчик",
		"Is he a man?": "Он мужчина",
		"I eat an apple.": "Я ем яблоко",
		"I am a man and she is a woman.": "Я являюсь мужчиной, а она является женщиной",
		"She is a girl and I am a boy.": "Она - девочка, а я - мальчик.",
		"She is a woman and I am a girl.": "Она - женщина, а я - девочка",
		"He is a man and I am a boy.": "Он - мужчина, а я мальчик",
		"He is a man": "Он является мужчиной.",
		"a man": "Мужчина",
		"The woman eats.": "Женщина ест",
		"She eats an apple.": "Она ест яблоко",
		"She eats bread.": "Она ест хлеб",
		"Water": "Вода",
		"The man eats.": "Этот мужчина ест",
		"The woman drinks water.": "Эта женщина пьет воду",
		"The woman drinks.": "Эта женщина пьет",
		"The man eats am the boy.": "Я мальчик",
		"I am a woman.": "Я являюсь женщиной",
		"The woman eats an apple.": "Эта женщина ест яблоко",
		"I drink and eat.": "Я пью и ем",
		"He drinks.": "Он пьет",
		"The girl eats bread.": "Эта девочка ест хлеб.",
		"The man drinks.": "Этот мужчина пьет",
		"The man drinks water.": "Этот мужчина пьет воду",
		"I drink water.": "Я пью воду",
		"She drinks.": "Она пьет",
		"She drinks water.": "Она пьет воду",
		"I eat bread.": "Я ем хлеб",
		"I am a boy.": "Я мальчик",
		"I am a girl.": "Я девочка",
		"He is a boy.": "Он мальчик",
		"She is a woman.": "Она является женщинойн",
		"Is she a girl?": "Она девочка",
		"Is she a woman?": "Она женщина",
		"He eats an apple.": "Он ест яблоко",
		"Я пью.": "I drink",
		"Мужчина":"a man",
		"Я пью воду":"I drink water",
		"Она ест.":"She eats",
		"яблоко":"an apple",
		"Он является мужчиной.": "He is a man",
		"Она является женщиной.":"She is a woman",
		"Она пьёт.": "She drinks",
		"Он ест.": "He eats",
		"Он пьёт.": "He drinks",
		"Я являюсь мужчиной.":"I am a man",
		"Я являюсь женщиной.": "I am a woman",
		"женщина": "a woman",
		"мужчина": "a man",
		"мальчик": "a boy",
		"девочка":"a girl",
		"вода": "water",
		"Я ем.": "I eat",
		"Я являюсь мужчиной, а она является женщиной.": "I am a man and she is a woman."
	}
}
// div challenge-select > label > man
// challenge challenge-judge - выбрать предложение
// data-test="challenge challenge-form" - выбирать / challenge-form-prompt
// data-test="challenge challenge-name" - Написать по картинке
// data-test="challenge challenge-translate" - печатать / challenge-translate-prompt / data-test="hint-token"
// data-test="challenge challenge-listen" - слушать button data-test="player-skip"
// data-test="challenge challenge-speak" - говорить button data-test="player-skip"
// challenge challenge-listenTap

// data-test="player-next"

// data-test="secondary-button"