"use strict";

const section = document.querySelector(`section`);
const toggle = document.querySelector(`.toggle`);

toggle.addEventListener('click', () => {
  section.classList.toggle('dark');
});