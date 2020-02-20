module.exports = function toReadable(number) {
    let numb = number;
    simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    hudred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function getTens(numb) {

        if (numb <= 10) {
            return simple[numb].toString();
        }
        if (numb > 10 && numb < 20) {
            return simple[numb].toString();
        }
        if (numb >= 20 && numb < 100) {
            return (hudred[Math.floor(numb / 10)] + (numb % 10 == 0 ? '' : ' ' + simple[numb % 10]));
        }

    }

    if (numb < 100) {
        return getTens(numb);
    }

    if (numb > 99) {
        return ((simple[Math.floor(numb / 100)] + ' hundred') + (numb % 100 == 0 ? '' : ' ' + getTens(numb % 100)));
    }

}
