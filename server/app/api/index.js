/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = {}
var dateCreate = new Date();
var data = {
	body: {},
	competenciaId: null
};
var uuid = require('uuid');

var competencias = [{
	
		id: "8791fdfb-f951-43b2-9da0-25e69c5500cd",
		competenciaId: "8791fdfb-f951-43b2-9da0-25e69c5500cd",
		name: "Programador nivel 1",
		description: "Java Developer",
		dateCreate: dateCreate
	},
	{
		id: "8791fdfb-f951-43b2-45888-25e69c5500cd",
		competenciaId: "8791fdfb-f951-45888-9da0-25e69c5500cd",
		name: "Programador nivel 1",
		description: ".Net Developer",
		dateCreate: dateCreate
	}
];

var users = [

	UserResponse = {
		jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
		user: {
			id: '001',
			email: 'admin@gmail.com',
			firstName: 'Rodrigo',
			lastName: 'Silva',
			role: 'ADMIN',
			password: '123456'
		},

	},
	UserResponse = {
		jwt: 'eyJhbGcOiJIUzI1NiIsInRCI32332pXVCJ9',
		user: {
			id: '002',
			email: 'user@gmail.com',
			firstName: 'Rodrigo',
			lastName: 'Silva',
			role: 'USER',
			password: '123456'
		},

	}
]

api.competencias = function (req, res) {
	res.json(competencias);
};

api.competenciaSave = function (req, res) {

	console.log(req.body);

	let competencia = {};

	if(!req.body.data)
    	competencia = req.body.data;

    competencia = req.body;
	
	const competenciaId = uuid.v4();
	const data = {
		id: competenciaId,
		competenciaId: competenciaId,
		name: competencia.name,
		description: competencia.description,
		dateCreate: dateCreate
	}

	competencias.push(data);

	res.status(200).json(data);
};

api.auth = function (req, res) {

	const userAuth = req.body;

	console.log(userAuth);

	var user = users.
	filter((user) => {
		return user.user.email === userAuth.email

	});

	if (user.length > 0) {
		console.log(user);
		return res.status(200).json(user[0]);
	}

	return res.status(401).json("Autorização Negada!");

};

api.tokenValid = function (req, res) {

	const jwt = req.headers['authorization'];

	console.log(jwt);

	var user = users.
	filter((user) => {
		return user.jwt === jwt

	});

	if (user.length > 0) {
		console.log(user);
		return res.status(200).json(user[0]);
	}

	return res.status(401).json("Autorização Negada!");

};

module.exports = api;