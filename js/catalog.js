let selc = function () {
	let selectHeader = document.querySelectorAll('.catalog__control-header');
	let selectItem = document.querySelectorAll('.catalog__control-item');
	selectHeader.forEach(item => {
		item.addEventListener('click', selectTooggle);
	});
	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose);
	});
	function selectTooggle() {
		this.parentElement.classList.toggle('active');
	}
	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.catalog__control'),
			currentText = select.querySelector('.catalog__control-current');
		currentText.innerText = text;
		select.classList.remove('active');
	}
};

selc();