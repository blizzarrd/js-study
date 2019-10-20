
class JapaneseConsonant {
	constructor(letter) {
		this.A = letter + "a"
		this.I = letter + "i"
		this.U = letter + "u"
		this.E = letter + "e"
		this.O = letter + "o"
	}
}

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question(`What's your letter? `, (letter) => {
	let consonant = new JapaneseConsonant(letter)

	console.log(consonant.A)
	console.log(consonant.I)
	console.log(consonant.U)
	console.log(consonant.E)
	console.log(consonant.O)
	readline.close()
})