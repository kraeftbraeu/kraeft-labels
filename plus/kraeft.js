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

function stackZutaten() {
	const spans = $(".zutaten span");
	const newWidth = 210;
	spans.each(index => {
		var span = $(spans[index]);
		var oldFontSize = span.css('font-size');
		oldFontSize = oldFontSize.substr(0, oldFontSize.length - 2);
		var oldWidth = span.width();
		var newFontSize = oldFontSize * newWidth / oldWidth;
		span.css('font-size', newFontSize + "px");
	});
}