module.exports = function toReadable(numb) {
    simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    compound = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function getUnderHundred(numb) {

        if (numb <= 10) {
            return simple[numb].toString();
        }
        if (numb > 10 && numb < 20) {
            return simple[numb].toString();
        }
        if (numb >= 20 && numb < 100) {
            return (compound[Math.floor(numb / 10)] + (numb % 10 == 0 ? '' : ' ' + simple[numb % 10]));
        }

    }

    if (numb < 100) {
        return getUnderHundred(numb);
    }

    if (numb > 99) {
        return ((simple[Math.floor(numb / 100)] + ' hundred') + (numb % 100 == 0 ? '' : ' ' + getUnderHundred(numb % 100)));
    }

}
