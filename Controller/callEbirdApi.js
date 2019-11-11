const axios = require('axios');


module.exports.callBirdAPI = async function(req,res){

    let lat = req.params.lat;
    let lng =req.params.lng;

    let url = `https://api.ebird.org/v2/ref/hotspot/geo?lat=${lat}&lng=${lng}&fmt=json`;
    await axios.get(url)
        .then(resp => {
            res.status(200).send(resp.data);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}
