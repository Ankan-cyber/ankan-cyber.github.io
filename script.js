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
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css'
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}


let ruler = document.querySelector('.ruler');
let height = 5;
let increasing = true;

setInterval(function() {
    if(increasing) {
        height += 5;
    } else {
        height -= 5;
    }
    ruler.style.height = height + 'vh';
    if(height === 50) {
        increasing = false;
    }
    if(height === 5) {
        increasing = true;
    }
}, 80);