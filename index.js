const fs = require('fs/promises')
// const {require} = require('path')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent)
	// write code here
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	fs.readFile(fileName,"utf-8",(arr, data)=>{
		console.log(data)
	})
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName, fileContent)
	// write code here
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName)
	// write code here
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }