// task 1

let showAutumn = () => alert('Це - Осінь');
let showWinter = () => alert('Це - Зима');
let showSummer = () => alert('Це - Літо');
let showSpring = () => alert('Це - Весна');

let month = prompt("Введіть число яке відповідає за вибраний вами місяць");
month = Number(month);
switch (month) {
	case 1:
		showWinter();
		break;
	case 2:
		showWinter();
		break;
	case 3:
		showSpring();
		break;
	case 4:
		showSpring();
		break;
	case 5:
		showSpring();
		break;
	case 6:
		showSummer();
		break;
	case 7:
		showSummer();
		break;
	case 8:
		showSummer();
		break;
	case 9:
		showAutumn();
		break;
	case 10:
		showAutumn();
		break;
	case 11:
		showAutumn();
		break;
	case 12:
		showWinter();
		break;
	default:
		alert('Ви ввели невірне значення');
		break;
}

// task 2

function checkNum(num) {
	if (num%1 == 0) {
		if (num == 0) {
			alert('Дане число є нулем');
		} else if (num%2 == 0) {
			alert('Дане число є парним');
		} else {
			alert('Дане число є непарним');
		}
	} else {
		alert('Дане число є не цілим');
	}
}

let num = prompt("Введіть число для аналізу");
checkNum(num);

// task 3

function simpleCalc(operation) {
	return eval(operation);
}

let operation = prompt('Введіть операцію яку б ви хотіли виконати');
console.log(simpleCalc(operation));