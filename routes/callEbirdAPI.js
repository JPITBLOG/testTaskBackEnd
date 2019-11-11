const callBirdApiRoutes = require("express").Router();
const {callBirdAPI} = require("../Controller/callEbirdApi");

callBirdApiRoutes.get('/:lat/:lng',callBirdAPI);

module.exports = {callBirdApiRoutes};