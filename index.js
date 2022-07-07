function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const grauztukai = new Map();

class Vaisius {
	constructor() {
		this.dydis = rand(5, 25);
		this.id = rand(1000000, 9999999);
		this.prakastas = false;
	}

	prakasti() {
		this.prakastas = true;
		return this;
	}
}

class Krepsys {
	static vaisiai = [];
	static pripildyti() {
		while (this.vaisiai.length <= 20) {
			Krepsys.vaisiai.push(new Vaisius());
			Krepsys.vaisiai.sort((a, b) => (a.dydis < b.dydis ? 1 : -1));
		}
		return this;
	}
	static isimti() {
		let grauztukas = Krepsys.vaisiai.shift();
		grauztukas.prakastas = true;
		grauztukai.set(grauztukas.id, grauztukas);
		return this;
	}
}

Krepsys.pripildyti();
console.log(Krepsys);
console.log(Krepsys.isimti().isimti().isimti().isimti().isimti().isimti().isimti());
console.log(grauztukai);
console.log(Krepsys);
Krepsys.pripildyti();
console.log(Krepsys);
