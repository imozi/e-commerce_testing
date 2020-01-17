'use strict';

(function () {
  var howWeWorkList = document.querySelector('.how-we-work__list');
  var WIDTH_MAX = 1024;

  if (!howWeWorkList) {
    return;
  }

  var openDescription = function (evt) {
    evt.preventDefault();
    var target = evt.target;

    if (target.classList.contains('how-we-work__link')) {
      var parentNode = target.parentNode.parentNode;
      var body = document.querySelector('body');

      parentNode.classList.add('how-we-work__item--active');
      body.classList.add('fixed');
    }
  };

  var closeDescription = function (evt) {
    evt.preventDefault();
    var target = evt.target;

    if (target.classList.contains('how-we-work__description-btn')) {
      var parentNode = target.parentNode.parentNode.parentNode;
      var body = document.querySelector('body');

      parentNode.classList.remove('how-we-work__item--active');
      body.classList.remove('fixed');
    }
  };

  var openDescriptionMobile = function (evt) {
    var sizeScreen = window.screen.width;
    var target = evt.target;

    if ((target.classList.contains('how-we-work__title-text') || target.classList.contains('how-we-work__title')) && sizeScreen < WIDTH_MAX) {

      var parentNode = null;
      var itemsList = howWeWorkList.querySelectorAll('.how-we-work__item');

      if (target.classList.contains('how-we-work__title-text')) {
        parentNode = target.parentNode.parentNode;
      } else {
        parentNode = target.parentNode;
      }


      if (parentNode.classList.contains('how-we-work__item--active')) {
        parentNode.classList.remove('how-we-work__item--active');
      } else {
        itemsList.forEach(function (item) {
          if (item.classList.contains('how-we-work__item--active')) {
            item.classList.remove('how-we-work__item--active');
          }
        });
        parentNode.classList.add('how-we-work__item--active');
      }
    }
  };

  var onClickHowWeWorkListLink = function (evt) {
    openDescription(evt);
  };

  var onClickHowWeWorkListBtn = function (evt) {
    closeDescription(evt);
  };

  var onClickHowWeWorkListItem = function (evt) {
    openDescriptionMobile(evt);
  };


  howWeWorkList.addEventListener('click', onClickHowWeWorkListLink);
  howWeWorkList.addEventListener('click', onClickHowWeWorkListBtn);
  howWeWorkList.addEventListener('click', onClickHowWeWorkListItem);
})();