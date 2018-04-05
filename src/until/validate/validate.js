/* 合法url*/
export function validateURL(textval) {
	const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
	return urlregex.test(textval);
}
/**
 * validate tel
 * @param telphone number
 * @returns {boolean}
 */
export function validateTel(tel) {
	let pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
	return pattern.test(tel);
}
/** 
 * @desc 正则验证
 * @param {str} 需要验证的字符串
 * @param {type} {字符串} 需要验证的类型
 */
export function checkType(str, type) {
	switch (type) {
		case 'email':
			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
		case 'phone':
			return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
		case 'tel':
			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
		case 'number':
			return /^[0-9]$/.test(str);
		case 'english':
			return /^[a-zA-Z]+$/.test(str);
		case 'text':
			return /^\w+$/.test(str);
		case 'chinese':
			return /^[\u4E00-\u9FA5]+$/.test(str);
		case 'lower':
			return /^[a-z]+$/.test(str);
		case 'upper':
			return /^[A-Z]+$/.test(str);
		case 'post':
			return /^[1-9][0-9]{5}$/.test(str);
		case 'QQ':
			return /^[1-9][0-9]{4,9}$/.test(str);
		default:
			return false;
	}
}