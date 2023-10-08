// import axios from 'axios';

const TOKEN = "6358787782:AAHCl354oyqsCZ92rdv6BSjOIlOvp0KZS-E";
const CHAT_ID = "-1001914918019";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("yes");
    console.log(${this.email.value})
    let message = `<b>Замовлення з сайту</b>\n`;
    message += `<b>Відправник: </b> ${this.name.value}\n`;
    message += `<b>Електрона адреса: </b> ${this.email.value}\n`;
    message += `<b>Товар: </b> ${this.product.value}\n`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    });
});
