window.onload = () => {
  let loadingContainer = document.querySelector(".loading-container");
  let [firstIphone, secondIphone, thirdIphone] = document.querySelectorAll(
    "#first-iphone, #second-iphone, #third-iphone"
  );
  let container = document.querySelector(".container");
  loadingContainer.style.display = "none";
  container.style.display = "block";

  setTimeout(() => {
    loadingContainer.style.display = "block";
    container.style.display = "none";
  }, 1000);

  firstIphone.classList.add("run-first-iphone-move-animation");
  secondIphone.classList.add("run-second-iphone-move-animation");
  thirdIphone.classList.add("run-third-iphone-move-animation");

  setTimeout(() => {
    loadingContainer.style.display = "none";
  }, 6500);
  let all = document.querySelectorAll(
    ".inner-camera-roll, .inner-camera, .square-container, .iphone-inner-photos, .video-container, .inner-weather, .inner-watch, .inner-clock, .inner-maps, .calc, .inner-reminders, .inner-iBooks, .inner-find-friends, .inner-find-iphone, .inner-telegram, .inner-telegram-settings"
  );
  for (let one of all) {
    one.style.display = "block";
  }

  setTimeout(() => {
    for (let one of all) {
      one.style.display = "none";
    }
  }, 6500);

  let scr = document.querySelector(".iphone-inner-screen");

  let [leftToggle, rightToggle] = document.querySelectorAll(
    ".left-toggle, .right-toggle"
  );

  let sixthPanelIcons = document.querySelectorAll(
    ".tel, .safari, .message, .music"
  );
  let sixthPanel = document.querySelector(".sixth-panel");
  let seventhPanel = document.querySelector(".seventh-panel");
  let eighthPanel = document.querySelector(".eighth-panel");
  let ninethPanel = document.querySelector(".nineth-panel");

  let [
    simStatusInnerExtras,
    batteryStatusInnerExtras,
    batteryStatus2InnerExtras,
  ] = document.querySelectorAll(
    ".sim-status-inner-extras, .battery-status-inner-extras, .battery-status-2-inner-extras"
  );

  let timeInnerExtras = document.querySelectorAll(".time-inner-extras");

  let iphone = document.querySelector(".iphone");

  let [
    photosIcon,
    photos,
    cameraRollAlbum,
    cameraRoll,
  ] = document.querySelectorAll(
    ".photos, .iphone-inner-photos, .camera-roll-album, .inner-camera-roll"
  );

  let [favouritesAlbum, favourites] = document.querySelectorAll(
    ".favourites-album, .inner-favourites"
  );

  favourites.style.display = "none";

  let [calendarIcon, innerCalendar] = document.querySelectorAll(
    ".calendar, .inner-calendar"
  );

  let backButtonInnerCalendarTopContainer = document.querySelector(
    "#back-button-inner-calendar-top-container"
  );

  backButtonInnerCalendarTopContainer.innerHTML += new Date().getFullYear();

  let imageHeartIcon = document.querySelector("#heart-icon");

  let [
    backToAlbumsButton,
    backToAlbumsButtonInnerFavourites,
    innerFavouritesImage,
  ] = document.querySelectorAll(
    "#back-to-albums-button, #back-to-albums-button-inner-favourites, .inner-favourites-image"
  );

  let backArrowInnerImage = document.querySelector("#back-arrow-inner-image");

  let backArrowInnerFavouriteImage = document.querySelector(
    "#back-arrow-inner-favourites-image"
  );

  let currentMonthInCalendar = document.querySelector(".current-month");

  let currentCalendar = document.querySelector(".current-calendar");

  let openedImage = document.querySelector(".opened-image");

  let openedImageInnerFavourites = document.querySelector(
    ".opened-image-inner-favourites"
  );

  let innerImageBottomContainer = document.querySelector(
    ".inner-image-bottom-container"
  );

  innerImageBottomContainer.style.display = "none";

  openedImage.style.display = "none";

  let [
    innerFavouritesImageTopContainer,
    innerFavouritesImageBottomContainer,
  ] = document.querySelectorAll(
    ".inner-favourites-image-top-container, .inner-favourites-image-bottom-container"
  );

  innerFavouritesImageTopContainer.style.display = innerFavouritesImageBottomContainer.style.display =
    "none";

  let images = document.querySelectorAll(
    ".image-1,.image-2,.image-3,.image-4,.image-5,.image-6,.image-7,.image-8,.image-9,.image-10,.image-11,.image-12"
  );

  let worldClockTextInnerClock = document.querySelector(
    ".world-clock-text-inner-clock"
  );

  let passcodeInput = document.querySelector("#passcode-input");
  let passCode = `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

  let doneButtonInnerPasscodeContainer = document.querySelector(
    "#done-button-inner-passcode-container"
  );

  setTimeout(() => {
    alert(`Welcome to my new code. 
  In the main I done UI clones of iPhone widgets with some animations. Some widgets are working (but not fully).
  Here you can see many interesting things. 
  If something displaying not correctly - let me know. 
  
  How to use
  1)Tap home button.
  2)Tap it again and write passcode. 
  3)To see more widgets tap on left/right screen side. 
  4)Enjoy. 😊
  
  P.S. animation of itunes U is not a bug, I don't know how it looks inside :)
  
  Don’t forget to upvote if you like this code. ☀️
  
  Always your's: "★ Don’t Know ★".`);
    alert("Your passcode is " + passCode);
  }, 7000);

  doneButtonInnerPasscodeContainer.onclick = () => {
    if (passcodeInput.value == passCode) {
      passcodeContainer.classList.remove(
        "run-appear-passcode-container-animation"
      );
      startContainer.classList.remove(
        "run-start-container-transform-animation"
      );
      setTimeout(() => {
        passcodeContainer.classList.add("run-unlock-animation");
        startContainer.classList.add("run-unlock-animation");
      }, 50);

      setTimeout(() => {
        passcodeContainer.style.display = "none";
        startContainer.style.display = "none";
        passcodeContainer.classList.remove("run-unlock-animation");
        startContainer.classList.remove("run-unlock-animation");
      }, 550);
    } else {
      if (passcodeInput.classList.contains("run-invalid-password-animation")) {
        passcodeInput.classList.remove("run-invalid-password-animation");
      }

      passcodeInput.classList.add("run-invalid-password-animation");
      setTimeout(() => {
        passcodeInput.classList.remove("run-invalid-password-animation");
      }, 350);
    }
  };

  let newNoteContainer = document.querySelector(".new-note-container");
  let noteIconContainer = document.querySelector("#note-icon-container");
  let backToNotesButton = document.querySelector("#back-to-notes-button");

  let simStatus = document.querySelector("#sim-status");
  let currentTimeHTML = document.querySelector("#time");
  let batteryStatus = document.querySelectorAll(
    "#battery-status, #battery-status-2"
  );

  let [clockIcon, innerClock] = document.querySelectorAll(
    ".clock, .inner-clock"
  );

  let circleWrapper = document.querySelector(".circle-wrapper");
  let circleUnder = document.querySelector(".circle-under");

  let weatherUnderMapsDestinations = document.querySelector(
    ".weather-under-maps-destinations"
  );

  let [
    circle1,
    circle2,
    circle3,
    circle4,
    circle5,
    circle6,
  ] = document.querySelectorAll(
    ".circle-1, .circle-2, .circle-3, .circle-4, .circle-5, .circle-6"
  );

  let [
    firstToggle,
    secondToggle,
    thirdToggle,
    fourthToggle,
    fifthToggle,
    sixthToggle,
  ] = document.querySelectorAll(
    ".first-toggle, .second-toggle, .third-toggle, .fourth-toggle, .fifth-toggle, .sixth-toggle"
  );

  let [
    firstOff,
    secondOff,
    thirdOff,
    fourthOff,
    fifthOff,
    sixthOff,
  ] = document.querySelectorAll(
    ".first-off, .second-off, .third-off, .fourth-off, .fifth-off, .sixth-off"
  );

  let [
    firstOn,
    secondOn,
    thirdOn,
    fourthOn,
    fifthOn,
    sixthOn,
  ] = document.querySelectorAll(
    ".first-on, .second-on, .third-on, .fourth-on, .fifth-on, .sixth-on"
  );

  let [
    firstAlarmTime,
    secondAlarmTime,
    thirdAlarmTime,
    fourthAlarmTime,
    fifthAlarmTime,
    sixthAlarmTime,
  ] = document.querySelectorAll(
    ".first-alarm-time, .second-alarm-time, .third-alarm-time, .fourth-alarm-time, .fifth-alarm-time, .sixth-alarm-time"
  );

  let [
    firstAlarmText,
    secondAlarmText,
    thirdAlarmText,
    fourthAlarmText,
    fifthAlarmText,
    sixthAlarmText,
  ] = document.querySelectorAll(
    ".first-alarm-text, .second-alarm-text, .third-alarm-text, .fourth-alarm-text, .fifth-alarm-text, .sixth-alarm-text"
  );

  let textWorldClockInnerBottomContainer = document.querySelector(
    "#text-world-clock-inner-bottom-container"
  );
  let alarmTextInnerBottomContainer = document.querySelector(
    "#alarm-text-inner-bottom-container"
  );
  let bedtimeTextInnerBottomContainer = document.querySelector(
    "#bedtime-text-inner-bottom-container"
  );
  let stopwatchTextInnerBottomContainer = document.querySelector(
    "#stopwatch-text-inner-bottom-container"
  );
  let timerTextInnerBottomContainer = document.querySelector(
    "#timer-text-inner-bottom-container"
  );

  let telNumberOutput = document.querySelector("#output");
  let buttonsInnerKeypad = document.querySelectorAll(".button-inner-keypad");

  let searchInput = document.querySelector(".search-input");
  let mapsDestinations = document.querySelector(".maps-destinations");

  let addNumberButton = document.querySelector("#add-number-button");

  let deleteButton = document.querySelector("#delete-button");

  for (let button of buttonsInnerKeypad) {
    button.onclick = () => {
      telNumberOutput.innerHTML += button.innerHTML;
      if (telNumberOutput.innerHTML.length <= 6) {
        telNumberOutput.style.fontSize = "20px";
      }

      if (telNumberOutput.innerHTML.length > 6) {
        telNumberOutput.style.fontSize = "18px";
      }

      if (telNumberOutput.innerHTML.length > 12) {
        telNumberOutput.style.fontSize = "16px";
      }

      if (telNumberOutput.innerHTML.length > 0) {
        addNumberButton.classList.remove("run-icon-transition-2");
        deleteButton.classList.remove("run-icon-transition-2");

        setTimeout(() => {
          addNumberButton.classList.add("run-icon-transition");
          deleteButton.classList.add("run-icon-transition");
        }, 50);

        setTimeout(() => {
          addNumberButton.style.display = "inline";
          deleteButton.style.display = "block";
        }, 150);
      }
    };
  }

  deleteButton.onclick = () => {
    let otp = telNumberOutput.innerHTML.slice(
      0,
      telNumberOutput.innerHTML.length - 1
    );

    if (telNumberOutput.innerHTML.length <= 6) {
      telNumberOutput.style.fontSize = "20px";
    }

    if (telNumberOutput.innerHTML.length > 6) {
      telNumberOutput.style.fontSize = "18px";
    }

    if (telNumberOutput.innerHTML.length > 12) {
      telNumberOutput.style.fontSize = "16px";
    }

    if (telNumberOutput.innerHTML.length == 1) {
      addNumberButton.classList.remove("run-icon-transition");
      deleteButton.classList.remove("run-icon-transition");

      setTimeout(() => {
        addNumberButton.classList.add("run-icon-transition-2");
        deleteButton.classList.add("run-icon-transition-2");
      }, 50);

      setTimeout(() => {
        addNumberButton.style.display = "none";
        deleteButton.style.display = "none";
      }, 300);
    }

    telNumberOutput.innerHTML = otp;
  };

  let topWrapperInnerBottomContainerInnerMaps = document.querySelector(
    ".top-wrapper-inner-bottom-container-inner-maps"
  );

  let bottomContainerInnerMaps = document.querySelector(".bottom-container");

  topWrapperInnerBottomContainerInnerMaps.onclick = () => {
    let containerStyles = getComputedStyle(bottomContainerInnerMaps);

    if (containerStyles.transform == "matrix(1, 0, 0, 1, 0, -230)") {
      bottomContainerInnerMaps.classList.add(
        "run-maps-bottom-container-animation-2"
      );
      setTimeout(() => {
        bottomContainerInnerMaps.classList.remove(
          "run-maps-bottom-container-animation-2"
        );
        bottomContainerInnerMaps.style.transform = "translateY(0)";
      }, 400);
    } else {
      bottomContainerInnerMaps.classList.add(
        "run-maps-bottom-container-animation"
      );
      setTimeout(() => {
        bottomContainerInnerMaps.classList.remove(
          "run-maps-bottom-container-animation"
        );
        bottomContainerInnerMaps.style.transform = "translateY(-230px)";
      }, 400);
    }
  };

  let [keynoteIcon, innerKeynote] = document.querySelectorAll(
    ".keynote, .inner-keynote"
  );
  let [garagebandIcon, innerGarageBand] = document.querySelectorAll(
    ".garageband, .inner-garageband"
  );

  let [safariIcon, innerSafari] = document.querySelectorAll(
    ".safari, .inner-safari"
  );
  let [mapsIcon, innerMaps] = document.querySelectorAll(".map, .inner-maps");
  let [numbersIcon, innerNumbers] = document.querySelectorAll(
    ".numbers-icon, .inner-numbers"
  );

  let bedtimeInnerBottomContainer = document.querySelector(
    ".bedtime-inner-bottom-container"
  );
  let innerClockBedtimeContainer = document.querySelector(
    ".inner-clock-bedtime-container"
  );

  let [
    bedtimeTextInnerMiddleContainer,
    timeInnerMiddleContainer,
  ] = document.querySelectorAll(
    "#bedtime-text-inner-middle-container, #time-inner-middle-container"
  );
  let [
    wakeTextInnerMiddleContainer,
    wakeTimeInnerMiddleContainer,
  ] = document.querySelectorAll(
    "#wake-text-inner-middle-container, #wake-time-inner-middle-container"
  );

  let innerClockTimerContainer = document.querySelector(
    ".inner-clock-timer-container"
  );
  let timerInnerBottomContainer = document.querySelector(
    ".timer-inner-bottom-container"
  );

  let [remindersIcon, innerReminders] = document.querySelectorAll(
    ".reminders, .inner-reminders"
  );

  let doneTextContainer = document.querySelector(".done-text-container");
  let writingField = document.querySelector("#writing-field");
  let notesMiddleContainer = document.querySelector(".notes-middle-container");
  let countOfNotes = document.querySelector("#count-of-notes");

  let titleInnerTopContainer = document.querySelector(
    "#title-inner-top-container"
  );

  let [
    innerPhoneFavourites,
    innerPhoneRecents,
    innerPhoneContacts,
    innerPhoneKeypad,
    innerPhoneVoicemail,
  ] = document.querySelectorAll(
    ".inner-phone-favourites, .inner-phone-recents, .inner-phone-contacts, .inner-phone-keypad, .inner-phone-voicemail"
  );

  let favouritesIconContainerInnerPhone = document.querySelector(
    ".favourites-icon-container-inner-phone"
  );
  let recentsIconContainerInnerPhone = document.querySelector(
    ".recents-icon-container-inner-phone"
  );
  let contactsIconContainerInnerPhone = document.querySelector(
    ".contacts-icon-inner-phone"
  );
  let keypadIconContainerInnerPhone = document.querySelector(
    ".keypad-icon-container"
  );
  let voicemailIconContainerInnerPhone = document.querySelector(
    ".voicemail-icon-container"
  );

  let favouritesTextInnerPhoneBottomContainer = document.querySelector(
    "#favourites-text-inner-phone-bottom-container"
  );
  let recentsTextInnerPhoneBottomContainer = document.querySelector(
    "#recents-text-inner-phone"
  );
  let contactsTextInnerPhoneBottomContainer = document.querySelector(
    "#contacts-text-inner-bottom-container"
  );
  let keypadTextInnerPhoneBottomContainer = document.querySelector(
    "#keypad-text"
  );
  let voicemailTextInnerPhoneBottomContainer = document.querySelector(
    "#voicemail-text"
  );

  let recentsContainerInnerNumbers = document.querySelector(
    ".recents-container-inner-numbers"
  );
  let browseContainerInnerNumbers = document.querySelector(
    ".browse-container-inner-numbers"
  );
  let innerNumbersBrowseContainer = document.querySelector(
    ".inner-numbers-browse-container"
  );
  let recentsTextInnerNumbers = document.querySelector(
    "#recents-text-inner-numbers"
  );
  let browseTextInnerNumbers = document.querySelector(
    "#browse-text-inner-numbers"
  );

  browseContainerInnerNumbers.onclick = () => {
    innerNumbersBrowseContainer.style.display = "block";
    browseTextInnerNumbers.style.color = "#e74b4d";
    recentsTextInnerNumbers.style.color = "#989898";
  };

  recentsContainerInnerNumbers.onclick = () => {
    innerNumbersBrowseContainer.style.display = "none";
    browseTextInnerNumbers.style.color = "#989898";
    recentsTextInnerNumbers.style.color = "#e74b4d";
  };

  let doneButtonInnerReminders = document.querySelector(
    "#done-button-inner-reminders"
  );

  let timeInnerStartContainer = document.querySelector(
    "#time-inner-start-container"
  );

  let [facetimeIcon, innerFacetime] = document.querySelectorAll(
    ".facetime, .inner-facetime"
  );
  let [iMovieIcon, innerIMovie] = document.querySelectorAll(
    ".iMovie, .inner-iMovie"
  );
  let [pagesIcon, innerPages] = document.querySelectorAll(
    ".pages, .inner-pages"
  );
  let innerPagesBrowseContainer = document.querySelector(
    ".inner-pages-browse-container"
  );
  let browseContainerInnerPages = document.querySelector(
    ".browse-container-inner-pages"
  );
  let browseTextInnerPages = document.querySelector("#browse-text-inner-pages");
  let recentsContainerInnerPages = document.querySelector(
    ".recents-container-inner-pages"
  );
  let recentsTextInnerPages = document.querySelector(
    "#recents-text-inner-pages"
  );

  let [phoneIcon, innerPhone] = document.querySelectorAll(".tel, .inner-phone");

  let bottomRemindersContainer = document.querySelector(
    ".inner-reminders-bottom-reminders-container"
  );

  let scheduledContainer = document.querySelector(".scheduled-container");

  let [homeIcon, innerHome] = document.querySelectorAll(".home, .inner-home");

  let [messageIcon, innerMessage] = document.querySelectorAll(
    ".message, .inner-messages"
  );

  let [musicIcon, innerMusic] = document.querySelectorAll(
    ".music, .inner-music"
  );

  let [healthIcon, innerHealth] = document.querySelectorAll(
    ".health, .inner-health"
  );

  let [videoIcon, innerVideo] = document.querySelectorAll(
    ".video, .inner-video"
  );

  let [iTunesStoreIcon, innerItunesStore] = document.querySelectorAll(
    ".iTunes-store, .inner-itunes-store"
  );

  let startContainer = document.querySelector(".start-container");

  let storeButton = document.querySelector("#store-button");

  let [appStoreIcon, innerAppStore] = document.querySelectorAll(
    ".app-store, .inner-app-store"
  );

  let [stocksIcon, innerStocks] = document.querySelectorAll(
    ".stocks, .inner-stocks"
  );

  let mainWrapperInnerStocks = document.querySelector(
    ".main-wrapper-inner-stocks"
  );

  let innerStocksBottomContainer = document.querySelector(
    ".inner-stocks-bottom-container"
  );

  let deleteContainerInnerNewNote = document.querySelector(
    ".delete-container-inner-new-note"
  );

  let sololearnIcon = document.querySelector(".sololearn");

  let [
    learnIconContainer,
    playIconContainer,
    feedIconContainer,
    curlyBracketIconContainer,
    discussIconContainer,
  ] = document.querySelectorAll(
    ".learn-icon-container, .play-icon-container, .feed-icon-container, .curly-bracket-icon-container, .discuss-icon-container"
  );

  let innerNotes = document.querySelector(".inner-notes");

  let notesIcon = document.querySelector(".notes");

  let sleepCircle = document.querySelector(".sleep-circle");

  let [innerBedtimeOff, innerBedtimeOn] = document.querySelectorAll(
    ".inner-bedtime-off, .inner-bedtime-on"
  );

  let [
    innerClockTopContainer,
    alarmInnerBottomContainer,
  ] = document.querySelectorAll(
    ".inner-clock-top-container, .alarm-inner-bottom-container"
  );

  let circleInnerToggle = document.querySelector(".circle-inner-toggle");

  let innerClockAlarmContainer = document.querySelector(
    ".inner-clock-alarm-container"
  );

  let worldClockInnerBottomContainer = document.querySelector(
    ".world-clock-inner-bottom-container"
  );

  let [editTextInnerClock, plusButtonInnerClock] = document.querySelectorAll(
    ".edit-text-inner-clock, .plus-button-inner-clock"
  );

  let toggleInnerBedtimeContainer = document.querySelector(
    ".toggle-inner-bedtime-container"
  );

  let circleInnerBedtimeContainer = document.querySelector(
    ".circle-inner-bedtime-container"
  );

  let innerClockStopwatchContainer = document.querySelector(
    ".inner-clock-stopwatch-container"
  );

  let stopwatchInnerBottomContainer = document.querySelector(
    ".stopwatch-inner-bottom-container"
  );

  let [watchIcon, innerWatch] = document.querySelectorAll(
    ".watch, .inner-watch"
  );

  innerClockAlarmContainer.style.display = "none";

  let innerImageTopContainer = document.querySelector(
    ".inner-image-top-container"
  );
  innerImageTopContainer.style.display = "none";

  let offContainer = document.querySelector(".off-container");

  let [
    cameraRollTextInnerCameraRoll,
    selectTextInnerCameraRoll,
  ] = document.querySelectorAll(
    "#camera-roll-top-container-text, #select-text"
  );

  let [
    divideButton,
    multButton,
    minusButton,
    plusButton,
  ] = document.querySelectorAll(".divide, .mult, .minus, .plus");

  let [iPhoneCalculatorIcon, iPhoneCalculator] = document.querySelectorAll(
    ".calculator, .calc"
  );

  let [
    currentTimeInnerClock,
    timeOfTheSecondCity,
    timeOfTheThirdCity,
    timeOfTheFourthCity,
    timeOfTheFifthCity,
    timeOfThesixthCity,
  ] = document.querySelectorAll(
    ".current-time-inner-clock, .time-of-the-second-city, .time-of-the-third-city, .time-of-the-fourth-city, .time-of-the-fifth-city, .time-of-the-sixth-city"
  );

  let cleanerButton = document.querySelector(".cleaner");

  let dateInnerStartContainer = document.querySelector(
    "#date-inner-start-container"
  );

  let calcInput = document.querySelector(".calculatorInput");

  let homeButton = document.querySelector(".iphone-home");

  let [
    readingNowContainer,
    libraryContainerInnerIBooks,
    searchContainerInnerIBooks,
  ] = document.querySelectorAll(
    ".reading-now-container, .library-container-inner-iBooks, .search-container-inner-iBooks"
  );

  let [
    readingNowTextInnerIBooks,
    libraryTextInnerIBooks,
    searchTextInnerIBooks,
  ] = document.querySelectorAll(
    "#reading-now-text-inner-iBooks, #library-text-inner-iBooks, #search-text-inner-iBooks"
  );

  let innerIBooks = document.querySelector(".inner-iBooks");
  let innerIBooksLibraryContainer = document.querySelector(
    ".inner-iBooks-library-container"
  );
  let innerIBooksSearchContainer = document.querySelector(
    ".inner-iBooks-search-container"
  );

  let innerCamera = document.querySelector(".inner-camera");
  let squareContainer = document.querySelector(".square-container");
  let videoContainer = document.querySelector(".video-container");

  let innerCameraBottomContainerTopWrapper = document.querySelector(
    ".inner-camera-bottom-container-top-wrapper"
  );

  let videoTextInnerCamera = document.querySelector("#video-text-inner-camera");
  let photoText = document.querySelector("#photo-text");
  let squareText = document.querySelector("#square-text");

  let innerExtrasBlurContainer = document.querySelector(
    ".inner-extras-blur-container"
  );

  let editButton = document.querySelector("#edit-button");

  let iBooksIcon = document.querySelector(".iBooks");

  let textareaInnerScheduled = document.querySelector(
    "#textarea-inner-scheduled"
  );

  let plusInnerScheduled = document.querySelector("#plus-inner-scheduled");

  let scheduledMiddleContainer = document.querySelector(
    ".scheduled-middle-container"
  );

  let itemsCondition = document.querySelector("#items-condition");

  let textareaInnerBottomWrapper = document.querySelector(
    "#textarea-inner-bottom-wrapper"
  );

  let plusInnerReminders = document.querySelector("#plus-inner-reminders");

  let countOfRmndrs = document.querySelector("#count-of-reminders");

  let itunesUIcon = document.querySelector(".iTunes-u");
  let innerItunesU = document.querySelector(".inner-itunes-u");

  let passcodeContainer = document.querySelector(".passcode-container");

  let extras = document.querySelector(".apps-icon");
  let innerExtras = document.querySelector(".inner-extras-container");

  let iconsInnerExtras = document.querySelectorAll(".icon-inner-extras");

  let textsInnerExtras = document.querySelectorAll(".text-inner-extras");

  let buttonInnerCamera = document.querySelector("#button-inner-camera");

  let innerVideoContainerPhoto = document.querySelector(
    ".inner-video-container-photo"
  );

  let weatherIcon = document.querySelector(".weather");
  let innerWeather = document.querySelector(".inner-weather");

  let [
    tipsIcon,
    voiceIcon,
    contactsIcon,
    findFriendsIcon,
    findIphoneIcon,
  ] = document.querySelectorAll(
    ".tips-icon, .voice-icon, .contacts-icon, .find-friends-icon, .find-iphone-icon"
  );
  let innerTips = document.querySelector(".inner-tips");
  let innerVoiceMemos = document.querySelector(".inner-voice-memos");
  let innerContacts = document.querySelector(".inner-contacts");
  let innerFindFriends = document.querySelector(".inner-find-friends");
  let innerFindIphone = document.querySelector(".inner-find-iphone");

  let telegramIcon = document.querySelector(".telegram");

  let squarePhoto = document.querySelector(".square-photo");
  let photoInnerCamera = document.querySelector(".photo-inner-camera");

  let cameraIcon = document.querySelector(".camera");

  let callsToggleInnerTelegram = document.querySelector(
    "#calls-toggle-inner-telegram"
  );
  let recentCallsButtonInnerTelegram = document.querySelector(
    "#recent-calls-button-inner-telegram"
  );
  let missedCallsButtonInnerTelegram = document.querySelector(
    "#missed-calls-button-inner-telegram"
  );
  let callsTextInnerMiddleContainer = document.querySelector(
    "#calls-text-inner-middle-container"
  );

  missedCallsButtonInnerTelegram.onclick = () => {
    let toggleStyles = getComputedStyle(callsToggleInnerTelegram);

    if (toggleStyles.left == "47px") {
      return;
    }

    callsToggleInnerTelegram.classList.add(
      "run-toggle-telegram-calls-animation"
    );
    setTimeout(() => {
      missedCallsButtonInnerTelegram.style.color = "#000";
      recentCallsButtonInnerTelegram.style.color = "#525252";
    }, 100);

    callsTextInnerMiddleContainer.innerHTML = "You have no missed calls";

    setTimeout(() => {
      callsToggleInnerTelegram.style.left = "47px";
      callsToggleInnerTelegram.classList.remove(
        "run-toggle-telegram-calls-animation"
      );
    }, 200);
  };

  recentCallsButtonInnerTelegram.onclick = () => {
    let toggleStyles = getComputedStyle(callsToggleInnerTelegram);

    if (toggleStyles.left == "2px") {
      return;
    }

    callsToggleInnerTelegram.classList.add(
      "run-toggle-telegram-calls-animation-2"
    );
    setTimeout(() => {
      recentCallsButtonInnerTelegram.style.color = "#000";
      missedCallsButtonInnerTelegram.style.color = "#525252";
    }, 100);

    callsTextInnerMiddleContainer.innerHTML =
      "Your recent calls will appear here";

    setTimeout(() => {
      callsToggleInnerTelegram.style.left = "2px";
      callsToggleInnerTelegram.classList.remove(
        "run-toggle-telegram-calls-animation-2"
      );
    }, 200);
  };

  let [
    innerTelegram,
    innerCallsContainerInnerTelegram,
    innerChatsContainerInnerTelegram,
    innerTelegramSettings,
  ] = document.querySelectorAll(
    ".inner-telegram, .inner-calls-container-inner-telegram, .inner-chats-container-inner-telegram, .inner-telegram-settings"
  );
  let [
    innerTelegramContactsIconContainer,
    innerTelegramCallsContainer,
    innerTelegramChatsIconContainer,
    innerTelegramSettingsIconContainer,
  ] = document.querySelectorAll(
    ".inner-telegram-contacts-icon-container, .inner-telegram-calls-container, .inner-telegram-chats-icon-container, .inner-telegram-settings-icon-container"
  );
  let [
    contactsTextInnerTelegramBottomContainer,
    callsTextInnerTelegramBottomContainer,
    chatsTextInnerTelegramBottomContainer,
    settingsTextInnerTelegramBottomContainer,
  ] = document.querySelectorAll(
    "#contacts-text-inner-telegram-bottom-container, #calls-text-inner-telegram-bottom-container, #chats-text-inner-telegram-bottom-container, #settings-text-inner-telegram-bottom-container"
  );

  let [
    innerSololearn,
    playContainerInnerSololearn,
    activityFeedContainerInnerSololearn,
    codePlaygroundContainer,
    discussContainer,
  ] = document.querySelectorAll(
    ".inner-sololearn, .play-container-inner-sololearn, .activity-feed-container-inner-sololearn, .code-playground-container, .discuss-container"
  );

  let [
    learnTextInnerBottomContainer,
    playTextInnerBottomContainer,
    feedTextInnerBottomContainer,
    codeTextInnerBottomContainer,
    discussTextInnerBottomContainer,
  ] = document.querySelectorAll(
    "#learn-text-inner-bottom-container, #play-text-inner-bottom-container, #feed-text-inner-bottom-container, #code-text-inner-bottom-container, #discuss-text-inner-bottom-container"
  );

  let plusPos = 0;
  let plusInnerRemindersPos = 0;
  let countOfReminders = 0;
  let countOfRemindersInnerBottomContainer = 0;

  doneButtonInnerReminders.onclick = () => {
    if (textareaInnerScheduled.value.length == 0) {
      return;
    }

    plusPos += 41;
    plusInnerRemindersPos += 41;
    countOfReminders++;
    countOfRemindersInnerBottomContainer++;
    plusInnerScheduled.style.top = `${plusPos}px`;
    plusInnerReminders.style.top = `${plusInnerRemindersPos}px`;

    textareaInnerScheduled.insertAdjacentHTML(
      "beforebegin",
      `<div class='delete-reminder-${countOfReminders} delete-reminder'></div> <p class='reminder-${countOfReminders} reminder'>${textareaInnerScheduled.value}</p>`
    );
    textareaInnerBottomWrapper.insertAdjacentHTML(
      "beforebegin",
      `<div class='delete-reminder-inner-bottom-container-${countOfReminders} delete-reminder-inner-bottom-container'></div> <p class='reminders-inner-bottom-container-${countOfReminders} reminder-inner-bottom-container'>${textareaInnerScheduled.value}</p>`
    );

    let deleteRemindersButtons = document.querySelectorAll(
      `.delete-reminder-${countOfReminders}`
    );
    let deleteRemindersButtonsInnerBottomContainer = document.querySelectorAll(
      `.delete-reminder-inner-bottom-container-${countOfReminders}`
    );

    if (countOfReminders == 1) {
      itemsCondition.innerHTML = countOfReminders + " item due today";
    }

    if (countOfReminders > 1) {
      itemsCondition.innerHTML = countOfReminders + " items due today";
    }

    countOfRmndrs.innerHTML = countOfRemindersInnerBottomContainer;

    textareaInnerScheduled.value = "";

    for (let deleteRemindersButtonInnerBottomContainer of deleteRemindersButtonsInnerBottomContainer) {
      deleteRemindersButtonInnerBottomContainer.onclick = (e) => {
        plusInnerRemindersPos -= 41;
        countOfRemindersInnerBottomContainer--;

        countOfRmndrs.innerHTML = countOfRemindersInnerBottomContainer;

        e.target.nextElementSibling.classList.add(
          "run-delete-reminder-animation"
        );
        e.target.classList.add("run-delete-reminder-animation");

        setTimeout(() => {
          plusInnerReminders.style.top = `${plusInnerRemindersPos}px`;
          e.target.nextElementSibling.classList.remove(
            "run-delete-reminder-animation"
          );
          e.target.classList.remove("run-delete-reminder-animation");
          e.target.nextElementSibling.remove();
          e.target.remove();
        }, 500);
      };
    }

    for (let deleteRemindersButton of deleteRemindersButtons) {
      deleteRemindersButton.onclick = (e) => {
        plusPos -= 41;
        countOfReminders--;

        if (countOfReminders == 0) {
          itemsCondition.innerHTML = "No items due today";
        }

        if (countOfReminders == 1) {
          itemsCondition.innerHTML = countOfReminders + " item due today";
        }

        if (countOfReminders > 1) {
          itemsCondition.innerHTML = countOfReminders + " items due today";
        }

        e.target.nextElementSibling.classList.add(
          "run-delete-reminder-animation"
        );
        e.target.classList.add("run-delete-reminder-animation");
        setTimeout(() => {
          plusInnerScheduled.style.top = `${plusPos}px`;
          e.target.nextElementSibling.classList.remove(
            "run-delete-reminder-animation"
          );
          e.target.classList.remove("run-delete-reminder-animation");
          e.target.nextElementSibling.remove();
          e.target.remove();
        }, 500);
      };
    }
  };

  doneTextContainer.onclick = () => {
    let currentMin = new Date().getMinutes();
    let noteId = ++notesMiddleContainer.children.length;

    if (currentMin < 10) {
      currentMin = "0" + currentMin;
    }

    if (writingField.value.length == 0) {
      return;
    }

    notesMiddleContainer.innerHTML += `
      <div class="note-${noteId} note">
        <p class="note-content-${noteId} note-content">${writingField.value}</p>
        <p class="note-date-${noteId} note-date">${new Date().getHours()}:${currentMin}</p>
      </div>
      `;

    if (notesMiddleContainer.children.length == 1) {
      countOfNotes.innerHTML = "1 Note";
    }

    if (notesMiddleContainer.children.length > 1) {
      countOfNotes.innerHTML = notesMiddleContainer.children.length + " Notes";
    }
  };

  notesMiddleContainer.onclick = (e) => {
    if (!e.target.classList.contains("note-content")) {
      return;
    }

    deleteContainerInnerNewNote.onclick = () => {
      newNoteContainer.classList.add("run-delete-note-animation");
      e.target.closest("div").remove();

      if (notesMiddleContainer.children.length == 0) {
        countOfNotes.innerHTML = "No Notes";
      }

      if (notesMiddleContainer.children.length == 1) {
        countOfNotes.innerHTML = "1 Note";
      }

      if (notesMiddleContainer.children.length > 1) {
        countOfNotes.innerHTML =
          notesMiddleContainer.children.length + " Notes";
      }

      setTimeout(() => {
        newNoteContainer.classList.remove("run-delete-note-animation");
        newNoteContainer.style.display = "none";
      }, 300);
    };

    writingField.value = e.target.innerHTML;
    newNoteContainer.style.display = "block";
    newNoteContainer.classList.add("run-new-note-appear-animation");

    setTimeout(() => {
      newNoteContainer.classList.remove("run-new-note-appear-animation");
    }, 400);
  };

  noteIconContainer.onclick = () => {
    newNoteContainer.style.display = "block";
    newNoteContainer.classList.add("run-new-note-appear-animation");

    setTimeout(() => {
      newNoteContainer.classList.remove("run-new-note-appear-animation");
    }, 400);

    writingField.value = "";
  };

  backToNotesButton.onclick = () => {
    newNoteContainer.classList.add("run-new-note-disappear-animation");

    setTimeout(() => {
      newNoteContainer.style.display = "none";
    }, 350);

    setTimeout(() => {
      newNoteContainer.classList.remove("run-new-note-disappear-animation");
    }, 400);
  };

  circleInnerBedtimeContainer.onclick = () => {
    if (toggleInnerBedtimeContainer.style.background == "rgb(102, 231, 58)") {
      setTimeout(() => {
        circleInnerBedtimeContainer.style.left = "0";
      }, 0);

      setTimeout(() => {
        circleInnerBedtimeContainer.classList.add("run-alarm-off-animation");
      }, 0);

      setTimeout(() => {
        circleInnerBedtimeContainer.classList.remove("run-alarm-off-animation");
      }, 150);

      toggleInnerBedtimeContainer.style.background = "black";
      innerBedtimeOn.style.display = "none";
      bedtimeTextInnerMiddleContainer.style.color = "#aaaaaa";
      timeInnerMiddleContainer.style.color = "#aaaaaa";
      wakeTextInnerMiddleContainer.style.color = "#aaaaaa";
      wakeTimeInnerMiddleContainer.style.color = "#aaaaaa";
      sleepCircle.style.borderColor = "#aaaaaa";
      sleepCircle.style.borderLeftColor = "#353535";
      setTimeout(() => {
        innerBedtimeOff.style.display = "block";
      }, 100);
    } else {
      setTimeout(() => {
        circleInnerBedtimeContainer.style.left = "12px";
      }, 150);

      setTimeout(() => {
        circleInnerBedtimeContainer.classList.add("run-alarm-on-animation");
      }, 0);

      setTimeout(() => {
        circleInnerBedtimeContainer.classList.remove("run-alarm-on-animation");
      }, 150);

      toggleInnerBedtimeContainer.style.background = "#66e73a";
      innerBedtimeOff.style.display = "none";
      innerBedtimeOn.style.display = "block";
      bedtimeTextInnerMiddleContainer.style.color = "#e9c600";
      bedtimeTextInnerMiddleContainer.style.opacity = timeInnerMiddleContainer.style.opacity = wakeTextInnerMiddleContainer.style.opacity = wakeTimeInnerMiddleContainer.style.opacity =
        "1";
      timeInnerMiddleContainer.style.color = "#e9c600";
      wakeTextInnerMiddleContainer.style.color = "#e9c600";
      wakeTimeInnerMiddleContainer.style.color = "#e9c600";
      sleepCircle.style.borderColor = "#e9c600";
      sleepCircle.style.borderLeftColor = "#353535";
    }
  };

  circle1.onclick = () => {
    if (firstToggle.style.background == "rgb(102, 231, 58)") {
      setTimeout(() => {
        circle1.style.left = "0";
      }, 0);

      setTimeout(() => {
        circle1.classList.add("run-alarm-off-animation");
      }, 0);

      setTimeout(() => {
        circle1.classList.remove("run-alarm-off-animation");
      }, 150);

      firstToggle.style.background = "black";
      firstOn.style.display = "none";
      firstAlarmTime.style.color = firstAlarmText.style.color = "#afafaf";
      setTimeout(() => {
        firstOff.style.display = "block";
      }, 100);
    } else {
      setTimeout(() => {
        circle1.style.left = "12px";
      }, 150);

      setTimeout(() => {
        circle1.classList.add("run-alarm-on-animation");
      }, 0);

      setTimeout(() => {
        circle1.classList.remove("run-alarm-on-animation");
      }, 150);

      firstToggle.style.background = "#66e73a";
      firstOff.style.display = "none";
      firstAlarmTime.style.color = firstAlarmText.style.color = "#fafafa";
      firstOn.style.display = "block";
    }
  };

  circle2.onclick = () => {
    if (secondToggle.style.background == "rgb(102, 231, 58)") {
      setTimeout(() => {
        circle2.style.left = "0";
      }, 0);

      setTimeout(() => {
        circle2.classList.add("run-alarm-off-animation");
      }, 0);

      setTimeout(() => {
        circle2.classList.remove("run-alarm-off-animation");
      }, 150);

      secondToggle.style.background = "black";
      secondOn.style.display = "none";
      secondAlarmTime.style.color = secondAlarmText.style.color = "#afafaf";
      setTimeout(() => {
        secondOff.style.display = "block";
      }, 100);
    } else {
      setTimeout(() => {
        circle2.style.left = "12px";
      }, 150);

      setTimeout(() => {
        circle2.classList.add("run-alarm-on-animation");
      }, 0);

      setTimeout(() => {
        circle2.classList.remove("run-alarm-on-animation");
      }, 150);

      secondToggle.style.background = "#66e73a";
      secondOff.style.display = "none";
      secondAlarmTime.style.color = secondAlarmText.style.color = "#fafafa";
      secondOn.style.display = "block";
    }
  };

  circle3.onclick = () => {
    if (thirdToggle.style.background == "rgb(102, 231, 58)") {
      setTimeout(() => {
        circle3.style.left = "0";
      }, 0);

      setTimeout(() => {
        circle3.classList.add("run-alarm-off-animation");
      }, 0);

      setTimeout(() => {
        circle3.classList.remove("run-alarm-off-animation");
      }, 150);

      thirdToggle.style.background = "black";
      thirdOn.style.display = "none";
      thirdAlarmTime.style.color = thirdAlarmText.style.color = "#afafaf";
      setTimeout(() => {
        thirdOff.style.display = "block";
      }, 100);
    } else {
      setTimeout(() => {
        circle3.style.left = "12px";
      }, 150);

      setTimeout(() => {
        circle3.classList.add("run-alarm-on-animation");
      }, 0);

      setTimeout(() => {
        circle3.classList.remove("run-alarm-on-animation");
      }, 150);

      thirdToggle.style.background = "#66e73a";
      thirdOff.style.display = "none";
      thirdAlarmTime.style.color = thirdAlarmText.style.color = "#fafafa";
      thirdOn.style.display = "block";
    }
  };

  circle4.onclick = () => {
    if (fourthToggle.style.background == "rgb(102, 231, 58)") {
      setTimeout(() => {
        circle4.style.left = "0";
      }, 0);

      setTimeout(() => {
        circle4.classList.add("run-alarm-off-animation");
      }, 0);

      setTimeout(() => {
        circle4.classList.remove("run-alarm-off-animation");
      }, 150);

      fourthToggle.style.background = "black";
      fourthOn.style.display = "none";
      fourthAlarmTime.style.color = fourthAlarmText.style.color = "#afafaf";
      setTimeout(() => {
        fourthOff.style.display = "block";
      }, 100);
    } else {
      setTimeout(() => {
        circle4.style.left = "12px";
      }, 150);

      setTimeout(() => {
        circle4.classList.add("run-alarm-on-animation");
      }, 0);

      setTimeout(() => {
        circle4.classList.remove("run-alarm-on-animation");
      }, 150);

      fourthToggle.style.background = "#66e73a";
      fourthOff.style.display = "none";
      fourthAlarmTime.style.color = fourthAlarmText.style.color = "#fafafa";
      fourthOn.style.display = "block";
    }
  };

  circle5.onclick = () => {
    if (fifthToggle.style.background == "rgb(102, 231, 58)") {
      setTimeout(() => {
        circle5.style.left = "0";
      }, 0);

      setTimeout(() => {
        circle5.classList.add("run-alarm-off-animation");
      }, 0);

      setTimeout(() => {
        circle5.classList.remove("run-alarm-off-animation");
      }, 150);

      fifthToggle.style.background = "black";
      fifthOn.style.display = "none";
      fifthAlarmTime.style.color = fifthAlarmText.style.color = "#afafaf";
      setTimeout(() => {
        fifthOff.style.display = "block";
      }, 100);
    } else {
      setTimeout(() => {
        circle5.style.left = "12px";
      }, 150);

      setTimeout(() => {
        circle5.classList.add("run-alarm-on-animation");
      }, 0);

      setTimeout(() => {
        circle5.classList.remove("run-alarm-on-animation");
      }, 150);

      fifthToggle.style.background = "#66e73a";
      fifthOff.style.display = "none";
      fifthAlarmTime.style.color = fifthAlarmText.style.color = "#fafafa";
      fifthOn.style.display = "block";
    }
  };

  circle6.onclick = () => {
    if (sixthToggle.style.background == "rgb(102, 231, 58)") {
      setTimeout(() => {
        circle6.style.left = "0";
      }, 0);

      setTimeout(() => {
        circle6.classList.add("run-alarm-off-animation");
      }, 0);

      setTimeout(() => {
        circle6.classList.remove("run-alarm-off-animation");
      }, 150);

      sixthToggle.style.background = "black";
      sixthOn.style.display = "none";
      sixthAlarmTime.style.color = sixthAlarmText.style.color = "#afafaf";
      setTimeout(() => {
        sixthOff.style.display = "block";
      }, 100);
    } else {
      setTimeout(() => {
        circle6.style.left = "12px";
      }, 150);

      setTimeout(() => {
        circle6.classList.add("run-alarm-on-animation");
      }, 0);

      setTimeout(() => {
        circle6.classList.remove("run-alarm-on-animation");
      }, 150);

      sixthToggle.style.background = "#66e73a";
      sixthOff.style.display = "none";
      sixthAlarmTime.style.color = sixthAlarmText.style.color = "#fafafa";
      sixthOn.style.display = "block";
    }
  };

  window.insertAndOperations = function (str) {
    if (calcInput.innerHTML.length < 4) {
      calcInput.style.fontSize = "45px";
      calcInput.style.top = "42px";
    }
    if (calcInput.innerHTML.length > 4) {
      calcInput.style.fontSize = "40px";
      calcInput.style.top = "50px";
    }

    if (calcInput.innerHTML.length > 7) {
      calcInput.style.fontSize = "35px";
      calcInput.style.top = "50px";
    }

    if (
      calcInput.innerHTML.startsWith("0") &&
      !calcInput.innerHTML.includes(",")
    ) {
      calcInput.innerHTML = calcInput.innerHTML.slice(0, -1);
    }
    calcInput.innerHTML += str;

    if (
      calcInput.innerHTML.startsWith(",") &&
      calcInput.innerHTML.length == 1
    ) {
      calcInput.innerHTML = "0" + calcInput.innerHTML;
    }

    if (
      calcInput.innerHTML.startsWith("-,") &&
      calcInput.innerHTML.length == 2
    ) {
      calcInput.innerHTML = calcInput.innerHTML.replace("-,", "-0,");
    }

    if (
      calcInput.innerHTML.startsWith("-00") &&
      !calcInput.innerHTML.includes(",")
    ) {
      calcInput.innerHTML = calcInput.innerHTML.replace("0", "");
    }

    window.mult = function () {
      if (
        divideButton.style.background == "white" ||
        minusButton.style.background == "white" ||
        plusButton.style.background == "white"
      ) {
        return;
      }
      multButton.style.background =
        multButton.style.background == "white" ? "orange" : "white";
      multButton.style.color =
        multButton.style.color == "orange" ? "white" : "orange";
      window.num = calcInput.innerHTML;
      calcInput.innerHTML = "";
    };

    window.divide = function () {
      if (
        multButton.style.background == "white" ||
        minusButton.style.background == "white" ||
        plusButton.style.background == "white"
      ) {
        return;
      }
      divideButton.style.background =
        divideButton.style.background == "white" ? "orange" : "white";
      divideButton.style.color =
        divideButton.style.color == "orange" ? "white" : "orange";
      window.num = calcInput.innerHTML;
      calcInput.innerHTML = "";
    };

    window.minus = function () {
      if (
        multButton.style.background == "white" ||
        divideButton.style.background == "white" ||
        plusButton.style.background == "white"
      ) {
        return;
      }
      minusButton.style.background =
        minusButton.style.background == "white" ? "orange" : "white";
      minusButton.style.color =
        minusButton.style.color == "orange" ? "white" : "orange";
      window.num = calcInput.innerHTML;
      calcInput.innerHTML = "";
    };

    window.plus = function () {
      if (
        multButton.style.background == "white" ||
        minusButton.style.background == "white" ||
        divideButton.style.background == "white"
      ) {
        return;
      }
      plusButton.style.background =
        plusButton.style.background == "white" ? "orange" : "white";
      plusButton.style.color =
        plusButton.style.color == "orange" ? "white" : "orange";
      window.num = calcInput.innerHTML;
      calcInput.innerHTML = "";
    };

    window.equal = function () {
      if (calcInput.innerHTML.includes(",")) {
        calcInput.innerHTML = calcInput.innerHTML.replace(",", ".");
      }

      if (window.num.includes(",")) {
        window.num = window.num.replace(",", ".");
      }

      if (multButton.style.background == "white") {
        calcInput.innerHTML = window.num * calcInput.innerHTML;
      }

      if (divideButton.style.background == "white") {
        calcInput.innerHTML = window.num / calcInput.innerHTML;
      }

      if (minusButton.style.background == "white") {
        calcInput.innerHTML = window.num - calcInput.innerHTML;
      }

      if (plusButton.style.background == "white") {
        calcInput.innerHTML = Number(window.num) + Number(calcInput.innerHTML);
      }

      multButton.style.background = divideButton.style.background = minusButton.style.background = plusButton.style.background =
        "orange";
      multButton.style.color = divideButton.style.color = minusButton.style.color = plusButton.style.color =
        "white";

      if (calcInput.innerHTML.includes(".")) {
        calcInput.innerHTML = calcInput.innerHTML.replace(".", ",");
      }

      if (
        calcInput.innerHTML == "-Infinity" ||
        calcInput.innerHTML == "Infinity" ||
        calcInput.innerHTML == "NaN"
      ) {
        calcInput.innerHTML = "Error";
      }

      if (calcInput.innerHTML.length < 4) {
        calcInput.style.fontSize = "45px";
        calcInput.style.top = "42px";
      }
      if (calcInput.innerHTML.length > 4) {
        calcInput.style.fontSize = "40px";
        calcInput.style.top = "50px";
      }

      if (calcInput.innerHTML.length > 7) {
        calcInput.style.fontSize = "35px";
        calcInput.style.top = "50px";
      }
    };

    window.sign = function () {
      calcInput.innerHTML = "-" + calcInput.innerHTML;
      if (calcInput.innerHTML.startsWith("--")) {
        calcInput.innerHTML = calcInput.innerHTML.replace("--", "");
      }
    };

    window.percent = function () {
      if (calcInput.innerHTML.includes(",")) {
        calcInput.innerHTML = calcInput.innerHTML.replace(",", ".");
      }
      calcInput.innerHTML /= 100;

      if (calcInput.innerHTML.includes(".")) {
        calcInput.innerHTML = calcInput.innerHTML.replace(".", ",");
      }

      if (calcInput.innerHTML.length < 4) {
        calcInput.style.fontSize = "45px";
        calcInput.style.top = "42px";
      }
      if (calcInput.innerHTML.length > 4) {
        calcInput.style.fontSize = "40px";
        calcInput.style.top = "50px";
      }

      if (
        calcInput.innerHTML == "-Infinity" ||
        calcInput.innerHTML == "Infinity" ||
        calcInput.innerHTML == "NaN"
      ) {
        calcInput.innerHTML = "Error";
      }

      if (calcInput.innerHTML.length > 7) {
        calcInput.style.fontSize = "35px";
        calcInput.style.top = "50px";
      }
    };
  };

  window.clear = function () {
    calcInput.innerHTML = "0";
    calcInput.style.fontSize = "45px";
    calcInput.style.top = "42px";
    multButton.style.background = divideButton.style.background = minusButton.style.background = plusButton.style.background =
      "orange";
    multButton.style.color = divideButton.style.color = minusButton.style.color = plusButton.style.color =
      "white";
    window.num = "";
  };

  let screenPos = -235;

  leftToggle.onclick = () => {
    if (screenPos == 0) return;
    screenPos += 235;
    scr.style.left = screenPos + "px";

    if (screenPos == -235) {
      sixthPanel.style.left = -screenPos + "px";
      simStatus.style.left = "239px";
      currentTimeHTML.style.left = "340px";
      batteryStatus[0].style.left = "446px";
      batteryStatus[1].style.left = "463px";
    }

    if (screenPos == 0) {
      simStatus.style.left = "4px";
      currentTimeHTML.style.left = "105px";
      batteryStatus[0].style.left = "211px";
      batteryStatus[1].style.left = "228px";
      searchInput.classList.add("run-appear-search-input-animation");
      mapsDestinations.classList.add("run-appear-maps-destinations-animation");
      weatherUnderMapsDestinations.classList.add(
        "run-appear-maps-destinations-animation"
      );
      searchInput.style.display = mapsDestinations.style.display = weatherUnderMapsDestinations.style.display =
        "block";
      setTimeout(() => {
        searchInput.classList.remove("run-appear-search-input-animation");
        mapsDestinations.classList.remove(
          "run-appear-maps-destinations-animation"
        );
        weatherUnderMapsDestinations.classList.remove(
          "run-appear-maps-destinations-animation"
        );
      }, 700);
    }
  };

  rightToggle.onclick = () => {
    if (screenPos == -470) {
      return;
    }

    screenPos -= 235;
    scr.style.left = screenPos + "px";

    if (screenPos == -470) {
      sixthPanel.style.left = -screenPos + "px";
      simStatus.style.left = "474px";
      currentTimeHTML.style.left = "575px";
      batteryStatus[0].style.left = "681px";
      batteryStatus[1].style.left = "698px";
    }

    if (screenPos == -235) {
      simStatus.style.left = "239px";
      currentTimeHTML.style.left = "340px";
      batteryStatus[0].style.left = "446px";
      batteryStatus[1].style.left = "463px";

      searchInput.classList.add("run-disappear-search-input-animation");
      mapsDestinations.classList.add(
        "run-disappear-maps-destinations-animation"
      );
      weatherUnderMapsDestinations.classList.add(
        "run-disappear-maps-destinations-animation"
      );
      setTimeout(() => {
        searchInput.style.display = mapsDestinations.style.display = weatherUnderMapsDestinations.style.display =
          "none";
        searchInput.classList.remove("run-disappear-search-input-animation");
        mapsDestinations.classList.remove(
          "run-disappear-maps-destinations-animation"
        );
        weatherUnderMapsDestinations.classList.remove(
          "run-disappear-maps-destinations-animation"
        );
      }, 200);
    }
  };

  calendarIcon.onclick = () => {
    innerCalendar.style.display = "block";
    innerCalendar.classList.add("run-animation");
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    setTimeout(() => {
      innerCalendar.classList.remove("run-animation");
    }, 200);
  };

  iPhoneCalculatorIcon.onclick = () => {
    iPhoneCalculator.style.display = "inline";
  };

  photosIcon.onclick = () => {
    photos.style.display = "block";
    photos.classList.add("run-animation");
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    setTimeout(() => {
      photos.classList.remove("run-animation");
    }, 200);
  };

  stocksIcon.onclick = () => {
    innerStocks.style.display = "block";
    innerStocks.classList.add("run-animation");
    setTimeout(() => {
      innerStocks.classList.remove("run-animation");
    }, 200);
    mainWrapperInnerStocks.classList.add("run-stocks-animation");
    innerStocksBottomContainer.classList.add("run-stocks-text-animation");
  };

  clockIcon.onclick = () => {
    innerClock.style.display = "block";
    innerClock.classList.add("run-animation");
    setTimeout(() => {
      innerClock.classList.remove("run-animation");
    }, 200);
  };

  notesIcon.onclick = () => {
    innerNotes.style.display = "block";
    innerNotes.classList.add("run-animation");
    setTimeout(() => {
      innerNotes.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  videoIcon.onclick = () => {
    innerVideo.style.display = "block";
    innerVideo.classList.add("run-animation");
    setTimeout(() => {
      innerVideo.classList.remove("run-animation");
    }, 200);
  };

  appStoreIcon.onclick = () => {
    innerAppStore.style.display = "block";
    innerAppStore.classList.add("run-animation");
    setTimeout(() => {
      innerAppStore.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  iTunesStoreIcon.onclick = () => {
    innerItunesStore.style.display = "block";
    innerItunesStore.classList.add("run-animation");
    setTimeout(() => {
      innerItunesStore.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  homeIcon.onclick = () => {
    innerHome.style.display = "block";
    innerHome.classList.add("run-animation");
    setTimeout(() => {
      innerHome.classList.remove("run-animation");
    }, 200);
  };

  messageIcon.onclick = () => {
    innerMessage.style.display = "block";
    innerMessage.classList.add("run-animation");
    setTimeout(() => {
      innerMessage.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  musicIcon.onclick = () => {
    innerMusic.style.display = "block";
    innerMusic.classList.add("run-animation");
    setTimeout(() => {
      innerMusic.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  healthIcon.onclick = () => {
    innerHealth.style.display = "block";
    innerHealth.classList.add("run-animation");
    setTimeout(() => {
      innerHealth.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  remindersIcon.onclick = () => {
    innerReminders.style.display = "block";
    innerReminders.classList.add("run-animation");
    setTimeout(() => {
      innerReminders.classList.remove("run-animation");
    }, 200);
  };

  phoneIcon.onclick = () => {
    innerPhone.style.display = "block";
    innerPhoneFavourites.style.display = "block";
    innerPhone.classList.add("run-animation");
    setTimeout(() => {
      innerPhone.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  safariIcon.onclick = () => {
    innerSafari.style.display = "block";
    innerSafari.classList.add("run-animation");
    setTimeout(() => {
      innerSafari.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  mapsIcon.onclick = () => {
    innerMaps.style.display = "block";
    innerMaps.classList.add("run-animation");
    setTimeout(() => {
      innerMaps.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
    setTimeout(() => {
      circleWrapper.classList.add("run-icon-transition");
      circleUnder.classList.add("run-icon-transition");
    }, 1500);

    setTimeout(() => {
      circleWrapper.classList.remove("run-icon-transition");
      circleUnder.classList.remove("run-icon-transition");
      circleWrapper.style.opacity = "1";
      circleUnder.style.opacity = "0.5";
    }, 1700);
  };

  numbersIcon.onclick = () => {
    innerNumbers.style.display = "block";
    innerNumbers.classList.add("run-animation");
    setTimeout(() => {
      innerNumbers.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  itunesUIcon.onclick = () => {
    innerItunesU.style.display = "block";
    innerItunesU.classList.add("run-animation");
    setTimeout(() => {
      innerItunesU.classList.remove("run-animation");
      innerItunesU.style.display = "none";
    }, 300);
  };

  facetimeIcon.onclick = () => {
    innerFacetime.style.display = "block";
    innerFacetime.classList.add("run-animation");
    setTimeout(() => {
      innerFacetime.classList.remove("run-animation");
    }, 200);
  };

  iMovieIcon.onclick = () => {
    innerIMovie.style.display = "block";
    innerIMovie.classList.add("run-animation");
    setTimeout(() => {
      innerIMovie.classList.remove("run-animation");
    }, 200);
  };

  pagesIcon.onclick = () => {
    innerPages.style.display = "block";
    innerPages.classList.add("run-animation");
    setTimeout(() => {
      innerPages.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  keynoteIcon.onclick = () => {
    innerKeynote.style.display = "block";
    innerKeynote.classList.add("run-animation");
    setTimeout(() => {
      innerKeynote.classList.remove("run-animation");
    }, 200);
  };

  watchIcon.onclick = () => {
    innerWatch.style.display = "block";
    innerWatch.classList.add("run-animation");
    setTimeout(() => {
      innerWatch.classList.remove("run-animation");
    }, 200);
  };

  iBooksIcon.onclick = () => {
    innerIBooks.style.display = "block";
    innerIBooks.classList.add("run-animation");
    setTimeout(() => {
      innerIBooks.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  weatherIcon.onclick = () => {
    innerWeather.style.display = "block";
    innerWeather.classList.add("run-animation");
    setTimeout(() => {
      innerWeather.classList.remove("run-animation");
    }, 200);
  };

  weatherUnderMapsDestinations.onclick = () => {
    innerWeather.style.display = "block";
    innerWeather.classList.add("run-animation");
    setTimeout(() => {
      innerWeather.classList.remove("run-animation");
    }, 200);
  };

  sololearnIcon.onclick = () => {
    innerSololearn.style.display = "block";

    innerSololearn.classList.add("run-animation");
    setTimeout(() => {
      innerSololearn.classList.remove("run-animation");
    }, 200);
  };

  learnIconContainer.onclick = () => {
    playContainerInnerSololearn.style.display = "none";
    activityFeedContainerInnerSololearn.style.display = "none";
    codePlaygroundContainer.style.display = "none";
    discussContainer.style.display = "none";
    titleInnerTopContainer.innerHTML = "Learn";

    learnTextInnerBottomContainer.style.color = "#1572b5";
    playTextInnerBottomContainer.style.color = "#989898";
    feedTextInnerBottomContainer.style.color = "#989898";
    codeTextInnerBottomContainer.style.color = "#989898";
    discussTextInnerBottomContainer.style.color = "#989898";
  };

  playIconContainer.onclick = () => {
    titleInnerTopContainer.innerHTML = "Play";
    playContainerInnerSololearn.style.display = "block";
    activityFeedContainerInnerSololearn.style.display = "none";
    codePlaygroundContainer.style.display = "none";
    discussContainer.style.display = "none";

    learnTextInnerBottomContainer.style.color = "#989898";
    playTextInnerBottomContainer.style.color = "#1572b5";
    feedTextInnerBottomContainer.style.color = "#989898";
    codeTextInnerBottomContainer.style.color = "#989898";
    discussTextInnerBottomContainer.style.color = "#989898";
  };

  feedIconContainer.onclick = () => {
    titleInnerTopContainer.innerHTML = "Activity Feed";
    playContainerInnerSololearn.style.display = "none";
    activityFeedContainerInnerSololearn.style.display = "block";
    codePlaygroundContainer.style.display = "none";
    discussContainer.style.display = "none";

    learnTextInnerBottomContainer.style.color = "#989898";
    playTextInnerBottomContainer.style.color = "#989898";
    feedTextInnerBottomContainer.style.color = "#1572b5";
    codeTextInnerBottomContainer.style.color = "#989898";
    discussTextInnerBottomContainer.style.color = "#989898";
  };

  curlyBracketIconContainer.onclick = () => {
    titleInnerTopContainer.innerHTML = "Code Playground";
    playContainerInnerSololearn.style.display = "none";
    activityFeedContainerInnerSololearn.style.display = "none";
    codePlaygroundContainer.style.display = "block";
    discussContainer.style.display = "none";

    learnTextInnerBottomContainer.style.color = "#989898";
    playTextInnerBottomContainer.style.color = "#989898";
    feedTextInnerBottomContainer.style.color = "#989898";
    codeTextInnerBottomContainer.style.color = "#1572b5";
    discussTextInnerBottomContainer.style.color = "#989898";
  };

  discussIconContainer.onclick = () => {
    titleInnerTopContainer.innerHTML = "Q&A Discussions";
    playContainerInnerSololearn.style.display = "none";
    activityFeedContainerInnerSololearn.style.display = "none";
    codePlaygroundContainer.style.display = "none";
    discussContainer.style.display = "block";

    learnTextInnerBottomContainer.style.color = "#989898";
    playTextInnerBottomContainer.style.color = "#989898";
    feedTextInnerBottomContainer.style.color = "#989898";
    codeTextInnerBottomContainer.style.color = "#989898";
    discussTextInnerBottomContainer.style.color = "#1572b5";
  };

  telegramIcon.onclick = () => {
    innerTelegram.style.display = "block";

    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";

    innerTelegram.classList.add("run-animation");
    setTimeout(() => {
      innerTelegram.classList.remove("run-animation");
    }, 200);
  };

  innerTelegramContactsIconContainer.onclick = () => {
    innerTelegram.style.display = "block";
    innerCallsContainerInnerTelegram.style.display = "none";
    innerChatsContainerInnerTelegram.style.display = "none";
    innerTelegramSettings.style.display = "none";

    contactsTextInnerTelegramBottomContainer.style.color = "#607aed";
    callsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    chatsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    settingsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
  };

  innerTelegramCallsContainer.onclick = () => {
    innerCallsContainerInnerTelegram.style.display = "block";
    innerChatsContainerInnerTelegram.style.display = "none";
    innerTelegramSettings.style.display = "none";

    contactsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    callsTextInnerTelegramBottomContainer.style.color = "#607aed";
    chatsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    settingsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
  };

  innerTelegramChatsIconContainer.onclick = () => {
    innerCallsContainerInnerTelegram.style.display = "none";
    innerChatsContainerInnerTelegram.style.display = "block";
    innerTelegramSettings.style.display = "none";

    contactsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    callsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    chatsTextInnerTelegramBottomContainer.style.color = "#607aed";
    settingsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
  };

  innerTelegramSettingsIconContainer.onclick = () => {
    innerCallsContainerInnerTelegram.style.display = "none";
    innerChatsContainerInnerTelegram.style.display = "none";
    innerTelegramSettings.style.display = "block";

    contactsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    callsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    chatsTextInnerTelegramBottomContainer.style.color = "#a8a8a8";
    settingsTextInnerTelegramBottomContainer.style.color = "#607aed";
  };

  cameraIcon.onclick = () => {
    innerCamera.style.display = "block";

    innerCamera.classList.add("run-animation");
    setTimeout(() => {
      innerCamera.classList.remove("run-animation");
    }, 200);
  };

  squareText.onclick = () => {
    if (innerCameraBottomContainerTopWrapper.style.left == "-41px") {
      return;
    }

    innerCameraBottomContainerTopWrapper.classList.add(
      "run-square-text-animation"
    );
    setTimeout(() => {
      buttonInnerCamera.style.background = "white";
      squarePhoto.classList.add("run-camera-blur-animation");
    }, 200);

    setTimeout(() => {
      squarePhoto.classList.remove("run-camera-blur-animation");
    }, 700);

    setTimeout(() => {
      innerCameraBottomContainerTopWrapper.style.left = "-41px";
      innerCameraBottomContainerTopWrapper.classList.remove(
        "run-square-text-animation"
      );
    }, 600);

    setTimeout(() => {
      squareContainer.style.display = "block";
      videoContainer.style.display = "none";

      videoTextInnerCamera.style.color = "white";
      photoText.style.color = "white";
      squareText.style.color = "#0beb00";
    }, 150);
  };

  videoTextInnerCamera.onclick = () => {
    if (innerCameraBottomContainerTopWrapper.style.left == "39px") {
      return;
    }

    innerCameraBottomContainerTopWrapper.classList.add(
      "run-video-text-animation"
    );

    setTimeout(() => {
      buttonInnerCamera.style.background = "red";
      innerVideoContainerPhoto.classList.add("run-camera-blur-animation");
    }, 200);

    setTimeout(() => {
      innerVideoContainerPhoto.classList.remove("run-camera-blur-animation");
    }, 700);

    setTimeout(() => {
      innerCameraBottomContainerTopWrapper.style.left = "39px";
      innerCameraBottomContainerTopWrapper.classList.remove(
        "run-video-text-animation"
      );
    }, 600);

    setTimeout(() => {
      squareContainer.style.display = "none";
      videoContainer.style.display = "block";

      videoTextInnerCamera.style.color = "#0beb00";
      photoText.style.color = "white";
      squareText.style.color = "white";
    }, 150);
  };

  photoText.onclick = () => {
    if (
      innerCameraBottomContainerTopWrapper.style.left == "0px" ||
      innerCameraBottomContainerTopWrapper.style.left == ""
    ) {
      return;
    }

    innerCameraBottomContainerTopWrapper.classList.add(
      "run-photo-text-animation"
    );

    setTimeout(() => {
      buttonInnerCamera.style.background = "white";
      photoInnerCamera.classList.add("run-camera-blur-animation");
    }, 200);

    setTimeout(() => {
      photoInnerCamera.classList.remove("run-camera-blur-animation");
    }, 700);

    setTimeout(() => {
      innerCameraBottomContainerTopWrapper.style.left = "0";
      innerCameraBottomContainerTopWrapper.classList.remove(
        "run-photo-text-animation"
      );
    }, 600);

    setTimeout(() => {
      squareContainer.style.display = "none";
      videoContainer.style.display = "none";

      videoTextInnerCamera.style.color = "white";
      photoText.style.color = "#0beb00";
      squareText.style.color = "white";
    }, 150);
  };

  let extrasIsClicked = false;

  extras.onclick = () => {
    extrasIsClicked = true;
    innerExtras.classList.remove("run-icon-transition-2-slower");
    setTimeout(() => {
      innerExtras.classList.add("run-icon-transition-slower");
    }, 50);

    setTimeout(() => {
      innerExtras.style.display = "block";
    }, 50);

    for (let iconInnerExtras of iconsInnerExtras) {
      iconInnerExtras.classList.add("run-transition-inner-extras");
    }

    for (let text of textsInnerExtras) {
      text.classList.add("run-transition-inner-extras");
    }

    setTimeout(() => {
      for (let iconInnerExtras of iconsInnerExtras) {
        iconInnerExtras.style.transform = "translate(-148px, 85px)";
        iconInnerExtras.style.zIndex = "99999";
        iconInnerExtras.style.width = "32px";
        iconInnerExtras.style.height = "41px";
        iconInnerExtras.style.marginLeft = "15px";
        iconInnerExtras.style.marginTop = "10px";
      }
    }, 0);

    batteryStatus[0].style.display = "none";
    batteryStatus[1].style.display = "none";
    simStatus.style.display = "none";
    currentTimeHTML.style.display = "none";
  };

  tipsIcon.onclick = () => {
    if (extrasIsClicked) {
      innerTips.style.display = "block";
      innerTips.classList.add("run-animation");
      setTimeout(() => {
        innerTips.classList.remove("run-animation");
      }, 200);
    } else {
      return;
    }
  };

  voiceIcon.onclick = () => {
    if (extrasIsClicked) {
      innerVoiceMemos.style.display = "block";
      innerVoiceMemos.classList.add("run-animation");
      setTimeout(() => {
        innerVoiceMemos.classList.remove("run-animation");
      }, 200);
    } else {
      return;
    }
  };

  contactsIcon.onclick = () => {
    if (extrasIsClicked) {
      innerContacts.style.display = "block";
      innerContacts.classList.add("run-animation");
      setTimeout(() => {
        innerContacts.classList.remove("run-animation");
      }, 200);
    } else {
      return;
    }
  };

  findFriendsIcon.onclick = () => {
    if (extrasIsClicked) {
      innerFindFriends.style.display = "block";
      innerFindFriends.classList.add("run-animation");
      setTimeout(() => {
        innerFindFriends.classList.remove("run-animation");
      }, 200);
    } else {
      return;
    }
  };

  findIphoneIcon.onclick = () => {
    if (extrasIsClicked) {
      innerFindIphone.style.display = "block";
      innerFindIphone.classList.add("run-animation");
      setTimeout(() => {
        innerFindIphone.classList.remove("run-animation");
      }, 200);
    } else {
      return;
    }
  };

  readingNowContainer.onclick = () => {
    innerIBooks.style.display = "block";
    innerIBooksLibraryContainer.style.display = "none";
    innerIBooksSearchContainer.style.display = "none";
    readingNowTextInnerIBooks.style.color = "black";
    libraryTextInnerIBooks.style.color = "#a2a2a2";
    searchTextInnerIBooks.style.color = "#a2a2a2";
  };

  libraryContainerInnerIBooks.onclick = () => {
    innerIBooksLibraryContainer.style.display = "block";
    innerIBooksSearchContainer.style.display = "none";
    readingNowTextInnerIBooks.style.color = "#a2a2a2";
    libraryTextInnerIBooks.style.color = "black";
    searchTextInnerIBooks.style.color = "#a2a2a2";
  };

  searchContainerInnerIBooks.onclick = () => {
    innerIBooksSearchContainer.style.display = "block";
    innerIBooksLibraryContainer.style.display = "none";
    readingNowTextInnerIBooks.style.color = "#a2a2a2";
    libraryTextInnerIBooks.style.color = "#a2a2a2";
    searchTextInnerIBooks.style.color = "black";
  };

  let garageBandIsClicked = false;

  garagebandIcon.onclick = () => {
    innerGarageBand.style.display = "block";
    innerGarageBand.classList.add("run-animation");
    setTimeout(() => {
      innerGarageBand.classList.remove("run-animation");
    }, 200);
    iphone.classList.add("run-iphone-rotate-animation");
    iphone.style.transform = "rotate(90deg)";
    setTimeout(() => {
      iphone.classList.remove("run-iphone-rotate-animation");
    }, 500);
    garageBandIsClicked = true;
  };

  browseContainerInnerPages.onclick = () => {
    innerPagesBrowseContainer.style.display = "block";
    browseTextInnerPages.style.color = "#e4a310";
    recentsTextInnerPages.style.color = "#989898";
  };

  recentsContainerInnerPages.onclick = () => {
    innerPagesBrowseContainer.style.display = "none";
    browseTextInnerPages.style.color = "#989898";
    recentsTextInnerPages.style.color = "#e4a310";
  };

  favouritesIconContainerInnerPhone.onclick = () => {
    innerPhoneFavourites.style.display = "block";
    innerPhoneRecents.style.display = "none";
    innerPhoneContacts.style.display = "none";
    innerPhoneKeypad.style.display = "none";
    innerPhoneVoicemail.style.display = "none";
    favouritesTextInnerPhoneBottomContainer.style.color = "#3a45ff";
    recentsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    contactsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    keypadTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    voicemailTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
  };

  recentsIconContainerInnerPhone.onclick = () => {
    innerPhoneFavourites.style.display = "none";
    innerPhoneRecents.style.display = "block";
    innerPhoneContacts.style.display = "none";
    innerPhoneKeypad.style.display = "none";
    innerPhoneVoicemail.style.display = "none";
    favouritesTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    recentsTextInnerPhoneBottomContainer.style.color = "#3a45ff";
    contactsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    keypadTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    voicemailTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
  };

  contactsIconContainerInnerPhone.onclick = () => {
    innerPhoneFavourites.style.display = "none";
    innerPhoneRecents.style.display = "none";
    innerPhoneContacts.style.display = "block";
    innerPhoneKeypad.style.display = "none";
    innerPhoneVoicemail.style.display = "none";
    favouritesTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    recentsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    contactsTextInnerPhoneBottomContainer.style.color = "#3a45ff";
    keypadTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    voicemailTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
  };

  keypadIconContainerInnerPhone.onclick = () => {
    innerPhoneFavourites.style.display = "none";
    innerPhoneRecents.style.display = "none";
    innerPhoneContacts.style.display = "none";
    innerPhoneKeypad.style.display = "block";
    innerPhoneVoicemail.style.display = "none";
    favouritesTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    recentsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    contactsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    keypadTextInnerPhoneBottomContainer.style.color = "#3a45ff";
    voicemailTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
  };

  voicemailIconContainerInnerPhone.onclick = () => {
    innerPhoneFavourites.style.display = "none";
    innerPhoneRecents.style.display = "none";
    innerPhoneContacts.style.display = "none";
    innerPhoneKeypad.style.display = "none";
    innerPhoneVoicemail.style.display = "block";
    favouritesTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    recentsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    contactsTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    keypadTextInnerPhoneBottomContainer.style.color = "#a0a0a0";
    voicemailTextInnerPhoneBottomContainer.style.color = "#3a45ff";
  };

  storeButton.onclick = () => {
    setTimeout(() => {
      innerVideo.style.display = "none";
    }, 170);

    innerItunesStore.style.display = "block";
    innerItunesStore.classList.add("run-animation");
    setTimeout(() => {
      innerItunesStore.classList.remove("run-animation");
    }, 200);
    batteryStatus[0].style.background = "black";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px white, inset -1px 0px white, inset 0px 1px white, inset 0px -1px white";
    simStatus.style.color = "black";
    currentTimeHTML.style.color = "black";
  };

  alarmInnerBottomContainer.onclick = () => {
    innerClockAlarmContainer.style.display = "block";
    innerClockBedtimeContainer.style.display = "none";
    innerClockStopwatchContainer.style.display = "none";
    innerClockTimerContainer.style.display = "none";
    alarmTextInnerBottomContainer.style.color = "#d9a726";
    bedtimeTextInnerBottomContainer.style.color = "white";
    stopwatchTextInnerBottomContainer.style.color = "white";
    timerTextInnerBottomContainer.style.color = "white";
    textWorldClockInnerBottomContainer.style.color = "white";
    worldClockTextInnerClock.innerHTML = "Alarm";
    plusButtonInnerClock.style.opacity = "1";
    editTextInnerClock.style.opacity = "1";
    editTextInnerClock.innerHTML = "Edit";
  };

  worldClockInnerBottomContainer.onclick = () => {
    innerClockAlarmContainer.style.display = "none";
    innerClockBedtimeContainer.style.display = "none";
    innerClockStopwatchContainer.style.display = "none";
    innerClockTimerContainer.style.display = "none";
    alarmTextInnerBottomContainer.style.color = "white";
    bedtimeTextInnerBottomContainer.style.color = "white";
    stopwatchTextInnerBottomContainer.style.color = "white";
    timerTextInnerBottomContainer.style.color = "white";
    textWorldClockInnerBottomContainer.style.color = "#d9a726";
    worldClockTextInnerClock.innerHTML = "World Clock";
    plusButtonInnerClock.style.opacity = "1";
    editTextInnerClock.style.opacity = "1";
    editTextInnerClock.innerHTML = "Edit";
  };

  bedtimeInnerBottomContainer.onclick = () => {
    innerClockBedtimeContainer.style.display = "block";
    innerClockStopwatchContainer.style.display = "none";
    alarmTextInnerBottomContainer.style.color = "white";
    innerClockTimerContainer.style.display = "none";
    bedtimeTextInnerBottomContainer.style.color = "#d9a726";
    stopwatchTextInnerBottomContainer.style.color = "white";
    timerTextInnerBottomContainer.style.color = "white";
    textWorldClockInnerBottomContainer.style.color = "white";
    worldClockTextInnerClock.innerHTML = "Bedtime";
    plusButtonInnerClock.style.opacity = "0";
    editTextInnerClock.style.opacity = "1";
    editTextInnerClock.innerHTML = "Options";
  };

  stopwatchInnerBottomContainer.onclick = () => {
    innerClockStopwatchContainer.style.display = "block";
    innerClockTimerContainer.style.display = "none";
    innerClockAlarmContainer.style.display = "none";
    innerClockBedtimeContainer.style.display = "none";
    alarmTextInnerBottomContainer.style.color = "white";
    bedtimeTextInnerBottomContainer.style.color = "white";
    stopwatchTextInnerBottomContainer.style.color = "#d9a726";
    timerTextInnerBottomContainer.style.color = "white";
    textWorldClockInnerBottomContainer.style.color = "white";
    worldClockTextInnerClock.innerHTML = "Stopwatch";
    plusButtonInnerClock.style.opacity = editTextInnerClock.style.opacity = "0";
  };

  timerInnerBottomContainer.onclick = () => {
    innerClockStopwatchContainer.style.display = "none";
    innerClockAlarmContainer.style.display = "none";
    innerClockBedtimeContainer.style.display = "none";
    innerClockTimerContainer.style.display = "block";
    alarmTextInnerBottomContainer.style.color = "white";
    bedtimeTextInnerBottomContainer.style.color = "white";
    stopwatchTextInnerBottomContainer.style.color = "white";
    timerTextInnerBottomContainer.style.color = "#d9a726";
    textWorldClockInnerBottomContainer.style.color = "white";
    worldClockTextInnerClock.innerHTML = "Timer";
    plusButtonInnerClock.style.opacity = editTextInnerClock.style.opacity = "0";
  };

  cameraRollAlbum.onclick = () => {
    cameraRoll.classList.add("run-camera-roll-appear-animation");
    cameraRoll.style.display = "block";
    setTimeout(() => {
      cameraRoll.classList.remove("run-camera-roll-appear-animation");
    }, 500);
  };

  favouritesAlbum.onclick = () => {
    favourites.classList.add("run-favourites-appear-animation");
    favourites.style.display = "block";
    setTimeout(() => {
      favourites.classList.remove("run-favourites-appear-animation");
    }, 500);
  };

  backToAlbumsButton.onclick = () => {
    cameraRoll.classList.add("run-camera-roll-disappear-animation");
    setTimeout(() => {
      cameraRoll.style.display = "none";
    }, 300);

    setTimeout(() => {
      cameraRoll.classList.remove("run-camera-roll-disappear-animation");
    }, 400);
  };

  let isClicked = false;

  bottomRemindersContainer.onclick = () => {
    if (isClicked) {
      return;
    }
    bottomRemindersContainer.classList.add("run-reminders-appear-animation");
    bottomRemindersContainer.style.top = "53px";
    setTimeout(() => {
      bottomRemindersContainer.classList.remove(
        "run-reminders-appear-animation"
      );
    }, 300);
    isClicked = true;
  };

  scheduledContainer.onclick = () => {
    if (isClicked) {
      bottomRemindersContainer.classList.add(
        "run-reminders-disappear-animation"
      );
      bottomRemindersContainer.style.top = "345px";
      setTimeout(() => {
        bottomRemindersContainer.classList.remove(
          "run-reminders-disappear-animation"
        );
      }, 300);
      isClicked = false;
    } else {
      return;
    }
  };

  backToAlbumsButtonInnerFavourites.onclick = () => {
    favourites.classList.add("run-favourites-disappear-animation");
    setTimeout(() => {
      favourites.style.display = "none";
    }, 300);
    setTimeout(() => {
      favourites.classList.remove("run-favourites-disappear-animation");
    }, 400);
  };

  iPhoneCalculator.onclick = (e) => {
    if (
      e.target.classList.contains("numbers") ||
      e.target.classList.contains("comma")
    ) {
      cleanerButton.innerHTML = "C";
    }

    if (e.target.classList.contains("cleaner")) {
      cleanerButton.innerHTML = "AC";
    }
  };

  for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
      innerImageTopContainer.style.display = innerImageBottomContainer.style.display =
        "block";

      let imgStyles = getComputedStyle(images[i]);

      openedImage.classList.add("run-appear-animation");
      innerImageBottomContainer.classList.add(
        "run-bottom-container-appear-animation"
      );

      openedImage.style.cssText = `
        display: block;
        background: ${imgStyles.backgroundImage};
        background-size: ${imgStyles.backgroundSize};
        `;

      if (i == 11) {
        imageHeartIcon.src =
          "https://image.flaticon.com/icons/svg/1077/1077086.svg";
      } else {
        imageHeartIcon.src =
          "https://image.flaticon.com/icons/svg/1077/1077035.svg";
      }

      setTimeout(() => {
        openedImage.classList.remove("run-appear-animation");
        innerImageBottomContainer.classList.remove(
          "run-bottom-container-appear-animation"
        );
      }, 150);

      backArrowInnerImage.onclick = () => {
        innerImageTopContainer.style.display = "none";

        openedImage.classList.add("run-disappear-animation");
        innerImageBottomContainer.classList.add(
          "run-bottom-container-disappear-animation"
        );

        setTimeout(() => {
          openedImage.style.display = innerImageBottomContainer.style.display =
            "none";
        }, 100);

        setTimeout(() => {
          openedImage.classList.remove("run-disappear-animation");
          innerImageBottomContainer.classList.remove(
            "run-bottom-container-disappear-animation"
          );
        }, 150);
      };
    };
  }

  innerFavouritesImage.onclick = () => {
    innerFavouritesImageTopContainer.style.display = innerFavouritesImageBottomContainer.style.display =
      "block";

    let imgStyles = getComputedStyle(innerFavouritesImage);

    openedImageInnerFavourites.classList.add("run-appear-animation");
    innerFavouritesImageBottomContainer.classList.add(
      "run-bottom-container-appear-animation"
    );

    openedImageInnerFavourites.style.cssText = `
      display: block;
      background: ${imgStyles.backgroundImage};
      background-size: ${imgStyles.backgroundSize};
      `;

    setTimeout(() => {
      openedImageInnerFavourites.classList.remove("run-appear-animation");
      innerFavouritesImageBottomContainer.classList.remove(
        "run-bottom-container-appear-animation"
      );
    }, 150);

    backArrowInnerFavouriteImage.onclick = () => {
      innerFavouritesImageTopContainer.style.display = "none";

      openedImageInnerFavourites.classList.add("run-disappear-animation");
      innerFavouritesImageBottomContainer.classList.add(
        "run-bottom-container-disappear-animation"
      );

      setTimeout(() => {
        openedImageInnerFavourites.style.display = innerFavouritesImageBottomContainer.style.display =
          "none";
      }, 100);

      setTimeout(() => {
        openedImageInnerFavourites.classList.remove("run-disappear-animation");
        innerFavouritesImageBottomContainer.classList.remove(
          "run-bottom-container-disappear-animation"
        );
      }, 150);
    };
  };

  homeButton.onclick = () => {
    offContainer.classList.add("run-appear-start-container-animation");

    if (offContainer.style.display == "none") {
      startContainer.classList.add("run-start-container-transform-animation");
      passcodeContainer.style.display = "block";
      passcodeContainer.classList.add(
        "run-appear-passcode-container-animation"
      );
    }

    if (startContainer.style.display == "none") {
      passcodeContainer.style.display = "none";
      passcodeContainer.classList.remove(
        "run-appear-passcode-container-animation"
      );
    }

    setTimeout(() => {
      offContainer.style.display = "none";
    }, 500);
    if (
      iPhoneCalculator.style.display == "inline" ||
      photos.style.display == "block" ||
      innerCalendar.style.display == "block" ||
      innerClock.style.display == "block" ||
      innerNotes.style.display == "block" ||
      innerStocks.style.display == "block" ||
      innerVideo.style.display == "block" ||
      innerAppStore.style.display == "block" ||
      innerItunesStore.style.display == "block" ||
      innerHome.style.display == "block" ||
      innerMessage.style.display == "block" ||
      innerMusic.style.display == "block" ||
      innerHealth.style.display == "block" ||
      innerReminders.style.display == "block" ||
      innerPhone.style.display == "block" ||
      innerSafari.style.display == "block" ||
      innerMaps.style.display == "block" ||
      innerNumbers.style.display == "block" ||
      innerFacetime.style.display == "block" ||
      innerIMovie.style.display == "block" ||
      innerPages.style.display == "block" ||
      innerKeynote.style.display == "block" ||
      innerGarageBand.style.display == "block" ||
      innerWatch.style.display == "block" ||
      innerIBooks.style.display == "block" ||
      innerSololearn.style.display == "block" ||
      innerTelegram.style.display == "block" ||
      innerCamera.style.display == "block" ||
      innerWeather.style.display == "block"
    ) {
      scr.classList.add("run-animation");

      setTimeout(() => {
        scr.classList.remove("run-animation");
      }, 200);
    }

    if (innerExtras.style.display == "block") {
      if (innerTips.style.display == "block") {
        innerTips.classList.add("run-icon-transition-2");

        setTimeout(() => {
          innerTips.style.display = "none";
          innerTips.classList.remove("run-icon-transition-2");
        }, 200);
        return;
      }

      if (innerVoiceMemos.style.display == "block") {
        innerVoiceMemos.classList.add("run-icon-transition-2");

        setTimeout(() => {
          innerVoiceMemos.style.display = "none";
          innerVoiceMemos.classList.remove("run-icon-transition-2");
        }, 200);
        return;
      }

      if (innerContacts.style.display == "block") {
        innerContacts.classList.add("run-icon-transition-2");

        setTimeout(() => {
          innerContacts.style.display = "none";
          innerContacts.classList.remove("run-icon-transition-2");
        }, 200);
        return;
      }

      if (innerFindFriends.style.display == "block") {
        innerFindFriends.classList.add("run-icon-transition-2");

        setTimeout(() => {
          innerFindFriends.style.display = "none";
          innerFindFriends.classList.remove("run-icon-transition-2");
        }, 200);
        return;
      }

      if (innerFindIphone.style.display == "block") {
        innerFindIphone.classList.add("run-icon-transition-2");

        setTimeout(() => {
          innerFindIphone.style.display = "none";
          innerFindIphone.classList.remove("run-icon-transition-2");
        }, 200);
        return;
      }

      innerExtras.classList.remove("run-icon-transition-slower");
      setTimeout(() => {
        innerExtras.classList.add("run-icon-transition-2-slower");
      }, 50);

      setTimeout(() => {
        innerExtras.style.display = "none";
      }, 550);
    }

    extrasIsClicked = false;

    iPhoneCalculator.style.display = "none";
    photos.style.display = "none";
    innerCalendar.style.display = "none";
    innerClock.style.display = "none";
    innerNotes.style.display = "none";
    innerStocks.style.display = "none";
    innerVideo.style.display = "none";
    innerAppStore.style.display = "none";
    innerItunesStore.style.display = "none";
    innerHome.style.display = "none";
    innerMessage.style.display = "none";
    innerMusic.style.display = "none";
    innerHealth.style.display = "none";
    innerReminders.style.display = "none";
    innerPhone.style.display = "none";
    innerSafari.style.display = "none";
    innerMaps.style.display = "none";
    innerNumbers.style.display = "none";
    innerFacetime.style.display = "none";
    innerIMovie.style.display = "none";
    innerPages.style.display = "none";
    innerKeynote.style.display = "none";
    innerGarageBand.style.display = "none";
    innerWatch.style.display = "none";
    innerIBooks.style.display = "none";
    innerSololearn.style.display = "none";
    innerTelegram.style.display = "none";
    innerCamera.style.display = "none";
    innerWeather.style.display = "none";

    batteryStatus[0].style.display = "inline";
    batteryStatus[1].style.display = "inline";
    simStatus.style.display = "inline";
    currentTimeHTML.style.display = "inline";

    for (let iconInnerExtras of iconsInnerExtras) {
      iconInnerExtras.classList.remove("run-transition-inner-extras");
    }

    for (let text of textsInnerExtras) {
      text.classList.remove("run-transition-inner-extras");
    }

    for (let iconInnerExtras of iconsInnerExtras) {
      iconInnerExtras.classList.add("run-icon-transition");
      iconInnerExtras.style.transform = "none";
      iconInnerExtras.style.zIndex = "0";
      iconInnerExtras.style.width = "9px";
      iconInnerExtras.style.height = "9px";
      iconInnerExtras.style.margin = "0";
    }

    mainWrapperInnerStocks.classList.remove("run-stocks-animation");
    innerStocksBottomContainer.classList.remove("run-stocks-text-animation");

    if (garageBandIsClicked) {
      iphone.classList.add("run-iphone-rotate-animation-2");
      iphone.style.transform = "rotate(0deg)";
      setTimeout(() => {
        iphone.classList.remove("run-iphone-rotate-animation-2");
        garageBandIsClicked = false;
      }, 500);
    }

    simStatus.style.color = "white";
    currentTimeHTML.style.color = "white";

    batteryStatus[0].style.background = "white";
    batteryStatus[0].style.boxShadow =
      "inset 1px 0px black, inset -1px 0px black, inset 0px 1px black, inset 0px -1px black, inset 1px 1px black, inset -1px -1px black";

    sixthPanel.style.display = seventhPanel.style.display = eighthPanel.style.display = ninethPanel.style.display =
      "";
  };

  function correctHours(hours) {
    switch (hours) {
      case 24:
        hours = 0;
        break;
      case 25:
        hours = 1;
        break;
      case 26:
        hours = 2;
        break;
      case 27:
        hours = 3;
        break;
      case 28:
        hours = 4;
        break;
      case 29:
        hours = 5;
        break;
      case 30:
        hours = 6;
        break;
      case 31:
        hours = 7;
        break;
      case 32:
        hours = 8;
        break;
      case -10:
        hours = 14;
        break;
      case -9:
        hours = 15;
        break;
      case -8:
        hours = 16;
        break;
      case -7:
        hours = 17;
        break;
      case -6:
        hours = 18;
        break;
      case -5:
        hours = 19;
        break;
      case -4:
        hours = 20;
        break;
      case -3:
        hours = 21;
        break;
      case -2:
        hours = 22;
        break;
      case -1:
        hours = 23;
        break;
    }

    return hours;
  }

  let setTime = () => {
    let now = new Date();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();

    let hoursUTC = new Date().getUTCHours();
    let minutesUTC = new Date().getUTCMinutes();

    let tokyoHr = correctHours(hoursUTC + 9);
    let singaporeHr = correctHours(hoursUTC + 8);
    let moscowHr = correctHours(hoursUTC + 3);
    let hawaiiHr = correctHours(hoursUTC - 10);

    if (currentHours < 10) {
      currentHours = "0" + currentHours;
    }

    if (minutesUTC < 10) {
      minutesUTC = "0" + minutesUTC;
    }

    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }

    let currentTime = `${currentHours}:${currentMinutes}`;

    currentTimeHTML.textContent = currentTime;

    timeInnerStartContainer.textContent = currentTime;

    for (let time of timeInnerExtras) {
      time.textContent = currentTime;
    }

    currentTimeInnerClock.textContent = `${new Date().getHours()}:${currentMinutes}`;

    let timeUTC = `${hoursUTC}:${minutesUTC}`;
    timeOfTheSecondCity.textContent = timeUTC;

    let moscowTime = `${moscowHr}:${minutesUTC}`;
    timeOfTheThirdCity.textContent = moscowTime;

    let singaporeTime = `${singaporeHr}:${minutesUTC}`;
    timeOfTheFourthCity.textContent = singaporeTime;

    let hawaiiTime = `${hawaiiHr}:${minutesUTC}`;
    timeOfTheFifthCity.textContent = hawaiiTime;

    let tokyoTime = `${tokyoHr}:${minutesUTC}`;
    timeOfThesixthCity.textContent = tokyoTime;
  };

  setInterval(setTime);

  let calendar = document.querySelector("#calendar");

  function createCalendar(elem, year, month) {
    let mon = month;
    let d = new Date(year, mon);

    let table = "<table><tr></tr><tr>";

    let lastDayOfMonth = 32 - new Date(year, month, 32).getDate();

    let firstDayOfMonth = d.getDay();

    switch (new Date().getDay()) {
      case 0:
        dateInnerStartContainer.innerHTML = "Sunday, " + new Date().getDate();
        break;
      case 1:
        dateInnerStartContainer.innerHTML = "Monday, " + new Date().getDate();
        break;
      case 2:
        dateInnerStartContainer.innerHTML = "Tuesday, " + new Date().getDate();
        break;
      case 3:
        dateInnerStartContainer.innerHTML =
          "Wendesday, " + new Date().getDate();
        break;
      case 4:
        dateInnerStartContainer.innerHTML = "Thursday, " + new Date().getDate();
        break;
      case 5:
        dateInnerStartContainer.innerHTML = "Friday, " + new Date().getDate();
        break;
      case 6:
        dateInnerStartContainer.innerHTML = "Saturday, " + new Date().getDate();
        break;
    }

    switch (d.getDay()) {
      case 1:
        currentMonthInCalendar.style.left = "10px";
        currentMonthInCalendar.style.width = "225px";
        break;
      case 2:
        currentMonthInCalendar.style.left = "40px";
        currentMonthInCalendar.style.width = "195px";
        break;
      case 3:
        currentMonthInCalendar.style.left = "75px";
        currentMonthInCalendar.style.width = "160px";
        break;
      case 4:
        currentMonthInCalendar.style.left = "110px";
        currentMonthInCalendar.style.width = "125px";
        break;
      case 5:
        currentMonthInCalendar.style.left = "140px";
        currentMonthInCalendar.style.width = "95px";
        break;
      case 6:
        currentMonthInCalendar.style.left = "175px";
        currentMonthInCalendar.style.width = "60px";
        break;
      case 0:
        currentMonthInCalendar.style.left = "205px";
        currentMonthInCalendar.style.width = "30px";
        break;
    }

    switch (d.getMonth()) {
      case 0:
        dateInnerStartContainer.innerHTML += " January";
        currentMonthInCalendar.innerHTML = "Jan";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 1:
        dateInnerStartContainer.innerHTML += " February";
        currentMonthInCalendar.innerHTML = "Feb";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 2:
        dateInnerStartContainer.innerHTML += " March";
        currentMonthInCalendar.innerHTML = "Mar";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 3:
        dateInnerStartContainer.innerHTML += " April";
        currentMonthInCalendar.innerHTML = "Apr";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 4:
        dateInnerStartContainer.innerHTML += " May";
        currentMonthInCalendar.innerHTML = "May";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 5:
        dateInnerStartContainer.innerHTML += " June";
        currentMonthInCalendar.innerHTML = "Jun";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 6:
        dateInnerStartContainer.innerHTML += " July";
        currentMonthInCalendar.innerHTML = "Jul";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 7:
        dateInnerStartContainer.innerHTML += " August";
        currentMonthInCalendar.innerHTML = "Aug";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 8:
        dateInnerStartContainer.innerHTML += " September";
        currentMonthInCalendar.innerHTML = "Sep";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 9:
        dateInnerStartContainer.innerHTML += " October";
        currentMonthInCalendar.innerHTML = "Oct";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 10:
        dateInnerStartContainer.innerHTML += " November";
        currentMonthInCalendar.innerHTML = "Nov";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
      case 11:
        dateInnerStartContainer.innerHTML += " December";
        currentMonthInCalendar.innerHTML = "Dec";
        currentMonthInCalendar.innerHTML += '<hr id="hr-inner-current-month"/>';
        break;
    }

    for (let i = 0; i < getDay(d); i++) {
      table += "<td></td>";
    }

    let id = 1;

    while (d.getMonth() == mon) {
      if (d.getDay() == 6 || d.getDay() == 0) {
        table += '<td style="color: gray;">' + d.getDate() + "</td>";
      } else {
        table += "<td>" + d.getDate() + "</td>";
      }

      if (getDay(d) % 7 == 6) {
        if (id >= 5) {
          table += `</tr><tr>`;
        } else {
          table += `<hr id='hr-${id++}'></tr><tr>`;
        }
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += "<td></td>";
      }
    }

    if (lastDayOfMonth == 31 && firstDayOfMonth == 0) {
      table += '<hr id="hr-6"></tr></table>';
    }

    if (lastDayOfMonth == 31 && firstDayOfMonth == 6) {
      table += '<hr id="hr-5"></tr></table>';
    }

    if (lastDayOfMonth == 30 && firstDayOfMonth == 0) {
      table += '<hr id="hr-5"></tr></table>';
    }

    elem.innerHTML += table;

    let hr4 = document.querySelector("#hr-4");

    if (
      (lastDayOfMonth == 31 && firstDayOfMonth == 3) ||
      (lastDayOfMonth == 30 && firstDayOfMonth == 4) ||
      (lastDayOfMonth == 29 && firstDayOfMonth == 5) ||
      (lastDayOfMonth == 28 && firstDayOfMonth == 6)
    ) {
      hr4.style.width = "165px";
    }

    if (
      (lastDayOfMonth == 29 && firstDayOfMonth == 6) ||
      (lastDayOfMonth == 28 && firstDayOfMonth == 0) ||
      (lastDayOfMonth == 31 && firstDayOfMonth == 4) ||
      (lastDayOfMonth == 30 && firstDayOfMonth == 5)
    ) {
      hr4.style.width = "200px";
    }

    if (
      (lastDayOfMonth == 31 && firstDayOfMonth == 2) ||
      (lastDayOfMonth == 30 && firstDayOfMonth == 3) ||
      (lastDayOfMonth == 29 && firstDayOfMonth == 4) ||
      (lastDayOfMonth == 28 && firstDayOfMonth == 5)
    ) {
      hr4.style.width = "135px";
    }

    if (
      (lastDayOfMonth == 30 && firstDayOfMonth == 1) ||
      (lastDayOfMonth == 29 && firstDayOfMonth == 2) ||
      (lastDayOfMonth == 28 && firstDayOfMonth == 3)
    ) {
      hr4.style.width = "70px";
    }

    if (
      (lastDayOfMonth == 31 && firstDayOfMonth == 1) ||
      (lastDayOfMonth == 30 && firstDayOfMonth == 2) ||
      (lastDayOfMonth == 29 && firstDayOfMonth == 3) ||
      (lastDayOfMonth == 28 && firstDayOfMonth == 4)
    ) {
      hr4.style.width = "100px";
    }

    if (lastDayOfMonth == 28 && firstDayOfMonth == 1) {
      hr4.style.width = "0";
    }

    if (lastDayOfMonth == 28 && firstDayOfMonth == 2) {
      hr4.style.width = "40px";
    }

    let allTd = document.querySelectorAll("td");
    allTd = Array.from(allTd);

    allTd.map((item) => {
      if (item.textContent == new Date().getDate()) {
        item.style.background = "red";
        item.style.color = "white";
        item.style.borderRadius = "50px";
      }
    });
  }

  function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }

  createCalendar(calendar, new Date().getFullYear(), new Date().getMonth());
};

//function insert() {
//  calcInput
//}
