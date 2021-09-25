var lastToolTipChosen = null;
function createToolTip(el, text) {
   lastToolTipChosen = el;
   el.opacity = 1;
   el.style.opacity = 1;
   el.setAttribute("data-tooltip",text);
   // newDiv.style.left = x + "px";
   // newDiv.style.top = y + "px";
}
function hideToolTip() {
  lastToolTipChosen.removeAttribute("data-tooltip");
}