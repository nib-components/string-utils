exports.unquote = function(str) {
	return str.replace(/(^[\'\"])|([\'\"]$)/,'');
};