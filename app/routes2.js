const express = require('express')
const router = express.Router()
const version = "version-2"

// Add your routes here - above the module.exports line

router.get('/' + version + '/security/signin', (req, res) => {
    res.render(version + '/security/signin', {
        version
    });
})

router.get('/' + version + '/security/createaccount', (req, res) => {
    res.render(version + '/security/createaccount', {
        version
    });
})

router.get('/' + version + '/security/forgot', (req, res) => {
    res.render(version + '/security/forgot', {
        version
    });
})


router.get('/' + version + '/security/found', (req, res) => {
    res.render(version + '/security/found', {
        version
    });
})


router.get('/' + version + '/security/notfound', (req, res) => {
    res.render(version + '/security/notfound', {
        version
    });
})

router.get('/' + version + '/security/setpassword', (req, res) => {
    res.render(version + '/security/setpassword', {
        version
    });
})

router.post('/' + version + '/security/createaccount', (req, res) => {   
    res.redirect('/' + version + '/security/found');
})

router.post('/' + version + '/security/signin', (req, res) => {
    req.session.data['account'] = '999101'
    res.redirect('/' + version + '/account/hub');
})

router.get('/' + version + '/account/hub', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/start', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/assessment/keep', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/keep', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/keep', (req, res) => {
    if (req.session.data['keep-licence'] === 'no') {
        res.redirect('/' + version + '/maintenance/assessment/outcome/surrender');
    }

    res.redirect('/' + version + '/maintenance/assessment/financial');
})

router.get('/' + version + '/maintenance/assessment/financial', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/financial', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/financial', (req, res) => {
    if (req.session.data['changed-financial'] === 'no') {
        res.redirect('/' + version + '/maintenance/assessment/name-changed');
    }

    res.redirect('/' + version + '/maintenance/assessment/outcome/refuse');
})

router.get('/' + version + '/maintenance/assessment/outcome/refuse', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/refuse', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/refuse-details', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/refuse-details', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/outcome/refuse', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/outcome/refuse-details');
 })


 router.get('/' + version + '/maintenance/assessment/outcome/refuse-details', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/refuse-details', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/outcome/refuse-details', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/outcome/refuse-check');
 })

 
 router.get('/' + version + '/maintenance/assessment/outcome/refuse-check', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/refuse-check', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/outcome/refuse-check', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/outcome/refuse-complete');
 })


 router.get('/' + version + '/maintenance/assessment/outcome/refuse-complete', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/refuse-complete', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/surrender', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/surrender', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/outcome/surrender', (req, res) => {
   res.redirect('/' + version + '/maintenance/assessment/outcome/surrender-submitted');
})



router.get('/' + version + '/account/surrender', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/surrender', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/surrender', (req, res) => {
   res.redirect('/' + version + '/account/surrender-submitted');
})


router.get('/' + version + '/maintenance/assessment/outcome/surrender-submitted', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/surrender-submitted', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/assessment/new-name', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/new-name', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/new-name', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/name-changed-date');
})

router.post('/' + version + '/maintenance/assessment/outcome/surrender', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/why-keep');
})


router.get('/' + version + '/maintenance/aassessment/date-changed', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/aassessment/date-changed', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/aassessment/date-changed', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/evidence');
})

router.get('/' + version + '/maintenance/aassessment/evidence', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/aassessment/evidence', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/aassessment/evidence', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/dob');
})



router.get('/' + version + '/maintenance/aassessment/surrender', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/aassessment/surrender', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/aassessment/surrender', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/why-keep');
})

router.get('/' + version + '/maintenance/assessment/why-keep', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/why-keep', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/why-keep', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/financial');
})


router.get('/' + version + '/maintenance/assessment/name-changed', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/name-changed', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/name-changed', (req, res) => {
    if (req.session.data['same-name'] == "no") {
        res.redirect('/' + version + '/maintenance/assessment/new-name');
    }
    res.redirect('/' + version + '/maintenance/assessment/dob');
})

router.get('/' + version + '/maintenance/assessment/new-name', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/new-name', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/new-name', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/name-changed-date');
})


router.get('/' + version + '/maintenance/assessment/name-changed-date', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/name-changed-date', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/name-changed-date', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/name-changed-evidence');
})

router.get('/' + version + '/maintenance/assessment/name-changed-evidence', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/name-changed-evidence', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/name-changed-evidence', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/dob');
})

router.get('/' + version + '/maintenance/assessment/dob', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/dob', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/dob', (req, res) => {

    if (req.session.data['dob-correct'] == "no") {
        res.redirect('/' + version + '/maintenance/assessment/new-dob');
    }
    res.redirect('/' + version + '/maintenance/assessment/current-home-address');
})

router.get('/' + version + '/maintenance/assessment/new-dob', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/new-dob', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/new-dob', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/current-home-address');
})

router.get('/' + version + '/maintenance/assessment/current-home-address', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/current-home-address', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/current-home-address', (req, res) => {
    if (req.session.data['current-home-address'] == "no") {
        res.redirect('/' + version + '/maintenance/assessment/set-end-date');
    }
    res.redirect('/' + version + '/maintenance/assessment/check');
})

router.get('/' + version + '/maintenance/assessment/set-end-date', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/set-end-date', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/set-end-date', (req, res) => {
    res.redirect('/' + version + '/maintenance/assessment/check');
})

router.get('/' + version + '/maintenance/assessment/4', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/check', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/check', (req, res) => {
    res.redirect('/' + version + '/maintenance/tasks/no');
})


router.get('/' + version + '/downloadlicence/start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

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


router.get('/' + version + '/maintenance/tasks/list', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/tasks/list', {
        version,
        accountData
    });
})

router.get('/' + version + '/downloadlicence/licence', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'


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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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
    var accountNumber = '999101'

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


//Renew

router.get('/' + version + '/maintenance/personal/name', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/name', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/personal/name', (req, res) => {

    if (req.session.data['changed-name'] == "yes") {
        res.redirect('/' + version + '/maintenance/personal/new-name');
    }
    res.redirect('/' + version + '/maintenance/personal/dob');
})


router.get('/' + version + '/maintenance/personal/new-name', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/new-name', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/personal/new-name', (req, res) => {
    res.redirect('/' + version + '/maintenance/personal/name-changed-date');
})


router.get('/' + version + '/maintenance/personal/name-changed-date', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/name-changed-date', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/personal/name-changed-date', (req, res) => {
    res.redirect('/' + version + '/maintenance/personal/name-change-evidence');
})

router.get('/' + version + '/maintenance/personal/name-change-evidence', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/name-change-evidence', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/personal/name-change-evidence', (req, res) => {
    res.redirect('/' + version + '/maintenance/personal/dob');
})


router.get('/' + version + '/maintenance/personal/dob', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/dob', {
        version,
        accountData
    });
})


router.post('/' + version + '/maintenance/personal/dob', (req, res) => {
    res.redirect('/' + version + '/maintenance/personal/sex');
})

router.get('/' + version + '/maintenance/personal/sex', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/sex', {
        version,
        accountData
    });
})


router.post('/' + version + '/maintenance/personal/sex', (req, res) => {
    res.redirect('/' + version + '/maintenance/personal/check');
})

router.get('/' + version + '/maintenance/personal/check', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/check', {
        version,
        accountData
    });
})


router.post('/' + version + '/maintenance/personal/homeaddress', (req, res) => {
    res.redirect('/' + version + '/maintenance/personal/born');
})

router.get('/' + version + '/maintenance/personal/born', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/born', {
        version,
        accountData
    });
})




//APP

router.get('/' + version + '/maintenance/app/certaddress', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/certaddress', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/criminality', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/criminality', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/dbsconsent', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/dbsconsent', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/declaration', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/declaration', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/financialactions', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/financialactions', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/place', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/place', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/placeofbirth', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/placeofbirth', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/previousaddresses', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/previousaddresses', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/previousnames', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/previousnames', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/sex', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/sex', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/thirdparty', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/thirdparty', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/verification', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verification', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/verify-employer', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verify-employer', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/verify-employer-file', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verify-employer-file', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/verify-thirdparty', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verify-thirdparty', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/verify-thirdparty-file', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verify-thirdparty-file', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/verify-gc', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verify-gc', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/verify-thirdparty-file-add', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verify-thirdparty-file-add', {
        version,
        accountData
    });
})


router.get('/' + version + '/maintenance/app/verify-thirdparty-file-list', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/verify-thirdparty-file-list', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/personal-criminal', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-criminal', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/personal-disciplinary', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-disciplinary', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/personal-disqualifications', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-disqualifications', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/personal-financial', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-financial', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/personal-investigations', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-investigations', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/personal-sanctions', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-sanctions', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/personal-criminal-add', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-criminal-add', {
        version,
        accountData
    });
})




router.post('/' + version + '/maintenance/app/previousaddresses', (req, res) => {
    req.session.data["adressscomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})


router.post('/' + version + '/maintenance/app/previousnames', (req, res) => {
    req.session.data["previousnamescomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/sex');
})


router.post('/' + version + '/maintenance/app/sex', (req, res) => {
    req.session.data["sexcomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/placeofbirth');
})

router.post('/' + version + '/maintenance/app/placeofbirth', (req, res) => {
    req.session.data["placeofbirthcomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})


router.post('/' + version + '/maintenance/app/dbsconsent', (req, res) => {
    req.session.data["dbsconsentcomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/certaddress');
})


router.post('/' + version + '/maintenance/app/certaddress', (req, res) => {
    req.session.data["certcomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})

router.post('/' + version + '/maintenance/app/verification', (req, res) => {
   
    if(req.session.data['verify-method'] === 'employer')
    {req.session.data["verificationcomplete"] = 1
        res.redirect('/' + version + '/maintenance/app/verify-employer');
    }

    if(req.session.data['verify-method'] === 'thirdparty')
    {req.session.data["verificationcomplete"] = 1
        res.redirect('/' + version + '/maintenance/app/verify-thirdparty');
    }

    if(req.session.data['verify-method'] === 'gc')
    {req.session.data["verificationcomplete"] = 1
        res.redirect('/' + version + '/maintenance/app/verify-gc');        
    }
    
    res.redirect('/' + version + '/maintenance/tasks/list');
})


router.post('/' + version + '/maintenance/app/verify-employer', (req, res) => {    
    res.redirect('/' + version + '/maintenance/app/verify-employer-file');
})

router.post('/' + version + '/maintenance/app/verify-employer-file', (req, res) => {    
    req.session.data["verifyemployerfilecomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})

router.post('/' + version + '/maintenance/app/verify-thirdparty', (req, res) => {    
    req.session.data["verifythirdpartyfilecomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/verify-thirdparty-file');
})

router.post('/' + version + '/maintenance/app/verify-gc', (req, res) => {  
    req.session.data["verifygccomplete"] = 1  
    res.redirect('/' + version + '/maintenance/tasks/list');
})


router.post('/' + version + '/maintenance/app/verify-thirdparty-file', (req, res) => {    
    req.session.data["verifythirdpartyfilecomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})



router.post('/' + version + '/maintenance/app/verify-thirdparty-file-add', (req, res) => {    
    req.session.data["verifythirdpartyfilecomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/verify-thirdparty-file-list');
})

router.post('/' + version + '/maintenance/app/personal-criminal', (req, res) => {
    req.session.data["personal-criminalcomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/personal-investigations');
})

router.post('/' + version + '/maintenance/app/personal-investigations', (req, res) => {
    req.session.data["personal-investigationscomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/personal-sanctions');
})

router.post('/' + version + '/maintenance/app/personal-sanctions', (req, res) => {
    req.session.data["personal-sanctionscomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/personal-disciplinary');
})

router.post('/' + version + '/maintenance/app/personal-disciplinary', (req, res) => {
    req.session.data["personal-disciplinarycomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/personal-disqualifications');
})

router.post('/' + version + '/maintenance/app/personal-disqualifications', (req, res) => {
    req.session.data["personal-disqualificationscomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/personal-financial');
})

router.post('/' + version + '/maintenance/app/personal-financial', (req, res) => {
    req.session.data["personal-financialcomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})

module.exports = router