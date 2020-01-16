'use strict';

(function () {
  var howWeWorkList = document.querySelector('.how-we-work__list');

  if (!howWeWorkList) {
    return;
  };

  var openDescription = function (evt) {
    evt.preventDefault();
    var target = evt.target;

    if (target.classList.contains('how-we-work__link')) {
      var parentNode = target.parentNode.parentNode;
      parentNode.classList.add('how-we-work__item--active');
    }
  };

  var onClickHowWeWorkList = function (evt) {
    openDescription(evt);
  };

  howWeWorkList.addEventListener('click', onClickHowWeWorkList);
})();


