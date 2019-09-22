function copy(callback, m, n) {
	var original = $("#picture");

	for(var i = 1; i < m; i++) {
		var clone = original.clone();
		clone.id = "original" + i;
		original.parent().append(clone);
	}

	for(var i = 0; i < n; i++) {
		var clone = original.clone();
		clone.id = "changed" + i;
		callback(clone);
		original.parent().append(clone);
	}
}