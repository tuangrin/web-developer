const nav = document.querySelector('nav');
const menu = document.querySelector('#menu')

const count = document.querySelectorAll('.count-number');

let tabHeader = document.getElementsByClassName('tab-list')[0];
let tabBody = document.getElementsByClassName('content-body')[0];
let tabsPane = tabHeader.getElementsByTagName('div');

// -------------------------
window.addEventListener('scroll', logonav);
window.addEventListener('scroll', activecolor);

function logonav() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('black-nav');
    nav.classList.remove('white-nav');
  } else {
    nav.classList.add('white-nav');
    nav.classList.remove('black-nav');
  }
}

function activecolor(){
     if (window.scrollY > nav.offsetHeight) {
          menu.classList.add('black-nav');
          menu.classList.remove('white-nav');
        } else {
          menu.classList.add('white-nav');
          menu.classList.remove('black-nav');
        }
}

// --------------------------------------

count.forEach((counter) => {
  counter.innerText = '0';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const start = +counter.innerText;
    const increment = target / 400; //อยากให้เพิ่มขึ้นทีละเท่าไหร่
    if (start < target) {
      counter.innerText = `${Math.ceil(start + increment)}`;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// --------------------------------------

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener('click', function () {
    tabHeader.getElementsByClassName('active')[0].classList.remove('active');
    tabsPane[i].classList.add('active');

    tabBody.getElementsByClassName('active')[0].classList.remove('active');
    tabBody.getElementsByTagName('div')[i].classList.add('active');
  });
}
