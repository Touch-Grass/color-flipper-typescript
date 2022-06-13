"use strict";
const btnMain = document.getElementById('button__flip__color--center');
const btnAcid = document.getElementById('button__acid__trip');
let repeater;
btnMain === null || btnMain === void 0 ? void 0 : btnMain.addEventListener('click', () => { document.body.style.background = getColor(); });
btnAcid === null || btnAcid === void 0 ? void 0 : btnAcid.addEventListener('click', () => {
    document.body.style.background = getColor();
});
function getColor() {
    return ("#" +
        Math.random()
            .toString(16)
            .slice(2, 8));
}
btnAcid.onmouseover = function () { startAcidTrip(); };
function startAcidTrip() {
    console.log(`acid trip started`);
    setTimeout(startAcidTrip, 100);
}
//# sourceMappingURL=index.js.map