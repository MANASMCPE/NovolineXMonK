// script.js
const INSTAGRAM_URL = 'https://www.instagram.com/scripterzmonk?vrfl=MTJocGd2MnZkc2UweA==';

let redirectTimeout = null;
let countdownInterval = null;

function startBuyRedirect(btn) {
  if (redirectTimeout) return;

  const toast = document.getElementById('toast');
  const timerEl = document.getElementById('timer');
  if (!toast || !timerEl) return;

  let seconds = 10;
  timerEl.textContent = seconds;
  toast.classList.add('show');

  countdownInterval = setInterval(() => {
    seconds--;
    timerEl.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }, 1000);

  redirectTimeout = setTimeout(() => {
    clearInterval(countdownInterval);
    countdownInterval = null;
    redirectTimeout = null;
    toast.classList.remove('show');
    redirectInstagram();
  }, 10000);
}

function redirectInstagram() {
  if (redirectTimeout) {
    clearTimeout(redirectTimeout);
    redirectTimeout = null;
  }
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  const toast = document.getElementById('toast');
  if (toast) toast.classList.remove('show');
  window.location.href = INSTAGRAM_URL;
}