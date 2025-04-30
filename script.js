// Theme Script
let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('light')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (let i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'default.css'
		document.getElementsByClassName('cf-turnstile')[0].setAttribute('data-theme', 'light');
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css'
		document.getElementsByClassName('cf-turnstile')[0].setAttribute('data-theme', 'dark');
	}
	
	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
		document.getElementsByClassName('cf-turnstile')[0].setAttribute('data-theme', 'dark');
	}
	
	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
		document.getElementsByClassName('cf-turnstile')[0].setAttribute('data-theme', 'dark');
	}

	localStorage.setItem('theme', mode)
}

// Ruler Script
let ruler = document.querySelector('.ruler');
let height = 5;
let increasing = true;

setInterval(function () {
	if (increasing) {
		height += 5;
	} else {
		height -= 5;
	}
	ruler.style.height = height + 'vh';
	if (height === 50) {
		increasing = false;
	}
	if (height === 5) {
		increasing = true;
	}
}, 80);

//Typed Script

let options = {
	strings: ['Ankan Roy', 'a Cyber Security Student', 'a Wifi Pentester', 'a Full Stack Dev', 'a Scripter'],
	typeSpeed: 100,
	backSpeed: 50,
	loop: true,
};

let typed = new Typed('#typed', options);

// Turnstile Script
window.onload = function () {
	const form = document.getElementById('contact-form');

	form.addEventListener('submit', function (event) {
		const turnstileToken = document.querySelector('[name="cf-turnstile-response"]').value;

		if (!turnstileToken) {
			event.preventDefault();
			alert('Please complete the CAPTCHA verification.');
			return false;
		}
	});
}