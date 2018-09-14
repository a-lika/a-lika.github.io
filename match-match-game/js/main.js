(function () {
  'use strict'
  
  const startGame = document.querySelector('.start-game');
  const rules = document.querySelector('.rules');
  const registrationContainer = document.querySelector('.registration-container');
  const registration = document.querySelector('.registration');
  const continueButton = document.querySelector('.continue');
  const newGameButton = document.getElementById('new-game');
  const form = document.querySelector('form');
  const gameContainer = document.querySelector('.game-container');
  const cardField = document.querySelector('.card-field');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const back = document.querySelectorAll('input[name="back"]');
  const level = document.querySelectorAll('input[name="level"]');
  const chooseCardsContainer = document.querySelectorAll('.choose-cards-container');
  const chooseBlockContainer = document.getElementById('choose-block-container');
  const inputFirstName = document.querySelector('input[name="first_name"]');
  const inputLastName = document.querySelector('input[name="last_name"]');
  const inputEmail = document.querySelector('input[name="email"]');
  const gamerName = document.querySelector('.gamer-name');
  const options = document.getElementById('options');
  const score = document.getElementById('score');
  const gameMenu = document.querySelector('.game-menu');
  const menuInfo = document.querySelector('.menu-info');
  const close = document.querySelector('.close');
  const menuContent = document.querySelector('.menu-content');
  
  let allowClick = true;
  let scoreLevel;
  let timer;
 
  const hideDisplay = (n, m) => {
    n.classList.add('hidden');
    m.classList.remove('hidden');
  };
  
  const toContinue = () => {
    rules.classList.add('rules-move');
    setTimeout(hideDisplay, 500, startGame, registrationContainer);
    registration.classList.add('registration-move');
  };
  
  continueButton.addEventListener('click', toContinue, false);

  const formData = {
    firstNameValue : () => inputFirstName.value,
    lastNameValue : () => inputLastName.value,
    emailValue : () => inputEmail.value
  };
  
  const insertFormData = () => {
    gamerName.textContent = formData.firstNameValue() + ' ' + formData.lastNameValue();
  };
  
  const moveChooseBlock = (block) => {
    chooseCardsContainer.forEach(el => block.appendChild(el));
  };
  
  const startTimer = () => { 
    let countSeconds = -1;
    let countMinutes = 0;
    
    function updateTimer () {
      countSeconds += 1;  
    
      if (countSeconds === 60) {
        countSeconds = 0;
        countMinutes += 1;         
          if (countMinutes === 60) {
            clearTimeout(timer);
            removeChildren(cardField);
            return
          }       
          if (countMinutes < 10) {
            minutes.innerHTML = '0' + countMinutes; 
          } else {
            minutes.innerHTML = countMinutes;
          }
      }

      if (countSeconds < 10) {
        seconds.innerHTML = '0' + countSeconds; 
      } else {
        seconds.innerHTML = countSeconds;
      }

        timer = setTimeout(updateTimer, 1000);
      } 
    
    updateTimer();
  };

  const createNewElement = (tag, className) => {
    const newTag = document.createElement(tag);
    newTag.classList.add(className);
    return newTag
  };
  
  const scoreTable = createNewElement('div', 'tables');
  
  function createScoreTables(className) {  
    this.tableInstance = createNewElement('table', className);
    this.caption = document.createElement('caption');
    this.caption.textContent = className.charAt(0).toUpperCase() + className.slice(1);
    this.thPosition = document.createElement('th');
    this.thPosition.textContent = 'Position';
    this.thTime = document.createElement('th');
    this.thTime.textContent = 'Time';

    this.tableInstance.appendChild(this.caption);
    this.tableInstance.appendChild(this.thPosition);
    this.tableInstance.appendChild(this.thTime);

    for (let i = 1; i <= 10 ; i++) {
      this.tr = document.createElement('tr');
      this.tdCount = document.createElement('td');
      this.tdCount.textContent = `${i} -`;
      this.tdTime = document.createElement('td');
      this.tdTime.textContent = '--';
      this.tr.appendChild(this.tdCount);
      this.tr.appendChild(this.tdTime);
      this.tableInstance.appendChild(this.tr);
    }  
  };
  
  const createSummaryScoreTable = () => {
    let lowTable = new createScoreTables('low');
    let mediumTable = new createScoreTables('medium');
    let highTable = new createScoreTables('high');

    scoreTable.appendChild(lowTable.tableInstance);
    scoreTable.appendChild(mediumTable.tableInstance);
    scoreTable.appendChild(highTable.tableInstance);
  };
  
  const fillScoreTable = (gamer, level) => {     
    let levelVar = eval('level');
    let localScore = gamer.score[level];
    let tableScore = scoreTable.querySelectorAll(`.${levelVar} > tr > td:last-child`);
    
    for (let i = 0; i < 10; i++) {
      if (localScore[i]) {
        tableScore[i].textContent = localScore[i].slice(0, 2) + ' : ' + localScore[i].slice(2);
      }
    };    
   return scoreTable   
  } ;
  
  const updateScore = (array, gamer) => {   
    array.sort((a, b) => a - b);   
    array.length = array.length < 10 ? array.length : 10;
    fillScoreTable(gamer, scoreLevel);  
    return array
  };
  
  const createKey = () => {
    let key = formData.firstNameValue() + formData.lastNameValue() + formData.emailValue();
    key = key.trim();
    key = key.toLowerCase();
    return key
  };
  
  function Gamer(firstName, lastName, email) {
    this.first_name = firstName,
    this.last_name = lastName,
    this.e_mail = email,
    this.score = { 'low' : [], 'medium' : [], 'high' : [] }
  };
  
  const createGamer = () => { 
    const key = createKey();
    let obj;
    
    if (!localStorage.getItem(key)) {
      obj = new Gamer(formData.firstNameValue(), formData.lastNameValue(), formData.emailValue());     
      localStorage[key] = JSON.stringify(obj);
    } 
    
    obj = JSON.parse(localStorage[key]);
    
      fillScoreTable(obj, 'low');
      fillScoreTable(obj, 'medium');
      fillScoreTable(obj, 'high');

    return obj     
  };
  
  const insertGamerScore = () => {          
    let gamer = createGamer();
    let key = createKey();
    let time = minutes.textContent + seconds.textContent;
    let scoreLevelArray = gamer.score[scoreLevel];

    if (scoreLevelArray.indexOf(time) === -1) {
      scoreLevelArray.push(time); 
      updateScore(scoreLevelArray, gamer);
    }

    localStorage[key] = JSON.stringify(gamer);
  };
  
  const createLevel = () => {  
    let field = {}, levelLength = level.length;

    function insertLevelData(countCard, width, levelName) {
      field.count = countCard;
      cardField.style.cssText = `width : ${width}px`;
      scoreLevel = levelName;
    }  

      for (let i = 0; i < levelLength; i++) {    
        if (level[i].checked) {

          switch (level[i].id) {
            case 'level_1' : insertLevelData(5, 950, 'low');
              break;
            case 'level_2' : insertLevelData(9, 1100, 'medium');
              break;
            case 'level_3' : insertLevelData(12, 1400, 'high');
              break;
            default : insertLevelData(9, 1100, 'medium');
          }
        }   
      }
    return field   
  };

  const createBackCardStyle = () => {    
    let backImage = {}, backLength = back.length;
     
    for (let i = 0; i < backLength; i++) {     
      if (back[i].checked) {
        
        switch(back[i].id) {
          case 'back_1' : {
              backImage.img = 'url("images/chameleon.jpg")';
              backImage.border = 'green';
            break;
          }
          case 'back_2' : {
              backImage.img = 'url("images/banan.jpg")';
              backImage.border = 'yellow';
            break;
          }
          case 'back_3' : {
              backImage.img = 'url("images/cake.jpg")';
              backImage.border = 'pink';
            break;
          }
          default : {
              backImage.img = 'url("images/banan.jpg")';
              backImage.border = 'yellow';
          }
        }
      }   
    }
    return backImage   
  };
  
  function CreateCardTemplate(frontImage, backImage) {
    this.cardContainer = createNewElement('div', 'card-container');
    this.card = createNewElement('div', 'card');
    this.frontCard = createNewElement('div', 'front-card');
    this.backCard = createNewElement('div', 'back-card');
    
    this.frontCard.style.backgroundImage = frontImage;
    this.backCard.style.backgroundImage = backImage.img;
    this.backCard.style.borderColor = backImage.border;
    
    this.card.appendChild(this.backCard);
    this.card.appendChild(this.frontCard);  
    this.cardContainer.appendChild(this.card);
  };
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  };

  function createCardInstance(count, backStyle) {  
    let cardsArray = [];

    function createCard () {
      for (let i = 1; i <= count; i++) {
        let card = new CreateCardTemplate(`url('images/backCards/img_${i}.jpg')`, backStyle);
        let cardCopy = new CreateCardTemplate(`url('images/backCards/img_${i}.jpg')`, backStyle);
        card.cardContainer.classList.add(`card_${i}`);
        cardCopy.cardContainer.classList.add(`card_${i}`);
        cardsArray.push(card, cardCopy);
      }
      shuffleArray(cardsArray);
      cardsArray.forEach(el => cardField.appendChild(el.cardContainer));
      insertFormData();
      
      return cardField;
    }
    createCard(count); 
  };
  
  const addMenuInfo = () => {
    setTimeout(hideDisplay, 300, menuInfo, menuInfo);
  };
  
  const showOptions = () => {
    clearMenuInfo();
    menuContent.innerHTML = '<h3 class="choose">The changes will be applied in the next game</h3>';
    moveChooseBlock(menuInfo);
    addMenuInfo();
  };
  
  const showScore = () => {
    clearMenuInfo();
    menuContent.innerHTML = '<h3 class="choose">Top-10 Scores</h3>';
    menuContent.appendChild(scoreTable);
    addMenuInfo();
  };
  
  const removeChildren = (el) => {
    el.textContent = '';
  };
  
  const createGameField = () => {
    createCardInstance(createLevel().count, createBackCardStyle());
    minutes.textContent = '00';
    startTimer();
    allowClick = true; 
  };
  
  const startNewGame = (e) => {
    e.stopPropagation();
      if (allowClick)  {
        allowClick = false;
        clearMenuInfo();
        clearTimeout(timer);
        removeChildren(cardField);
        setTimeout(createGameField, 300);
      }
  };
  
  const toStart = (event) => {
    event.preventDefault();  
      if (allowClick) {
        allowClick = false;
        setTimeout(hideDisplay, 500, registrationContainer, gameContainer);
        createSummaryScoreTable();
        createGamer();
        setTimeout(createGameField, 500);     
      }
  };
  
  const clearMenuInfo = () => {
    menuInfo.classList.add('hidden');
    menuInfo.classList.remove('infoCongrats');
    menuContent.textContent='';
    moveChooseBlock(chooseBlockContainer);
  };
  
  function applyOptions(e) {
    if(e.target !== e.currentTarget) {
      
      switch(e.target) {
        case newGameButton : startNewGame(e);
          break;
        case options : showOptions();
          break;
        case score : showScore();
          break;
      }
    }   
  };
  
  form.addEventListener('submit', toStart, false);
  
  gameMenu.addEventListener('click', applyOptions, false);
  
  close.addEventListener('click', clearMenuInfo, false);
  
  const removeFlipCard = (n) => {
    n.classList.remove('flip-card');
  };
  
  function checkFlipCard(n) {     
    let childrenArray = Array.prototype.slice.call(cardField.children, 0);
    let flipCardArray = childrenArray.filter(el => el.classList.contains('flip-card'));
    let transformCardArray = childrenArray.filter(el => el.classList.contains('transform-card'));
  
    const allowTrue = () => {        
      allowClick = true; 
    };
    
    const closeCard = () => {
      flipCardArray.forEach(el => removeFlipCard(el));
      allowTrue();           
    };
    
    if ((flipCardArray.length === 2)
      && (flipCardArray[0].classList.contains(n) !== flipCardArray[1].classList.contains(n))) {       
        allowClick = false;
        setTimeout(closeCard, 600);
 
    } else if ((flipCardArray.length === 2) 
      && (flipCardArray[0].classList.contains(n) === flipCardArray[1].classList.contains(n))) {        
        allowClick = false;         
        flipCardArray.forEach(el => { setTimeout(removeFlipCard, 600, el);
                                      el.classList.add('transform-card')  
                                    });       
        setTimeout(allowTrue, 700);  
                
        if (transformCardArray.length === childrenArray.length - 2) {          
          setTimeout(toCongratulate, 600);
        }
    }
  }; 
  
  const moveCard = (e) => {
    let card = e.target.parentNode.parentNode;       
    if (card.classList.contains('card-container') && allowClick) {       
      let cardClass = card.getAttribute('class');
      cardClass = cardClass.split(' ', 3)[1];
      card.classList.add('flip-card');
      checkFlipCard(cardClass);       
     } 
  };

  cardField.addEventListener('click', moveCard, false);
  
  const toCongratulate = () => {
    clearTimeout(timer);
    menuInfo.classList.add('infoCongrats');
    menuContent.innerHTML = '<h2>Congratulations!</h2><h3>You win!</h3>';
    menuInfo.classList.remove('hidden');
    insertGamerScore();
  };
  
}());
