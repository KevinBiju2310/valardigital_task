// faqs
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    faqItems.forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".icon").textContent = "+";
    });
    if (!isActive) {
      item.classList.add("active");
      item.querySelector(".icon").textContent = "-";
    }
  });
});

// blends
document.querySelectorAll(".blend-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const footer = toggle.parentElement;
    const isActive = footer.classList.contains("active");
    footer.classList.toggle("active");
    toggle.querySelector(".icon").textContent = isActive ? "+" : "-";
  });
});


// offer
const btn = document.getElementById("offerBtn");
const badge = document.getElementById("bundleBadge");
const radios = document.querySelectorAll('input[name="offer"]');

const options = {
  option1: {
    oldPrice: "£43.00",
    newPrice: "£20.40",
    badge: "x1",
  },
  option2: {
    oldPrice: "£86.00",
    newPrice: "£36.80",
    badge: "x2",
  },
  option3: {
    oldPrice: "£129.00",
    newPrice: "£51.00",
    badge: "x3",
  },
};

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selected = radio.value;
    badge.textContent = options[selected].badge;
    btn.innerHTML = `add to cart | <span class="old-price">${options[selected].oldPrice}</span> <span class="new-price-offer">${options[selected].newPrice}</span>`;
  });
});
