const closeBtn = document.querySelector(`.header__closeButton`);
const openBtn = document.querySelector(`.header__openButton`);
const menu = document.querySelector(`.header__list`);

menu.classList.add(`closedMenu`);

closeBtn.addEventListener(`click`, function() {
	menu.classList.add(`closedMenu`);
	menu.classList.remove(`openedMenu`);
});

openBtn.addEventListener(`click`, function() {
	menu.classList.add(`openedMenu`);
	menu.classList.remove(`closedMenu`);
});
