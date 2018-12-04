const express = require('express')
const router = express.Router()
const version = "version-1"

// Add your routes here - above the module.exports line

router.get('/' + version + '/security/signin', (req, res) => {
    res.render(version + '/security/signin', { version });
})

router.post('/' + version + '/security/signin', (req, res) => {
    req.session.data['account'] = '999101'
    res.redirect('/' + version + '/account/hub');
})

router.get('/' + version + '/account/hub', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/hub', { version, accountData });
})

module.exports = router
