const heart = document.querySelector('.heart');
const envelopeWrapper = document.querySelector('.envelope-wrapper');

heart.addEventListener('click', () => {
  envelopeWrapper.classList.toggle('flap');
});

// Array of letters
const letters = [
    { title: "HI ANI", message: "I made this for you kasi special ikaw sakin <br> PS: medyo madrama kasi I wavyuuu", img: "cat-meme-cat.gif" },
    { title: "Thank You ", message: " for your patience, understanding, and everything\n I hope you win every battle you don't talk about <br> I'm always PROUD OF YOU", img: "cat.gif" },
    { title: "DONT MAD MAD NA ", message: "Kamukha mo na siya :P, pero seryoso gusto ko nagagwa mo gusto mo, gusto ko wala pumipigil sayo, gusto ko magtagumpay ka sa buhay kahit ano pa man ibato sayo. i'm trying always and always to support you to lighten up ur mood but I dont know sometimes I fucked up. sorry", img: "grumpy-cat-cat-meme.gif" },
    { title: "You will always be my Strong Strong,", message: "LITTLE PINKY PRINCESS", img: "shakey-strong-cat.gif" },
    { title: "I'm happy to have you", message: "samg na?", img: "ani.jpg" },
    { title: "Always remeber", message: "That I'll be always be your ani, that I'll be there for you, I'll support you in anything that you want, please don't mad at me sometimes i feel like wala na akong kakampi, naiisip ko na kapag magkaaway tayo sino nalang pagsasabihan ko. Lately I know na we arent in the best state of our rs. But hopefully we will manage to bring back our jolliness to each other kasi I don't want us na may samahan ng loob at inis sa isat isa ", img: "good.gif" },

    { 
        title: "CLICK THE BUTTON", 
        message: "<3",  
        img: "cat-meme.gif", 
        button: `<button class="special-button">CLICK ME GORGYAS</button>`
    }
];

  // Keep track of the current letter index
  let currentLetterIndex = 0;
  
  // Function to update the letter content
  // Function to update the letter content
  function updateLetterContent(index) {
    const letterText = document.querySelector(".letter .text");
    const letter = letters[index];
  
    // Update the text content
    letterText.innerHTML = `
      <strong>${letter.title}</strong>
      <p>${letter.message}</p>
      ${
        letter.img
          ? `<img src="${letter.img}" class="LetterImage" style="max-width: 100%; height: 130px;">`
          : ""
      }
      ${letter.button ? letter.button : ""}
      <button id="next-button">NEXT</button>
    `;
  
    // Handle NEXT button click
    const nextButton = document.querySelector("#next-button");
    nextButton.addEventListener("click", () => {
      currentLetterIndex = (currentLetterIndex + 1) % letters.length;
      updateLetterContent(currentLetterIndex);
    });

    // Handle special button click (only on the last letter)
    const specialButton = document.querySelector(".special-button");
    if (specialButton) {
        specialButton.addEventListener("click", () => {
            document.body.innerHTML = `
              <div class="night"></div>
              <div class="flowers"><!--  
 
  CSS Blossoming Flowers at Magical Night.
  I've taken some inspiration by Yup Nguyen's Artwork: https://dribbble.com/shots/11096994-Virtual-Garden.
  Made with Pure CSS & ♥
-->

<body class="not-loaded">
  <div class="night"></div>
  <div class="flowers">
    <div class="flower flower--1">
      <div class="flower__leafs flower__leafs--1">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>

        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>

      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
        <div class="flower__line__leaf flower__line__leaf--5"></div>
        <div class="flower__line__leaf flower__line__leaf--6"></div>
      </div>
    </div>

    <div class="flower flower--2">
      <div class="flower__leafs flower__leafs--2">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>

        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>

      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>

    <div class="flower flower--3">
      <div class="flower__leafs flower__leafs--3">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>

        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>

      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:1.2s">
      <div class="flower__g-long">
        <div class="flower__g-long__top"></div>
        <div class="flower__g-long__bottom"></div>
      </div>
    </div>

    <div class="growing-grass">
      <div class="flower__grass flower__grass--1">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
        <div class="flower__grass__overlay"></div>
      </div>
    </div>

    <div class="growing-grass">
      <div class="flower__grass flower__grass--2">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
        <div class="flower__grass__overlay"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.4s">
      <div class="flower__g-right flower__g-right--1">
        <div class="leaf"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-right flower__g-right--2">
        <div class="leaf"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-front">
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__line"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:3.2s">
      <div class="flower__g-fr">
        <div class="leaf"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
      </div>
    </div>

    <div class="long-g long-g--0">
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:2.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3.4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--1">
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:3.8s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--2">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4.4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--3">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--4">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--5">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--6">
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.4s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4.6s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.8s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--7">
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:3.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3.5s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>
  </div>
</body></div>
            `;
        });
    }
}

  

  // Attach the initial event listener to the existing button
  const initialNextButton = document.querySelector(".letter button");
  initialNextButton.addEventListener("click", () => {
    currentLetterIndex = (currentLetterIndex + 1) % letters.length;
    updateLetterContent(currentLetterIndex);
  });
  
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  