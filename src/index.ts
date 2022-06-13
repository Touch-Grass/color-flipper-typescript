const btnMain = document.getElementById('button__flip__color--center');
const btnAcid = document.getElementById('button__acid__trip');
let repeater: any;

btnMain?.addEventListener('click', () => {document.body.style.background = getColor(); });

btnAcid?.addEventListener('click', () => {
    document.body.style.background = getColor();
});

function getColor() {
    return (
        "#" +
        Math.random() // ! Generates a hex code.
        .toString(16) //Converts # to hexadecimal
        .slice(2, 8) //Gets rid of 0 and .
        );
    }
    
    btnAcid!.onmouseover = function () { startAcidTrip(); };
    function startAcidTrip() {
        document.body.style.background = getColor(); 
        setTimeout(startAcidTrip,100);
    }