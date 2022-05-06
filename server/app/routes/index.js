/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports = function (app) {

    app.route('/competencias')
        .post(api.competenciaSave);

    app.route('/competencias')
        .get(api.competencias);

    app.route('/auth/login')
        .post(api.auth);

    app.route('/auth/me')
        .get(api.tokenValid);
};