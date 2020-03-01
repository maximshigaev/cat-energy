const beforeBtn = document.querySelectorAll(`.example__button`)[0];
const afterBtn = document.querySelectorAll(`.example__button`)[1];
const line = document.querySelector(`.example__line`);
const pin = document.querySelector(`.example__pin`);
const afterPic = document.querySelector(`.example__picture--after`);
const beforePic = document.querySelector(`.example__picture--before`);
const afterImg = document.querySelector(`.example__picture--after .example__image`);
const beforeImg = document.querySelector(`.example__picture--before .example__image`);
const MOBILE_PIN_SHIFT = 6;

const toggleImage = (shownPic, hiddenPic, shownPicBtn, hiddenPicBtn) => {
	hiddenPic.style.display = `none`;
	shownPic.style.display = `block`;
	shownPicBtn.disabled = true;
	hiddenPicBtn.disabled = false;
	pin.style.left = (shownPic.classList.contains(`example__picture--before`))
		? MOBILE_PIN_SHIFT + `px`
		: MOBILE_PIN_SHIFT + pin.clientWidth + `px`;
};

beforeBtn.addEventListener(`touchstart`, () => toggleImage(beforePic, afterPic, beforeBtn, afterBtn));
afterBtn.addEventListener(`touchstart`, () => toggleImage(afterPic, beforePic, afterBtn, beforeBtn));

const lineX = line.getBoundingClientRect().left;
const halfPinWidth = pin.clientWidth / 2;
const leftBorder = lineX - halfPinWidth;
const rightBorder = line.getBoundingClientRect().right - halfPinWidth;
let wasDragged = false;

const moveAt = (pageX, shiftX) => {
	pin.style.left = pageX - shiftX - lineX + `px`;
};

const shiftImages = (pic, img, dragged, moveEvt) => {
	if (!dragged) {
		img.style.marginLeft = img.offsetLeft + `px`;
		pic.style.left = pic.offsetLeft + `px`;
	} else {
		img.style.marginLeft = parseInt(img.style.marginLeft, 10) - moveEvt.movementX + `px`;
		pic.style.left = parseInt(pic.style.left, 10) + moveEvt.movementX + `px`;
	}
};

const mouseDownHandler = (downEvt) => {
	const shift = downEvt.clientX - downEvt.target.getBoundingClientRect().left;

	const mouseMoveHandler = (moveEvt) => {
		const relativeMoveX = moveEvt.pageX - shift;

		if (relativeMoveX >= leftBorder && relativeMoveX <= rightBorder) {
			moveAt(moveEvt.pageX, shift);

			if (!wasDragged) {
				shiftImages(beforePic, beforeImg, false);
				shiftImages(afterPic, afterImg, false);
				wasDragged = true;
			} else {
				shiftImages(beforePic, beforeImg, true, moveEvt);
				shiftImages(afterPic, afterImg, true, moveEvt);
			}
		}
	};

	const mouseUpHandler = () => {
		document.removeEventListener(`mousemove`, mouseMoveHandler);
		document.removeEventListener(`mousemup`, mouseUpHandler);
	};

	document.addEventListener(`mousemove`, mouseMoveHandler);
	document.addEventListener(`mouseup`, mouseUpHandler);
};

pin.addEventListener(`mousedown`, (downEvt) => mouseDownHandler(downEvt));
