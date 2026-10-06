```javascript
/* =========================
   SPOOKY VOICE
========================= */

function spookyVoice(text) {
  const voice = new SpeechSynthesisUtterance(text);

  voice.rate = 0.75;
  voice.pitch = 1.5;
  voice.volume = 0.8;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(voice);
}


/* =========================
   OPEN THE DOOR
========================= */

const doorButton = document.getElementById("doorButton");
const secret = document.getElementById("secret");

doorButton.addEventListener("click", function () {

  secret.textContent = "THE DOOR WAS ALREADY OPEN.";
  doorButton.textContent = "ENTER";

  setTimeout(function () {
    secret.textContent = "THEN WHY DID YOU OPEN IT?";
  }, 2000);

  setTimeout(function () {

    document.body.innerHTML = `
      <main class="container">

        <p class="warning">⚠ ACCESS GRANTED</p>

        <h1>WELCOME INSIDE.</h1>

        <p class="message">
          YOUR FIRST CHALLENGE AWAITS.
        </p>

        <button id="challengeButton">BEGIN</button>

      </main>
    `;

    document
      .getElementById("challengeButton")
      .addEventListener("click", challenge01);

  }, 4000);

});


/* =========================
   CHALLENGE 01
========================= */

function challenge01() {

  document.body.innerHTML = `
    <main class="container">

      <p class="warning">⚠ CHALLENGE 01</p>

      <h1>THE FIRST KEY</h1>

      <p class="message">
        I HAVE NO MOUTH, BUT I CAN SPEAK.
        <br><br>
        I HAVE NO BODY, BUT I CAN BE SEEN.
        <br><br>
        WHAT AM I?
      </p>

      <input id="answer" type="text" placeholder="ENTER ANSWER">

      <button id="submitButton">SUBMIT</button>

      <p id="result"></p>

    </main>
  `;

  document.getElementById("submitButton").addEventListener("click", function () {

    const answer = document
      .getElementById("answer")
      .value
      .toLowerCase()
      .trim();

    const result = document.getElementById("result");

    if (answer === "writing") {

      result.textContent = "CORRECT.";
      spookyVoice("Hmm... I'm impressed.");

      setTimeout(challenge02, 1500);

    } else {

      result.textContent = "INCORRECT. TRY AGAIN.";
      spookyVoice("Hahahaha...");

    }

  });

}


/* =========================
   CHALLENGE 02
========================= */

function challenge02() {

  document.body.innerHTML = `
    <main class="container">

      <p class="warning">⚠ CHALLENGE 02</p>

      <h1>THE CODE</h1>

      <p class="message">
        2 - 15 - 15 - 11
        <br><br>
        EACH NUMBER IS A LETTER.
      </p>

      <input id="answer2" type="text" placeholder="ENTER WORD">

      <button id="submitButton2">SUBMIT</button>

      <p id="result2"></p>

    </main>
  `;

  document.getElementById("submitButton2").addEventListener("click", function () {

    const answer = document
      .getElementById("answer2")
      .value
      .toLowerCase()
      .trim();

    const result = document.getElementById("result2");

    if (answer === "book") {

      result.textContent = "CORRECT.";
      spookyVoice("Hmm... I'm impressed.");

      setTimeout(challenge03, 1500);

    } else {

      result.textContent = "INCORRECT. TRY AGAIN.";
      spookyVoice("Hahahaha...");

    }

  });

}


/* =========================
   CHALLENGE 03
========================= */

function challenge03() {

  document.body.innerHTML = `
    <main class="container">

      <p class="warning">⚠ CHALLENGE 03</p>

      <h1>SOMETHING IS WRONG.</h1>

      <p class="message">
        ONE WORD DOES NOT BELONG.
        <br><br>
        DOOR &nbsp;&nbsp;
        SHADOW &nbsp;&nbsp;
        WINDOW &nbsp;&nbsp;
        BANANA
      </p>

      <input id="answer3" type="text" placeholder="ENTER WORD">

      <button id="submitButton3">SUBMIT</button>

      <p id="result3"></p>

    </main>
  `;

  document.getElementById("submitButton3").addEventListener("click", function () {

    const answer = document
      .getElementById("answer3")
      .value
      .toLowerCase()
      .trim();

    const result = document.getElementById("result3");

    if (answer === "banana") {

      result.textContent = "CORRECT.";
      spookyVoice("Hmm... I'm impressed.");

      setTimeout(challenge04, 1500);

    } else {

      result.textContent = "INCORRECT. TRY AGAIN.";
      spookyVoice("Hahahaha...");

    }

  });

}


/* =========================
   CHALLENGE 04
========================= */

function challenge04() {

  document.body.innerHTML = `
    <main class="container">

      <p class="warning">⚠ CHALLENGE 04</p>

      <h1>THERE IS NO PUZZLE.</h1>

      <p class="message">
        YOU ALREADY HAVE THE ANSWER.
      </p>

      <button id="confusedButton">
        I DON'T UNDERSTAND
      </button>

    </main>
  `;

  document.getElementById("confusedButton").addEventListener("click", function () {

    document.body.innerHTML = `
      <main class="container">

        <p class="warning">⚠ CHALLENGE 04</p>

        <h1>GOOD.</h1>

        <p class="message">
          FIND THE THING THAT DOESN'T BELONG.
          <br><br>
          DOOR &nbsp;&nbsp;
          SHADOW &nbsp;&nbsp;
          WINDOW &nbsp;&nbsp;
          SILENCE
        </p>

        <input id="answer4" type="text" placeholder="ENTER WORD">

        <button id="submitButton4">SUBMIT</button>

        <p id="result4"></p>

      </main>
    `;

    document.getElementById("submitButton4").addEventListener("click", function () {

      const answer = document
        .getElementById("answer4")
        .value
        .toLowerCase()
        .trim();

      const result = document.getElementById("result4");

      if (answer === "silence") {

        result.textContent = "CORRECT.";
        spookyVoice("Hmm... I'm impressed.");

        setTimeout(challenge05, 1500);

      } else {

        result.textContent = "INCORRECT. TRY AGAIN.";
        spookyVoice("Hahahaha...");

      }

    });

  });

}


/* =========================
   CHALLENGE 05
========================= */

function challenge05() {

  document.body.innerHTML = `
    <main class="container">

      <p class="warning">⚠ CHALLENGE 05</p>

      <h1>CHOOSE YOUR PATH.</h1>

      <p class="message">
        CHOOSE ONE CELEBRITY.
        <br><br>
        TWO QUESTIONS.
      </p>

      <button id="oliviaButton">OLIVIA RODRIGO</button>

      <br><br>

      <button id="billieButton">BILLIE EILISH</button>

      <br><br>

      <button id="weekndButton">THE WEEKND</button>

    </main>
  `;

  document.getElementById("oliviaButton").addEventListener("click", function () {
    celebrityTrivia("olivia");
  });

  document.getElementById("billieButton").addEventListener("click", function () {
    celebrityTrivia("billie");
  });

  document.getElementById("weekndButton").addEventListener("click", function () {
    celebrityTrivia("weeknd");
  });

}


function celebrityTrivia(celebrity) {

  let name;
  let questions;

  if (celebrity === "olivia") {

    name = "OLIVIA RODRIGO";

    questions = [
      {
        question: "WHAT IS OLIVIA RODRIGO'S DEBUT ALBUM?",
        answer: "sour"
      },
      {
        question: "WHAT IS THE NAME OF OLIVIA'S BREAKOUT HIT?",
        answer: "drivers license"
      }
    ];

  }

  if (celebrity === "billie") {

    name = "BILLIE EILISH";

    questions = [
      {
        question: "WHAT IS BILLIE EILISH'S DEBUT STUDIO ALBUM?",
        answer: "when we all fall asleep where do we go"
      },
      {
        question: "WHICH BILLIE EILISH SONG IS CALLED 'BAD GUY'?",
        answer: "bad guy"
      }
    ];

  }

  if (celebrity === "weeknd") {

    name = "THE WEEKND";

    questions = [
      {
        question: "WHAT IS THE WEEKND'S FIRST NAME?",
        answer: "abel"
      },
      {
        question: "WHICH ALBUM FEATURES 'BLINDING LIGHTS'?",
        answer: "after hours"
      }
    ];

  }

  showCelebrityQuestion(name, questions, 0);

}


/* =========================
   CELEBRITY QUESTIONS
========================= */

function showCelebrityQuestion(name, questions, questionNumber) {

  if (questionNumber >= questions.length) {

    document.body.innerHTML = `
      <main class="container">

        <p class="warning">⚠ CHALLENGE 05 COMPLETE</p>

        <h1>YOU KNOW THEM.</h1>

        <p class="message">
          BOTH ANSWERS WERE CORRECT.
          <br><br>
          THE NEXT DOOR IS WAITING.
        </p>

      </main>
    `;

    setTimeout(challenge06, 2500);

    return;
  }

  const question = questions[questionNumber];

  document.body.innerHTML = `
    <main class="container">

      <p class="warning">
        ⚠ QUESTION ${questionNumber + 1}/2
      </p>

      <h1>${name}</h1>

      <p class="message">
        ${question.question}
      </p>

      <input
        id="celebrityAnswer"
        type="text"
        placeholder="ENTER ANSWER"
      >

      <button id="celebritySubmit">
        SUBMIT
      </button>

      <p id="triviaResult"></p>

    </main>
  `;

  const input = document.getElementById("celebrityAnswer");
  const button = document.getElementById("celebritySubmit");
  const result = document.getElementById("triviaResult");

  function checkAnswer() {

    const answer = input.value
      .toLowerCase()
      .trim()
      .replace(/[.,!?'"’]/g, "")
      .replace(/\s+/g, " ");

    const correctAnswer = question.answer
      .toLowerCase()
      .trim()
      .replace(/[.,!?'"’]/g, "")
      .replace(/\s+/g, " ");

    if (answer === correctAnswer) {

      result.textContent = "CORRECT.";
      spookyVoice("Hmm... I'm impressed.");

      setTimeout(function () {

        showCelebrityQuestion(
          name,
          questions,
          questionNumber + 1
        );

      }, 1200);

    } else {

      result.textContent = "INCORRECT. TRY AGAIN.";
      spookyVoice("Hahahaha...");

    }

  }

  button.addEventListener("click", checkAnswer);

  input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
      checkAnswer();
    }

  });

}


/* =========================
   CHALLENGE 06
========================= */

function challenge06() {

  document.body.innerHTML = `
    <main class="container">

      <p class="warning">⚠ CHALLENGE 06</p>

      <h1>YOU FOUND IT.</h1>

      <p class="message">
        BUT THIS ISN'T THE DOOR YOU REMEMBER.
        <br><br>
        SOMETHING HAS CHANGED.
      </p>

      <button id="doorAgain">
        OPEN IT AGAIN
      </button>

    </main>
  `;

  document.getElementById("doorAgain").addEventListener("click", function () {

    document.body.innerHTML = `
      <main class="container">

        <p class="warning">⚠ CHALLENGE 06</p>

        <h1>WELCOME BACK.</h1>

        <p class="message">
          YOU'VE BEEN HERE BEFORE.
          <br><br>
          YOU JUST DON'T REMEMBER.
          <br><br>
          BUT THE DOOR DOES.
        </p>

        <button id="finalButton">
          WHAT HAPPENS NOW?
        </button>

      </main>
    `;

    document.getElementById("finalButton").addEventListener("click", function () {

      document.body.innerHTML = `
        <main class="container">

          <p class="warning">⚠ CONNECTION LOST</p>

          <h1 id="endTitle">THE END?</h1>

          <p class="message">
            YOU OPENED THE DOOR.
            <br><br>
            YOU FOUND THE KEYS.
            <br><br>
            BUT YOU NEVER ASKED
            <br>
            WHO BUILT IT.
          </p>

          <p class="message" id="hiddenMessage">
            <br>
            <span style="color:#555;">
              THE DOOR IS STILL OPEN.
            </span>
          </p>

        </main>
      `;

      let clicks = 0;

      document.getElementById("endTitle").addEventListener("click", function () {

        clicks++;

        if (clicks === 3) {

          document.getElementById("hiddenMessage").innerHTML = `
            <br>
            <span style="color:#555;">
              THE DOOR IS STILL OPEN.
            </span>

            <br><br>

            <span style="color:#333;">
              YOU SHOULD NOT HAVE COME BACK.
            </span>

            <br><br>

            <span style="color:#222;">
              LOOK BEHIND YOU.
            </span>
          `;

        }

      });

    });

  });

}
```
