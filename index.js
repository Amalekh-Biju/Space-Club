const clear = (el) => {
	const dad = el.parentElement;
	for (i of dad.children) {
		i.className = '';
	}
};
const navElements = ['home', 'likes', 'search', 'user'];
const colors = [
	'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
	'hsl(318, 57%, 50%)',
	'hsl(41, 81%, 51%)',
	'hsl(189, 81%, 37%)',
];
document.querySelectorAll('.container ul li').forEach(
	(e, i) =>
		(e.onclick = function () {
			clear(this);
			this.classList.toggle('active');
			e.classList.add(navElements[i]);
			document.body.style.background = colors[i];
		})
);
