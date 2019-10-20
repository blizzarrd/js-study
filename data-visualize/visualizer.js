let fs = require("fs")
let http = require("http")

let contents = fs.readFileSync("data.txt", { encoding: "utf8" })
let lines = contents.split("\r\n")
let numbers = lines.map(x => parseInt(x))

let server = http.createServer((request, response) => {
	// HTTP headers
	let headers = {
		"Content-Type": "text/html"
	}

	response.writeHead(200, headers)

	// Doctype
	response.write("<!DOCTYPE html>")
	response.write("<html>")

	// head
	response.write("<head>")
	response.write("</head>")

	// body start
	response.write("<body>")

	// body contents
	response.write("<ul>")
	
	for(let number of numbers) {
		response.write("<li>" + number + "</li>")
	}
	
	response.write("</ul>")

	// body end
	response.write("</body>")

	// End
	response.write("</html>")
	response.end()
})

server.listen(8000)