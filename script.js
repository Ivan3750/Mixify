// import axios from 'axios';

/*  const TOKEN = "6358787782:AAHCl354oyqsCZ92rdv6BSjOIlOvp0KZS-E";
const CHAT_ID = "-1001914918019";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("smart-basket__form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("yes");
    let message = `<b>Замовлення з сайту</b>\n`;
    message += `<b>Відправник: </b> ${this.userName.value}\n`;
    message += `<b>Електрона адреса: </b> ${this.userEmail.value}\n`;
    message += `<b>Товар: </b> ${this.userTel.value}\n`; 
    console.log(message)
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    });
});

 */


/* document.addEventListener("DOMContentLoaded", function () {
    const TOKEN = "6358787782:AAHCl354oyqsCZ92rdv6BSjOIlOvp0KZS-E";
    const CHAT_ID = "-1001914918019";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    document.getElementById("smart-basket__form").addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("yes");
        let message = `<b>Замовлення з сайту</b>\n`;
        message += `<b>Відправник: </b> ${this.userName.value}\n`;
        console.log(message)
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message
        });
    });
});
 */
/* 
const formElement = document.createElement("form");
formElement.id = "smart-basket__form";
// Тут можна налаштувати інші атрибути і структуру елемента
// Наприклад, додати input елементи, кнопки, і так далі
document.body.appendChild(formElement);

 */
/* const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const CHAT_ID = "-1001914918019";
const URI_API = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";

// Replace the following code in your existing PHP code where you want to send the data to Telegram

if (!$mail->send()) {
    console.log('attantion');
} else {
    // Send the form data to Telegram
    sendToTelegram();
    console.log('successmsgs');
}

// Add this function to send the form data to Telegram
function sendToTelegram() {
    const formData = new FormData();  // Create a new FormData object to hold the form data

    // Add your form data to the FormData object
    formData.append('chat_id', CHAT_ID);
    formData.append('text', 'New form submission received:');
    formData.append('text', 'Name: ' + name);
    formData.append('text', 'Phone: ' + tel);
    formData.append('text', 'Email: ' + email);
    formData.append('text', 'Agreement: ' + agreement);
    formData.append('text', 'Final Price: ' + finalPrice);

    // Iterate over your productArr and add the product information to the FormData object
    for (const product of productArr) {
        formData.append('text', 'Product Name: ' + product.productName);
        formData.append('text', 'Product Size: ' + product.productSize);
        formData.append('text', 'Product ID: ' + product.productId);
        formData.append('text', 'Product Price: ' + product.productPrice);
        formData.append('text', 'Product Quantity: ' + product.productQuantity);
        formData.append('text', 'Product Common Price: ' + product.productPriceCommon);
    }

    // Send the data to Telegram using a fetch request
    fetch(URI_API, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            console.error('Failed to send data to Telegram');
        }
    })
    .catch(error => {
        console.error('Error sending data to Telegram:', error);
    });
}
 */
/* 
a = document.getElementsByClassName("smart-basket__form")
console.log(a) */