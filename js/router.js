const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	alert(window.location.pathname)
	window.history.pushState({}, "", window.location.pathname + event.target.href);
	handleLocation();
}

const routes = {
	"/cases": "cases.html",
	"/cases/1": "1.html",
	"/cases/2": "2.html",
	"/cases/3": "3.html",
	"/cases/4": "4.html",
	"/cases/5": "5.html",
	"/cases/6": "6.html",
	"/cases/7": "7.html",
	"/cases/8": "8.html"
}
const handleLocation = async () => {
	let path = window.location.href.replace(window.location.origin + '/', '');
	let routePath = path.substring(path.indexOf('/'));
	const route = routes[routePath];
	if (route !== undefined) {
		const html = await fetch(route).then(data => data.text());
		document.getElementById('root').innerHTML = html;
	}

}
window.onpopstate = handleLocation;
window.route = route;

handleLocation();