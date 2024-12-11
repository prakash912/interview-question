const tabs = document.querySelectorAll('.tab');
const planTitle = document.getElementById('plan-title');
const planPrice = document.getElementById('plan-price');
const planDetails = document.getElementById('plan-details');
const responsiveIcon = document.getElementById('responsive-icon');
const confirmation = document.getElementById('confirmation');

const plans = {
  basic: {
    title: 'BASIC',
    price: '$50',
    details: 'Up to 50 icons + one color version/theme per month',
    responsiveIcon: '<i class="fa-solid fa-xmark"></i> Converted to responsive components',
  },
  standard: {
    title: 'STANDARD',
    price: '$120',
    details: 'Up to 100 creative & professional icons + two color versions/themes per month',
    responsiveIcon: '<i class="fa-solid fa-check"></i> Converted to responsive components',
  },
  premium: {
    title: 'PREMIUM',
    price: '$200',
    details: 'Unlimited icons + all color versions/themes per month',
    responsiveIcon: '<i class="fa-solid fa-check"></i> Converted to responsive components',
  },
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    const selectedPlan = plans[tab.dataset.plan];
    planTitle.textContent = selectedPlan.title;
    planPrice.textContent = selectedPlan.price;
    planDetails.textContent = selectedPlan.details;
    responsiveIcon.innerHTML = selectedPlan.responsiveIcon;
  });
});

document.querySelector('.add-to-cart').addEventListener('click', () => {
  confirmation.classList.add('show');
  setTimeout(() => {
    confirmation.classList.remove('show');
  }, 2000);
});
