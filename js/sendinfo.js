/* const TOKEN = "6358787782:AAHCl354oyqsCZ92rdv6BSjOIlOvp0KZS-E";
const CHAT_ID = "-1001914918019";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;




document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("yes");
    let message = `<b>Замовлення з сайту</b>\n`;
    message += `<b>Відправник: </b> ${this.userName.value}\n`;
     message += `<b>Електрона адреса: </b> ${this.email.value}\n`;
     message += `<b>Товар: </b> ${this.userTel.value}\n`;  
       message += `<b>Товар</b> ${this.cart-wrapper.value} `;
    
       console.log(message)
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    });
});
 */

const TOKEN = "6358787782:AAHCl354oyqsCZ92rdv6BSjOIlOvp0KZS-E";
const CHAT_ID = "-1001914918019";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;




document.getElementById("form-support").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("yes");
    let message = `<b>Потрібна допомога!!!</b>\n`;
    message += `<b>Відправник: </b> ${this.same-s.value} ${this.surname-s.value} \n`;
     message += `<b>Електрона адреса: </b> ${this.email-s.value}\n`;
     message += `<b>Питання: </b> ${this.text-s.value}\n`;  
    
       console.log(message)
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    });
});