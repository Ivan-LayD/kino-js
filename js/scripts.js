const SchemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 800;
let totalPrice = 0;
SchemeSvg.addEventListener("click", (event) => {
if (!event.target.classList.contains("booked")) {
  event.target.classList.toggle("active");
  let TotalSeats = SchemeSvg.querySelectorAll('.active').length;
  totalPrice = TotalSeats * cost;
  totalPriceTag.textContent = totalPrice;

}
});