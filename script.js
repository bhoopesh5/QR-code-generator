const btn = document.getElementById("generateBtn");
const input = document.getElementById("textInput");
const qrContainer = document.getElementById("qrcode");

btn.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) {
    alert("⚠ Please enter text or a URL!");
    return;
  }

  // Clear old QR code before generating new one
  qrContainer.innerHTML = "";

  // ✅ Generate new QR code
  new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});