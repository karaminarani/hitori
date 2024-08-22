const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Skyzo
	* Follow https://github.com/nazedev
	* Whatsapp : wa.me/6285974812882
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6285823170814','6285978029403']
global.packname = 'Bot WhatsApp'
global.author = 'Gun Bot'
global.botname = 'Gun Bot'
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.pairing_code = true

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/Nazedev',
	gh: 'https://github.com/ridho17-ind',
	gc: 'https://chat.whatsapp.com/DMfPvoBAOJH3nFyJjNHWLG',
	ch: '120363250409960161@newsletter',
}

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	owner: 'ni fitur khusus baginda gun',
	admin: 'fitur ini bisa dipake kalo lu admin',
	botAdmin: 'adminin gua dulu kocak!',
	group: 'pake di grup tolol',
	private: 'pake di private chat bodo!',
	prem: 'khusus premium!, kalo pengen beli dulu kocak',
	wait: 'tungguin bentar ya tai',
	error: 'error anjing',
	done: 'done nih pepek'
}

global.APIs = {
	zaynn: 'https://api.zaynn.my.id/api',
}
global.APIKeys = {
	'https://api.zaynn.my.id/api': 'Najedev',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
