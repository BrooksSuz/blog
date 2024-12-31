document.addEventListener('DOMContentLoaded', function () {
	const footerYear = document.getElementById('footer-year');
	if (footerYear) {
		footerYear.textContent = new Date().getFullYear();
	}
});
