//your code here

let isDark = false;

const swapBtn = document.getElementById("swap");

function swapTheme(){
	isDark = !isDark;
	const main = document.getElementById("app");
	if(isDark){
		main.classList.value = "night";
		swapBtn.classList.value = "button_night";
	} else {
		main.classList.value = "day";
		swapBtn.classList.value = "button_day";
	}
}


swapBtn.onclick = swapTheme;

