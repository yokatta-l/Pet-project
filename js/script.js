const menu = document.querySelector('.header__nav')
const menuBtn = document.querySelector(".burger-menu");

const body = document.body

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

menu.querySelectorAll(".header__link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  });
});
}


// //////////////////////////////////////////////

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// //////////////////////////////////////////////
const modal = document.getElementById('my-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-my-modal-btn');
const modalContent = modal.querySelector('.modal__box');

function openModal() {
  modal.classList.add('open');
  document.body.classList.add('lock');
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('lock')
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

modalContent.addEventListener("click", (e) => {
  e._clickedInsideModal = true;
});

modal.addEventListener("click", (e) => {
  if (e._clickedInsideModal) return;
  closeModal();
});