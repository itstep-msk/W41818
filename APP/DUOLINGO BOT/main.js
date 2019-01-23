var lesson = document.querySelector('[data-test="skill-tree"]').children[1].firstElementChild;
var practic;
var secondaryButton;

lesson.click();

var practicTimer = setInterval(function() {
	practic = lesson.children[0].lastElementChild.children[0].lastElementChild.firstElementChild;
	
	if(practic) {
		practic.click();
		clearInterval(practicTimer)
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
		if(dataTest == "challenge challenge-listen" || dataTest == "challenge challenge-speak") {

		}

		clearInterval(challengeTimerID);
	}
}, 100)

var answersList = {
	"challenge challenge-form": {
		"a ___": "man",
		"___ I a man?": "Am",
		"I am ___ boy.": "a",
		"I ___ an apple.": "eat",
		"I drink ___.": "water",
		"___ I a woman?": "Am",
		"___ I a boy?": "Am",
		"I ___.": "eat",
		"The boy drinks ___.": "water",
		"The boy eats ___.": "bread",
		"I eat ___.": "bread",
		"He drinks ___.": "water",
		"The man drinks ___.": "water",
		"The girl drinks ___.": "water"
	},
	"challenge challenge-name": {},
	"challenge challenge-translate": {
		"Am I a boy?": "Я мальчик ?",
		"I am a woman.":"Я женщина",
		"an apple":"яблоко",
		"She is a girl":"Она девочка",
		"I drink.":"Я пью",
		"Я являюсь мужчиной":"I am a man",
		"The boy eats an apple":"Мальчик ест яблоко",
		"He is a man":"Он являеются мужчиной",
		"a woman and an apple":"Женщина и яблоко",
		"Она является женщиной":"She ia a woman",
		"Am I a boy?":"Я мальчик?",
		"I eat.":"Я ем",
		"She eats":"Она ест",
		"She drinks":"Она пьет",
		"I eat and drink":"Я ем и пью",
		"The girl eats bread":"Эта девочка ест хлеб",
		"He drinks":"Он пьет",
		"He drinks water":"Он пьет воду",
		"The girl drinks water":"Эта девочка пьет воду",
		"яблоко":"an apple",
		"Она ест":"She eats",
		"I am the boy":"Я тот самый мальчик",
		"Am I a woman?":"я женщина",
		"He eats":"Он ест",
		"Я пью воду":"I drink water",
		"The boy drinks water":"Этот мальчик пьет воду",
		"Мужчина":"a man",
		"He eats bread":"Он ест хлеб",
		"a woman": "женщина",
		"Is he a boy": "Он мальчик",
		"I eat an apple.": "Я ем яблоко",
		"She is a girl and I am a boy.": "Она - девочка, а я - мальчик.",
		"He is a man": "Он является мужчиной.",
		"женщина": "a woman",
		"Он является мужчиной.": "He is a man",
		"a man": "Мужчина",
		"Water": "Вода"
	}
}
// div challenge-select > label > man
// challenge challenge-judge - выбрать предложение
// data-test="challenge challenge-form" - выбирать / challenge-form-prompt
// data-test="challenge challenge-name" - Написать по картинке
// data-test="challenge challenge-translate" - печатать / challenge-translate-prompt / data-test="hint-token"
// data-test="challenge challenge-listen" - слушать button data-test="player-skip"
// data-test="challenge challenge-speak" - говорить button data-test="player-skip"

// data-test="player-next"

// data-test="secondary-button"

/*
"I am a woman":"Я женщина";
"an apple":"яблоко";
"i drink _":"water";
"She is a girl":"Она девочка";
"I drink":"Я пью";
"Я являюсь мужчиной":"I am a man";
"The boy eats an apple":"Мальчик ест яблоко";
"I am _ man":"a";
"He is a man":"Он являеются мужчиной";
"A woman and an apple":"Женщина и яблоко";
"Она ест яблоко":"She eats an apple"; выбор
"Она является женщиной":"She ia a woman";
"Am I a boy?":"Я мальчик?";
"a _":"man";
"I eat _":"bread";
"I eat":"Я ем";
"She eats":"Она ест";
"She drinks":"Она пьет";
"The boy eats _":"bread";
"Этот мальчик ест хлеб":"The boy eats bread"; выбор
"I eat and drink":"Я ем и пью";
"The girl eats bread":"Эта девочка ест хлеб";
"He drinks":"Он пьет";
"He drinks water":"Он пьет воду";
"The girl drinks water":"Эта девочка пьет воду";
"яблоко":"an apple";
"Она ест":"She eats";
"I am the boy":"Я тот самый мальчик";
"The gitl drinks _":"water";
"Am I a woman?":"я женщина";
"He eats":"Он ест";
"Я пью воду":"I drink water";
"The boy drinks water":"Этот мальчик пьет воду";
"Мужчина":"a man";
"He eats bread":"Он ест хлеб";
*/