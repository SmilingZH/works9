const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // 分页
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // 左右箭头
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});
// 二维码
document.addEventListener('DOMContentLoaded', function () {
  var qq = document.querySelector('.qq');
  var weixin = document.querySelector('.weixin');
  var bilibili = document.querySelector('.bilibili');
  var erweimaqq = document.querySelector('.ewm-qq');
  var erweimaweixin = document.querySelector('.ewm-weixin');
  var erweimabilibili = document.querySelector('.ewm-bilibili');

  qq.addEventListener('mouseover', function () {
    erweimaqq.style.display = 'flex';
  });
  weixin.addEventListener('mouseover', function () {
    erweimaweixin.style.display = 'flex';
  });
  bilibili.addEventListener('mouseover', function () {
    erweimabilibili.style.display = 'flex';
  });

  qq.addEventListener('mouseout', function () {
    erweimaqq.style.display = 'none';
  });
  weixin.addEventListener('mouseout', function () {
    erweimaweixin.style.display = 'none';
  });
  bilibili.addEventListener('mouseout', function () {
    erweimabilibili.style.display = 'none';
  });
});
