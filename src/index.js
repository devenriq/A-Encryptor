const messageInput = document.querySelector("#message-input");
const encryptedInput = document.querySelector("#message-encrypted");

const encryptButton = document.querySelector("#encrypt-button");
const decryptButton = document.querySelector("#decrypt-button");
const messageClearButton = document.querySelector("#message-clear-button");
const encryptedClearButton = document.querySelector("#encrypt-clear-button");

const encrypt = (message) => (e) => {
  const splitMessage = message.value.toLowerCase().split("");
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
  encryptedInput.value = encryptedMessage;
};

const decrypt = (message) => (e) => {
  const splitMessage = message.value
    .toLowerCase()
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  messageInput.value = splitMessage;
};

const clearButton = (field) => (e) => {
  field.value = "";
};

function clear(field) {
  field.value = "";
}

encryptButton.addEventListener("click", encrypt(messageInput));
decryptButton.addEventListener("click", decrypt(encryptedInput));
messageClearButton.addEventListener("click", clearButton(messageInput));
encryptedClearButton.addEventListener("click", clearButton(encryptedInput));
