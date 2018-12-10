const express = require('express')
const router = express.Router()
const version = "version-1"

// Add your routes here - above the module.exports line

router.get('/' + version + '/security/signin', (req, res) => {
    res.render(version + '/security/signin', {
        version
    });
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
    res.render(version + '/account/hub', {
        version,
        accountData
    });
})

router.get('/' + version + '/account/manage', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    res.render(version + '/account/manage', {
        version,
        accountData
    });
})

router.get('/' + version + '/account/notyet', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/notyet', {
        version,
        accountData
    });
})


router.get('/' + version + '/surrenderlicence/start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/surrenderlicence/start', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/start', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/assessment/1', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/1', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/1', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/2');
})

router.get('/' + version + '/maintenance/assessment/2', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/2', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/2', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/3');
})

router.get('/' + version + '/maintenance/assessment/3', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/3', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/3', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/4');
})


router.get('/' + version + '/maintenance/assessment/4', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/4', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/4', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/5');
})


router.get('/' + version + '/maintenance/assessment/5', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/5', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/5', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/6');
})


router.get('/' + version + '/maintenance/assessment/6', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/6', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/6', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/check');
})

router.get('/' + version + '/maintenance/assessment/check', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/check', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/check', (req, res) => {
    res.redirect('/' + version + '/maintenance/start');
})


router.get('/' + version + '/downloadlicence/start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/downloadlicence/start', {
        version,
        accountData
    });
})


router.post('/' + version + '/downloadlicence/start', (req, res) => {
    res.redirect('/' + version + '/downloadlicence/licence');
})

router.get('/' + version + '/downloadlicence/licence', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/downloadlicence/licence', {
        version,
        accountData
    });
})

router.get('/' + version + '/surrenderlicence/form', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    req.session.data['action'] = null
    req.session.data['actiondetail'] = null
    req.session.data['more-detail'] = null


    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/surrenderlicence/form', {
        version,
        accountData
    });
})

router.get('/' + version + '/surrenderlicence/form1', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/surrenderlicence/form1', {
        version,
        accountData
    });
})

router.post('/' + version + '/surrenderlicence/form1', (req, res) => {
    res.redirect('/' + version + '/surrenderlicence/form2');
})

router.get('/' + version + '/surrenderlicence/form2', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/surrenderlicence/form2', {
        version,
        accountData
    });
})

router.post('/' + version + '/surrenderlicence/form2', (req, res) => {
    res.redirect('/' + version + '/surrenderlicence/form3');
})

router.get('/' + version + '/surrenderlicence/form3', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/surrenderlicence/form3', {
        version,
        accountData
    });
})

router.post('/' + version + '/surrenderlicence/form3', (req, res) => {

    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];


    var NotifyClient = require('notifications-node-client').NotifyClient,
        notifyClient = new NotifyClient(process.env.NotifyAPIKey);
    var personalisation = {
        'accountName': accountData.accountName,
        'licenceNumber': accountData.licenceNumber,
        'type': accountData.type,
        'action': req.session.data['action'],
        'actiondetail': req.session.data['actiondetail'],
        'more-detail': req.session.data['more-detail'],
        'today': (new Date()).toLocaleDateString(),
        'ar': '1-22132213'
    }
    notifyClient
        .sendEmail(process.env.TemplateId, 'ajones@gamblingcommission.gov.uk', {
            personalisation: personalisation
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));


    res.redirect('/' + version + '/surrenderlicence/form4');
})

router.get('/' + version + '/surrenderlicence/form4', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/surrenderlicence/form4', {
        version,
        accountData
    });
})



router.get('/' + version + '/reportevent/list', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/list', {
        version,
        accountData
    });
})


router.get('/' + version + '/reportevent/detail', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/detail', {
        version,
        accountData
    });
})

router.get('/' + version + '/reportevent/start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']


    req.session.data['type'] = null
    req.session.data['more-detail'] = null
    req.session.data['dob-day'] = null
    req.session.data['dob-month'] = null    
    req.session.data['dob-year'] = null


    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/start', {
        version,
        accountData
    });
})


router.get('/' + version + '/reportevent/add/step1', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step1', {
        version,
        accountData
    });
})
router.get('/' + version + '/reportevent/add/step2', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step2', {
        version,
        accountData
    });
})
router.get('/' + version + '/reportevent/add/step3', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step3', {
        version,
        accountData
    });
})
router.get('/' + version + '/reportevent/add/step4', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step4', {
        version,
        accountData
    });
})
router.get('/' + version + '/reportevent/add/step5', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step5', {
        version,
        accountData
    });
})
router.get('/' + version + '/reportevent/add/step6', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step6', {
        version,
        accountData
    });
})
router.get('/' + version + '/reportevent/add/step7', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step7', {
        version,
        accountData
    });
})
router.get('/' + version + '/reportevent/add/step8', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/reportevent/add/step8', {
        version,
        accountData
    });
})

router.get('/' + version + '/account/email', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/email', {
        version,
        accountData
    });
})

router.get('/' + version + '/account/email-alt', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/email-alt', {
        version,
        accountData
    });
})


router.get('/' + version + '/account/password', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/password', {
        version,
        accountData
    });
})


router.get('/' + version + '/account/mobile', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/mobile', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/mobile', (req, res) => {

  

    res.redirect('/' + version + '/account/mobilecode');
})

router.get('/' + version + '/account/mobilecode', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = req.session.data['account']

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/mobilecode', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/mobilecode', (req, res) => {

  

    res.redirect('/' + version + '/account/manage');
})

router.post('/' + version + '/reportevent/add/step1', (req, res) => {
    res.redirect('/' + version + '/reportevent/add/step2');
})
router.post('/' + version + '/reportevent/add/step2', (req, res) => {
    res.redirect('/' + version + '/reportevent/add/step3');
})
router.post('/' + version + '/reportevent/add/step3', (req, res) => {
    res.redirect('/' + version + '/reportevent/add/step4');
})
router.post('/' + version + '/reportevent/add/step4', (req, res) => {
    res.redirect('/' + version + '/reportevent/add/step7');
})
router.post('/' + version + '/reportevent/add/step5', (req, res) => {
    res.redirect('/' + version + '/reportevent/add/step6');
})
router.post('/' + version + '/reportevent/add/step6', (req, res) => {
    res.redirect('/' + version + '/reportevent/add/step7');
})
router.post('/' + version + '/reportevent/add/step7', (req, res) => {
    res.redirect('/' + version + '/reportevent/add/step8');
})
module.exports = router