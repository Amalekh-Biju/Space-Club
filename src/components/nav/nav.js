const clear = (el) => {
	const dad = el.parentElement;
	for (let i of dad.children) {
		i.className = '';
	}
};
const navElements = ['home', 'likes', 'search', 'user'];

document.querySelectorAll('.container ul li').forEach(
	(e, i) =>
		(e.onclick = function () {
			clear(this);
			this.classList.toggle('active');
			e.classList.add(navElements[i]);
			
		})
);
