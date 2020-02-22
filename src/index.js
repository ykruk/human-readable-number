module.exports = function toReadable (number) {
	const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const elevens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const splitNumber = number.toString().split('');
	let output = '';
	switch (splitNumber.length) {
	 	case 3:
			output += digits[splitNumber[0]] + ' hundred';
			if(splitNumber[1] === '1') {
				output += ' ' + elevens[splitNumber[2]];
			} else if(splitNumber[1] === '0') {
                output += '';
                if(splitNumber[2] !== '0') {
                    output += ' ' + digits[splitNumber[2]];
                }
            } else {
                output += ' ' + tens[splitNumber[1]];
                if(splitNumber[2] !== '0') {
                    output += ' ' + digits[splitNumber[2]];
                }
            }
			break;
		case 2:
			if(splitNumber[0] === '1') {
				output += elevens[splitNumber[1]];
			} else {
                output += tens[splitNumber[0]];
                if(splitNumber[1] !== '0') {
				    output += ' ' + digits[splitNumber[1]];
			    }
            }
			break;
	 	case 1:
		 	if(splitNumber[0] === '0') {
				output += 'zero';
			} else {
				output += digits[splitNumber[0]];
			}
			break;
		default:
			output += '';
			break;
  }
  return output;
}
