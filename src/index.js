const messageInput = document.querySelector("#message-input");
const encryptedInput = document.querySelector("#message-encrypted");

const encryptButton = document.querySelector("#encrypt-button");
const messageClearButton = document.querySelector("#message-clear-button");
const encryptedClearButton = document.querySelector("#encrypt-clear-button");

const encrypt = (message) => (e) => {
  const splitMessage = message.value.split("");
  const encryptedArray = [];

  for (let i = 0; i < splitMessage.length; i++) {
    let element = splitMessage[i];
    switch (element) {
      case "a":
        element = "ai";
        break;
      case "e":
        element = "enter";
      default:
        break;
      case "i":
        element = "imes";
        break;
      case "o":
        element = "ober";
        break;
      case "u":
        element = "ufat";
        break;
    }
    encryptedArray.push(element);
  }
  const encryptedMessage = encryptedArray.join().replace(/,/g, "");
  encryptedInput.textContent = encryptedMessage;
};

const clear = (field) => (e) => {
  field.textContent = "";
};

encryptButton.addEventListener("click", encrypt(messageInput));
messageClearButton.addEventListener("click", clear(messageInput));
encryptedClearButton.addEventListener("click", clear(encryptedInput));
