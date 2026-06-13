// MENU MOBILE

const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ANIMAÇÃO AO SCROLL

const elements = document.querySelectorAll(
  ".card, .modalidade-card, .academia, .unidade"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

elements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});

// CONTADOR ANIMADO

const counters = document.querySelectorAll(".numero");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});