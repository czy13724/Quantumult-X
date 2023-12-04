// JavaScript Document
function showNumberWithAnimation(i, j, Num) {
	var numberCell = $('#number-cell-' + i + "-" + j);
	numberCell.css('background-color', getNumberBackgroundColor(Num));
	numberCell.append('<img src="picture/' + Num + '.jpg" class="img" >');
	numberCell.animate({
		width: cellSideLength,
		height: cellSideLength,
		top: getPosTop(i, j),
		left: getPosLeft(i, j)
	}, 50);
}

function moveWithAnimation(fromX, fromY, toX, toY) {
	var numberCell = $("#number-cell-" + fromX + "-" + fromY);
	numberCell.animate({
		top: getPosTop(toX, toY),
		left: getPosLeft(toX, toY)
	}, 200);
}
