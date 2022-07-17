
// You should implement your task here.

module.exports = function towelSort(arr) {
	if (arr !== undefined) {
		for (let index = 0; index < arr.length; index++) {
			if (index % 2 === 1) {
				arr[index].reverse();
			}
		}
		let res = [];
		arr.forEach(function (val) {
			val.forEach(function (v) {
				res.push(v);
			})
		})
		return res;
	} else {
		return [];
	}
}
