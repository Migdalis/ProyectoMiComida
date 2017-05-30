var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var usuarioSchema = Schema({
    nickname: { type: String, required: true, unique: true},
	password: { type: String, required: true},
	nombre: String,
	apellido: String,
	telefono: { type: Number, min: 13, max: 18},
	email: String,
	fecha_nacimiento: Date,
	sexo: { Type: String, enum: ['Masculino','Femenino']},
	suscriptores: [{ type: Schema.ObjectId, ref: 'User'}],
	suscripcion_categorias: [{ Type: String, enum: ['Desayunos','Almuerzos','Cenas','Sopas']}]
}, {collection: "usuario"});

// create a model
var User = mongoose.model('User', usuarioSchema);
export default User

//module.exports = mongoose.model('User', usuarioSchema);
