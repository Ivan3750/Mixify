// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {

		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');
		
		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};
		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Если товара нет в корзине

			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

			
			
			
			
			// Сбрасываем счетчик добавленного товара на "1"
		}
		card.querySelector('[data-counter]').innerText = '1';
		
		
		
		// Отображение статуса корзины Пустая / Полная
		toggleCartStatus();
		const TOKEN = "6358787782:AAHCl354oyqsCZ92rdv6BSjOIlOvp0KZS-E";
		const CHAT_ID = "-1001914918019";
		const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
		
		
		
		
		document.getElementById("form").addEventListener("submit", function (e) {
		e.preventDefault();
		console.log("yes");
		let message = `<b>Замовлення з сайту</b>\n`;
		message += `<b>Відправник: </b> ${this.name.value}\n`;
		message += `<b>Електрона адреса: </b> ${this.email.value}\n`;
		message += `<b>Адреса: </b> ${this.adressa.value}\n`;  
		
		
		axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: "html",
		text: productInfo
		});
		axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: "html",
		text: message
		});
		});
		
		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
		
	}
});


