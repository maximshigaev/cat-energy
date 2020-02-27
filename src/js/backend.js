// import regeneratorRuntime from "regenerator-runtime";
// import { showModal, successModal, disableScreen, enableScreen, windowEscDownHandler } from './feedback.js';

// const showSpinner = () => {
// 	const spinner = document.createElement(`div`);

// 	spinner.classList.add(`spinner`);
// 	spinner.innerHTML = `<div class="spinnerContent"><div></div><div></div><div></div><div></div><div></div>
// 		<div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
// 	document.body.append(spinner);
// 	disableScreen();
// };

// const showServerFailure = () => {
// 	const serverFailure = document.createElement(`div`);

// 	serverFailure.classList.add(`serverFailure`);
// 	serverFailure.innerHTML = `<h2 class="modal__title">Произошла ошибка!</h2><p class="modal__content">
// 		Пожалуйста, повторите отправку формы</p><button class="button modal__button" title="Ок">Ок</button>`;
// 	document.body.append(serverFailure);
// 	disableScreen();
// 	window.addEventListener(`keydown`, windowEscDownHandler);

// 	serverFailure.querySelector(`.modal__button`).addEventListener(`click`, () => {
// 		enableScreen(serverFailure);
// 		serverFailure.remove();
// 		window.removeEventListener(`keydown`, windowEscDownHandler);
// 	});
// };

// async function submitForm(formData) {
// 	const URL = `/api/posts`;
// 	const spinner = document.querySelector(`.spinner`);

// 	try {
// 		const response = await fetch(URL, {
// 			method: `POST`,
// 			headers: {
// 				'Content-Type': `multipart/form-data`
// 			},
// 			body: formData
// 		});

// 		spinner.remove();

// 		(response.ok)
// 			? showModal(successModal)
// 			: showServerFailure();
// 	} catch (err) {
// 		spinner.remove();
// 		showServerFailure();
// 	}
// }

// export { submitForm, showSpinner };
