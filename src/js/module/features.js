'use strict';

(function () {
  var feature = document.querySelector('.feature');

  if (!feature) {
    return;
  }

  var removeClass = function (array, className) {
    array.forEach(function (item) {
      if (item.classList.contains(className)) {
        item.classList.remove(className);
      }
    });
  };

  var showFeature = function (evt) {
    var featurePayment = feature.querySelector('.feature__item-payment');
    var featureSecurity = feature.querySelector('.feature__item-security');
    var feature1C = feature.querySelector('.feature__item-1c');
    var featureItems = feature.querySelectorAll('.feature__item');
    var featureLinks = feature.querySelectorAll('.feature__link-item');

    evt.preventDefault();

    if (evt.target.classList.contains('feature__link-payment')) {
      removeClass(featureItems, 'feature__item--active');
      removeClass(featureLinks, 'feature__link-item--active');
      featurePayment.classList.add('feature__item--active');
      evt.target.classList.add('feature__link-item--active');
    } else if (evt.target.classList.contains('feature__link-security')) {
      removeClass(featureItems, 'feature__item--active');
      removeClass(featureLinks, 'feature__link-item--active');
      featureSecurity.classList.add('feature__item--active');
      evt.target.classList.add('feature__link-item--active');
    } else if (evt.target.classList.contains('feature__link-1c')) {
      removeClass(featureItems, 'feature__item--active');
      removeClass(featureLinks, 'feature__link-item--active');
      feature1C.classList.add('feature__item--active');
      evt.target.classList.add('feature__link-item--active');
    }
  };

  var onClickFeatureList = function (evt) {
    showFeature(evt);
  };

  feature.addEventListener('click', onClickFeatureList);

})();
