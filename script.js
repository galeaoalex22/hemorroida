const ticker = document.querySelector('.ticker');
const track = document.querySelector('.ticker-track');
const toggle = document.querySelector('.ticker-toggle');

if (track) {
  [...track.children].forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}

if (ticker && toggle) {
  toggle.addEventListener('click', () => {
    const paused = ticker.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Retomar carrossel' : 'Pausar carrossel');
    toggle.textContent = paused ? 'Continuar' : 'Pausar';
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const promoMinutes = document.querySelector('#promo-minutes');
const promoSeconds = document.querySelector('#promo-seconds');
const promoCountdown = document.querySelector('.promo-countdown');
let promoTimeLeft = 90;

const updatePromoCountdown = () => {
  const minutes = Math.floor(promoTimeLeft / 60);
  const seconds = promoTimeLeft % 60;

  if (promoMinutes && promoSeconds) {
    promoMinutes.textContent = String(minutes).padStart(2, '0');
    promoSeconds.textContent = String(seconds).padStart(2, '0');
  }

  if (promoCountdown) {
    promoCountdown.setAttribute('aria-label', `${minutes} minuto${minutes === 1 ? '' : 's'} e ${seconds} segundo${seconds === 1 ? '' : 's'} restantes`);
  }

  if (promoTimeLeft > 0) {
    promoTimeLeft -= 1;
  }
};

updatePromoCountdown();
window.setInterval(updatePromoCountdown, 1000);
