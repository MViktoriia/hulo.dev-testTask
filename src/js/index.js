const videos = [
  {
    id: '1',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
  {
    id: '2',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
  {
    id: '3',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
  {
    id: '4',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
  {
    id: '5',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
  {
    id: '6',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
  {
    id: '7',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
  {
    id: '8',
    preview:
      'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=350&q=100',
    url: 'https://player.vimeo.com/video/824804225',
  },
];

console.log(videos);

const sliderWrapper = document.querySelector('.swiper-wrapper');
const modal = document.querySelector('.modal');
const contentEl = document.querySelector('.content');
const closeBtn = document.querySelector('.close');
const paginationRef = document.querySelector('.pagination');

const slidesRef = videos
  .map(
    video =>
      `<div class="swiper-slide">
      <a href=${video.url} class="slide-wrapper"><img
          src=${video.preview}
          width="350"
          height="350"
        ></img></a>
    </div>`
  )
  .join('');

sliderWrapper.insertAdjacentHTML('afterbegin', slidesRef);

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 4,
  speed: 400,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const circlesRef = videos
  .map(
    video =>
      `<a href=${video.url} class="pagination-link"><div class="pagination-circle"
  ></div></a>`
  )
  .join('');

paginationRef.insertAdjacentHTML('beforeend', circlesRef);

const circles = document.querySelectorAll('.pagination-link');

circles.forEach(circle => {
  circle.addEventListener('click', e => {
    e.preventDefault();
    contentEl.innerHTML = '';

    const url = e.currentTarget.href;

    const videoPlayerEl = document.createElement('div');
    videoPlayerEl.setAttribute('id', 'myVideo');
    contentEl.insertAdjacentElement('afterbegin', videoPlayerEl);

    const options = {
      url: url,
    };

    const videoPlayer = new Vimeo.Player('myVideo', options);

    videoPlayer.on('play', function () {
      console.log('Played the video');
    });
    modal.classList.remove('is-close');
  });
});

const slideRef = document.querySelectorAll('.slide-wrapper');

slideRef.forEach(slide => {
  slide.addEventListener('click', e => {
    e.preventDefault();
    const url = e.currentTarget.href;

    const videoPlayerEl = document.createElement('div');
    videoPlayerEl.setAttribute('id', 'myVideo');
    contentEl.insertAdjacentElement('afterbegin', videoPlayerEl);

    const options = {
      url: url,
      width: 800,
      fautoplay: true,
    };

    const videoPlayer = new Vimeo.Player('myVideo', options);

    videoPlayer.on('play', function () {
      console.log('Played the video');
    });
    modal.classList.remove('is-close');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('is-close');
  contentEl.innerHTML = '';
});
