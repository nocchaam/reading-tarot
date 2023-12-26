// card 1: 

const cardLibrary = {
  1: {
    first: 'Card 1: How you feel about yourself',
    name: 'The Emperor',
    meaning1: 'You feel that success and achievement are on their way to you. A man of significance will provide his support, perhaps your father, husband/partner or boss - whoever it is, he will give you steady support. You feel confident and able to influence people and events, as you have a great sense of your own authority. Expect promotion at work or achieving greater status in life.',
    meaning2: 'If you have been a victim of ill will, be assured that you will win in the end.',
    image: 'images/g1.jpg'
  },
  2: 
  {
    first: 'Card 1: How you feel about yourself',
    name: 'Death',
    meaning1: 'Perhaps you feel that everything as you have known it is falling apart. Unexpected changes and turmoil, end of a job, end of a career, divorce or end of a relationship, recovering from a bereavement or fear of bereavement.',
    meaning2: 'Try not to worry too much: this time of absolute endings heralds a brand new beginning, a period of great transformation.',
    image: 'images/g2.jpg'
  },
  3: 
  {
    first: 'Card 1: How you feel about yourself',
    name: 'Justice',
    meaning1: 'You are feeling that things will go your way. You believe in fairness and justice in all things.',
    meaning2: 'If you are considering partnership issues, personal or professional, dealings will go well. Perhaps you are about to sign a contract or legal document - this will be beneficial to you. If someone has done wrong to you it will be put right and you will feel justice has been done.',
    image: 'images/g3.jpg'
  },
  4:
  {
    first: 'Card 1: How you feel about yourself',
    name: 'The World',
    meaning1: "You are about to reach, or are already enjoying, a period of total fulfillment, wholeness and satisfaction - the arrival of your heart's desires.",
    meaning2: "You feel satisfied with what you have achieved and are enjoying the rewards for past efforts. A time of happy outcomes, material wealth and greater spiritual awareness.",
    image: 'images/g4.jpg'
  },
  5: 
  {
    first: 'Card 1: How you feel about yourself',
    name: 'The Tower',
    meaning1: 'You feel that the disruption and sweeping change you are going through, or fear you are about to go through, will be catastrophic. You need to recognise that such upheaval can force new directions that you never dreamed possible.',
    meaning2: "Subconsciously you may have wanted change, but as is often the case, the solution isn't always as we expect. There could be problems relating to your property, or if considering a new property or move, progress will be thwarted.",
    image: 'images/g5.jpg'
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const numberOfCards = Object.keys(cardLibrary).length;
        const randomCard = Math.floor(Math.random() * numberOfCards) + 1;
        const cardText0 = getCardText0(randomCard);
        const cardText1 = getCardText1(randomCard);
        const cardText2 = getCardText2(randomCard);
        const cardText3 = getCardText3(randomCard);
        const cardImage = getCardImage(randomCard);
        card.innerHTML = `
          <img src="${cardImage}" alt="Card ${randomCard}">
          <div style= "font-family: Roboto; line-height: 39px;">
            <p style="font-size: 23px; font-weight: bold; color: purple; margin-left: 50px; margin-bottom: -3px;">${cardText0}</p>
            <p style="font-size: 20px; font-weight: bold; margin-left: 50px; margin-bottom: -3px;">${cardText1}</p>
            <p style="font-size: 18px; margin-left: 50px; margin-bottom: -5px;">${cardText2}</p>
            <p style="font-size: 18px; margin-left: 50px;">${cardText3}</p>
          </div>
        `;
      });
    });
  });
  function getCardText0(cardNumber) {
    return cardLibrary[cardNumber].first;
  }
  function getCardText1(cardNumber) {
    return cardLibrary[cardNumber].name;
  }
  function getCardText2(cardNumber) {
    return cardLibrary[cardNumber].meaning1;
  }
  function getCardText3(cardNumber) {
    return cardLibrary[cardNumber].meaning2;
  }
  
  function getCardImage(cardNumber) {
    return cardLibrary[cardNumber].image;
  }


  
// card 2:
const card1Library = {
  1: {
    first: 'Card 2:  What you want most right now',
    name: 'Wheel of Fortune',
    meaning1: "The Wheel suggests that you're looking for a turning point in your life and positive change, and if that's the case expect it now!",
    meaning2:"Life will go up a gear or two and events will accelerate you forward. Destiny is at play here - have you noticed a number of events that seem rather 'coincidental'? This is synchronicity, trust it and go with the flow.",
    image: 'images/c1.jpg'
  },
  2: 
  {
    first: 'Card 2:  What you want most right now',
    name: 'The Hierophant',
    meaning1: "Right now you want to have someone around you that you can trust and confide in, knowing that they won't let you down.",
    meaning2: 'There are moral issues here, knowing right from wrong, and you may feel that you need some advice or wise counsel from a teacher, priest, parent or someone you have a lot of respect for, in order to help you make the right decision.',
    image: 'images/c2.jpg'
  },
  3: 
  {
    first: 'Card 2:  What you want most right now',
    name: 'The Devil',
    meaning1: "The cards suggest that what you most want at this time you can't have, and like the forbidden fruit this only makes it all the more tempting. Alternatively you know you could go for something, but it would be a bad choice and you'd be doing it for all the wrong reasons.",
    meaning2: 'Yes, you want passion and gratification - just be careful where you go looking for it.',
    image: 'images/c3.jpg'
  },
  4:
  {
    first: 'Card 2:  What you want most right now ',
    name: 'The High Priestess',
    meaning1: "The cards suggest that what you most want at this time is for a secret to be revealed - a secret held deep within yourself or another.",
    meaning2: "Go within and listen to the still small voice of your heart and instincts. The appearance of The High Priestess tells you that the power of the divine feminine is with you - trust it.",
    image: 'images/c4.jpg'
  },
  5: 
  {
    first: 'Card 2:  What you want most right now',
    name: 'Temperance',
    meaning1: 'The appearance of Temperance suggests you are craving some peace and harmony, a sense of control and wish to feel that life is flowing again. Perhaps you have been, or are currently going through some tough times regarding a relationship, financial worries or some other kind of loss.',
    meaning2: "Take heart that peace will be restored - this is a time for you to be calm and patient and life will soon have a sense of normality again.",
    image: 'images/c5.jpg'
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card1');
    cards.forEach(card1 => {
      card1.addEventListener('click', () => {
        const numberOfCards = Object.keys(card1Library).length;
        const randomCard = Math.floor(Math.random() * numberOfCards) + 1;
        const cardText0 = getCard1Text0(randomCard);
        const cardText1 = getCard1Text1(randomCard);
        const cardText2 = getCard1Text2(randomCard);
        const cardText3 = getCard1Text3(randomCard);
        const cardImage = getCard1Image(randomCard);
        card1.innerHTML = `
          <img src="${cardImage}" alt="Card ${randomCard}">
          <div style= "font-family: Roboto; line-height: 39px;">
            <p style="font-size: 23px; font-weight: bold; color: purple; margin-left: 50px; margin-bottom: -3px;">${cardText0}</p>
            <p style="font-size: 20px; font-weight: bold; margin-left: 50px; margin-bottom: -3px;">${cardText1}</p>
            <p style="font-size: 18px; margin-left: 50px; margin-bottom: -5px;">${cardText2}</p>
            <p style="font-size: 18px; margin-left: 50px;">${cardText3}</p>
          </div>
        `;
      });
    });
  });
  function getCard1Text0(cardNumber) {
    return card1Library[cardNumber].first;
  }
  function getCard1Text1(cardNumber) {
    return card1Library[cardNumber].name;
  }
  function getCard1Text2(cardNumber) {
    return card1Library[cardNumber].meaning1;
  }
  function getCard1Text3(cardNumber) {
    return card1Library[cardNumber].meaning2;
  }
  
  function getCard1Image(cardNumber) {
    return card1Library[cardNumber].image;
  }


// card 3: 


const card2Library = {
  1: {
    first: 'Card 3:   Your fears',
    name: 'The Chariot',
    meaning1: "The word failure isn't in your vocabulary. You are worried things are more of a struggle than you expected, with more delays and frustrations.",
    meaning2:"Things aren't going according to plan at all - just chill out, calm that mind of yours and you'll find the strength to battle on until you succeed. This is a period of movement and change and conflicts ending in victory.",
    image: 'images/b1.jpg'
  },
  2: 
  {
    first: 'Card 3:   Your fears',
    name: 'The Hermit',
    meaning1: "You are worried about being on your own and afraid of loneliness, and you simply don't know what to do. Take the time to relax and eventually you will have the answers.",
    meaning2: 'The Hermit signals a warning not to make hasty decisions, so try not to get too stressed, and if you have been unwell this is a time for rest and recuperation.',
    image: 'images/b2.jpg'
  },
  3: 
  {
    first: 'Card 3:   Your fears',
    name: 'The Sun',
    meaning1: "You are afraid that things seem too good to be true, so much pleasure and joy - well enjoy it, sometimes we can be pleasantly surprised! If you have been unwell this is a time of rejuvenation and good health. Perhaps you are afraid that things won't actually get better - have faith you are about to enter a happy and pleasurable time.",
    meaning2: 'The Sun heralds an ending to difficulties and a time to celebrate with friends and loved ones, a time of pleasure and good news around children or the conception or birth of a longed-for baby.',
    image: 'images/b3.jpg'
  },
  4:
  {
    first: 'Card 3: Your fears',
    name: 'Judgement',
    meaning1: "You are afraid that the conclusions you've been wanting are delayed and fear any far-reaching changes ahead. Perhaps things aren't turning out quite as you expected for some reason - this is a period when your routine will be changed dramatically.",
    meaning2: "Fear not, although events will seem to be moving at a real pace, any choice you make will change life for the better.",
    image: 'images/b4.jpg'
  },
  5: 
  {
    first: 'Card 3:   Your fears',
    name: 'The Moon',
    meaning1: 'Lies and insecurity are likely to be prominent in your life at the moment - you are afraid of being deceived and feel that you are being misled. Trust your instincts and let them guide you away from those who may seem charming but are only out for their own gains.',
    meaning2: "Your turbulent emotions are muddying the waters - step back and try to find clarity of mind, although this may seem difficult. The Moon does help to illuminate the way and don't worry, it will turn out alright in the end.",
    image: 'images/b5.jpg'
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card2');
    cards.forEach(card2 => {
      card2.addEventListener('click', () => {
        const numberOfCards = Object.keys(card1Library).length;
        const randomCard = Math.floor(Math.random() * numberOfCards) + 1;
        const cardText0 = getCard2Text0(randomCard);
        const cardText1 = getCard2Text1(randomCard);
        const cardText2 = getCard2Text2(randomCard);
        const cardText3 = getCard2Text3(randomCard);
        const cardImage = getCard2Image(randomCard);
        card2.innerHTML = `
          <img src="${cardImage}" alt="Card ${randomCard}">
          <div style= "font-family: Roboto; line-height: 39px;">
            <p style="font-size: 22px; font-weight: bold; color: purple; margin-left: 50px; margin-bottom: -3px;">${cardText0}</p>
            <p style="font-size: 20px; font-weight: bold; margin-left: 50px; margin-bottom: -3px;">${cardText1}</p>
            <p style="font-size: 18px; margin-left: 50px; margin-bottom: -5px;">${cardText2}</p>
            <p style="font-size: 18px; margin-left: 50px;">${cardText3}</p>
          </div>
        `;
      });
    });
  });
  function getCard2Text0(cardNumber) {
    return card2Library[cardNumber].first;
  }
  function getCard2Text1(cardNumber) {
    return card2Library[cardNumber].name;
  }
  function getCard2Text2(cardNumber) {
    return card2Library[cardNumber].meaning1;
  }
  function getCard2Text3(cardNumber) {
    return card2Library[cardNumber].meaning2;
  }
  
  function getCard2Image(cardNumber) {
    return card2Library[cardNumber].image;
  }

