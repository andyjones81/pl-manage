const express = require('express')
const router = express.Router()
const version = "version-5"

// Add your routes here - above the module.exports line

router.get('/' + version + '/security/signin', (req, res) => {
    req.session.data = {}
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
    req.session.data = {}
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

router.get('/' + version + '/account/hub2', (req, res) => {
    req.session.data = {}
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    res.render(version + '/account/hub2', {
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

router.get('/' + version + '/account/change-name-start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-name-start', {
        version,
        accountData
    });
})

router.get('/' + version + '/account/change-name-new-name', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];


    res.render(version + '/account/change-name-new-name', {
        version,
        accountData
    });

})


router.post('/' + version + '/account/change-name-new-name', (req, res) => {
    if (req.session.data['cya-name'] === 'yes') {
        res.redirect('/' + version + '/account/change-name-cya');
    }

    res.redirect('/' + version + '/account/change-name-date');
})

router.get('/' + version + '/account/change-name-date', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-name-date', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-name-date', (req, res) => {
    if (req.session.data['cya-name'] === 'yes') {
        res.redirect('/' + version + '/account/change-name-cya');
    }

    res.redirect('/' + version + '/account/change-name-evidence');
})

router.get('/' + version + '/account/change-name-evidence', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-name-evidence', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-name-evidence', (req, res) => {
    res.redirect('/' + version + '/account/change-name-cya');
})

router.post('/' + version + '/account/change-name-evidence-file', (req, res) => {
    res.redirect('/' + version + '/account/change-name-cya');
})

router.get('/' + version + '/account/change-name-cya', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    req.session.data['cya-name'] = 'yes'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-name-cya', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-name-evidence-file', (req, res) => {
    res.redirect('/' + version + '/account/change-name-evidence');
})


router.post('/' + version + '/account/change-name-cya', (req, res) => {
    res.redirect('/' + version + '/account/change-name-complete');
})

router.get('/' + version + '/account/change-name-complete', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    //If from maintenance show a different result

    if (req.session.data['frommaint'] === 'yes') {
        res.render(version + '/account/change-name-complete', {
            version,
            accountData
        });
    } else {
        res.render(version + '/account/change-name-complete-hub', {
            version,
            accountData
        });
    }

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
    req.session.data['frommaint'] = 'yes'
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

    

    res.redirect('/' + version + '/maintenance/assessment/employed');
})

router.get('/' + version + '/maintenance/assessment/employed', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/employed', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/employed', (req, res) => {
    
    if (req.session.data['employed'] === 'no') {
        res.redirect('/' + version + '/maintenance/assessment/financial');
    }


    res.redirect('/' + version + '/maintenance/assessment/employer');
})

router.get('/' + version + '/maintenance/assessment/employer', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/employer', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/employer', (req, res) => {
    
     

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

router.get('/' + version + '/maintenance/assessment/outcome/name-change-required', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/name-change-required', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/name-changed', (req, res) => {
    if (req.session.data['same-name'] === 'no') {
        res.redirect('/' + version + '/maintenance/assessment/outcome/name-change-required');
    }

    res.redirect('/' + version + '/maintenance/assessment/dob');
})


router.post('/' + version + '/maintenance/assessment/outcome/name-change-required', (req, res) => {
  
    res.redirect('/' + version + '/account/change-name-start');
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



router.post('/' + version + '/maintenance/app/new-name', (req, res) => {

    res.redirect('/' + version + '/maintenance/app/name-changed-date');
})

router.post('/' + version + '/maintenance/app/name-changed-date', (req, res) => {

    res.redirect('/' + version + '/maintenance/app/name-start-date');
})

router.post('/' + version + '/maintenance/app/name-start-date', (req, res) => {

    res.redirect('/' + version + '/maintenance/app/name-changed-evidence');
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

router.post('/' + version + '/maintenance/app/currentname', (req, res) => {
    if (req.session.data['same-name'] == "no") {
        res.redirect('/' + version + '/maintenance/app/new-name');
    }

    req.session.data["currentnamescomplete"] = 1

    res.redirect('/' + version + '/maintenance/app/previousnames');
})

router.get('/' + version + '/maintenance/app/new-name', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/new-name', {
        version,
        accountData
    });
})



router.get('/' + version + '/maintenance/app/name-start-date', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/name-start-date', {
        version,
        accountData
    });
})



router.get('/' + version + '/maintenance/app/name-changed-evidence', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/name-changed-evidence', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/app/name-changed-evidence', (req, res) => {
    req.session.data["currentnamescomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/previousnames');
})

router.get('/' + version + '/maintenance/app/dob', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/dob', {
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
        res.redirect('/' + version + '/maintenance/assessment/outcome/home-address-required');
    }
    res.redirect('/' + version + '/maintenance/assessment/events');
})

router.get('/' + version + '/maintenance/assessment/outcome/home-address-required', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/home-address-required', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/outcome/home-address-required', (req, res) => {
      res.redirect('/' + version + '/account/change-home-address-start');
})

router.get('/' + version + '/maintenance/assessment/events', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/events', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/events', (req, res) => {
    if (req.session.data['key-event'] == "yes") {
        res.redirect('/' + version + '/maintenance/assessment/outcome/key-event-required');
    }
    
    res.redirect('/' + version + '/maintenance/assessment/check');
})

router.get('/' + version + '/maintenance/assessment/outcome/key-event-required', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/assessment/outcome/key-event-required', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/assessment/outcome/key-event-required', (req, res) => {      
    res.redirect('/' + version + '/reportevent/start');
})

router.get('/' + version + '/account/change-home-address-start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-home-address-start', {
        version,
        accountData
    });
})

router.get('/' + version + '/account/change-home-address-end-current', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-home-address-end-current', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-home-address-end-current', (req, res) => {
    res.redirect('/' + version + '/account/change-home-new-address');
})

router.get('/' + version + '/account/change-home-new-address', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-home-new-address', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-home-new-address', (req, res) => {
    res.redirect('/' + version + '/account/change-home-new-address-postcode');
})

router.get('/' + version + '/account/change-home-new-address-postcode', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-home-new-address-postcode', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-home-new-address-postcode', (req, res) => {
    res.redirect('/' + version + '/account/change-home-new-address-date-from');
})

router.get('/' + version + '/account/change-home-new-address-date-from', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-home-new-address-date-from', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-home-new-address-date-from', (req, res) => {
    res.redirect('/' + version + '/account/change-home-check');
})

router.get('/' + version + '/account/change-home-check', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/change-home-check', {
        version,
        accountData
    });
})

router.post('/' + version + '/account/change-home-check', (req, res) => {
   
    res.redirect('/' + version + '/account/change-home-complete');
})

router.get('/' + version + '/account/change-home-complete', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    if (req.session.data['frommaint'] === 'yes') {
        res.render(version + '/account/change-name-complete', {
            version,
            accountData
        });
    } else {
        res.render(version + '/account/change-name-complete-hub', {
            version,
            accountData
        });
    }
})

router.post('/' + version + '/account/change-home-complete', (req, res) => {
    res.redirect('/' + version + '/account/change-home-complete');
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
    res.redirect('/' + version + '/maintenance/tasks/list');
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

router.get('/' + version + '/guidance/start', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/guidance/start', {
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

router.get('/' + version + '/account/email-alt-done', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/email-alt-done', {
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

router.get('/' + version + '/account/password-done', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/account/password-done', {
        version,
        accountData
    });
})


router.post('/' + version + '/account/password', (req, res) => {



    res.redirect('/' + version + '/account/password-done');
})

router.post('/' + version + '/account/email-alt', (req, res) => {



    res.redirect('/' + version + '/account/email-alt-done');
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


router.post('/' + version + '/maintenance/app/event-add/step1', (req, res) => {
    res.redirect('/' + version + '/maintenance/app/event-add/step2');
})
router.post('/' + version + '/maintenance/app/event-add/step2', (req, res) => {
    res.redirect('/' + version + '/maintenance/app/event-add/step3');
})
router.post('/' + version + '/maintenance/app/event-add/step3', (req, res) => {
    res.redirect('/' + version + '/maintenance/app/event-add/step4');
})
router.post('/' + version + '/maintenance/app/event-add/step4', (req, res) => {
    res.redirect('/' + version + '/maintenance/app/event-add/step7');
})
router.post('/' + version + '/maintenance/app/event-add/step5', (req, res) => {
    res.redirect('/' + version + '/maintenance/app/event-add/step6');
})
router.post('/' + version + '/maintenance/app/event-add/step6', (req, res) => {
    res.redirect('/' + version + '/maintenance/app/event-add/step7');
})
router.post('/' + version + '/maintenance/app/event-add/step7', (req, res) => {
    res.redirect('/' + version + '/maintenance/app/personal-criminal-list');
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
    res.redirect('/' + version + '/maintenance/personal/name-start-date');
})

router.get('/' + version + '/maintenance/personal/name-start-date', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/personal/name-start-date', {
        version,
        accountData
    });
})

router.post('/' + version + '/maintenance/personal/name-start-date', (req, res) => {
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

router.get('/' + version + '/maintenance/app/add-new-name', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/add-new-name', {
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

router.get('/' + version + '/maintenance/app/personal-criminal-list', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/personal-criminal-list', {
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

router.get('/' + version + '/maintenance/app/event-add/step2', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/event-add/step2', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/event-add/step3', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/event-add/step3', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/event-add/step4', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/event-add/step4', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/event-add/step5', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/event-add/step5', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/event-add/step6', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/event-add/step6', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/event-add/step7', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/event-add/step7', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/event-add/step8', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/event-add/step8', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/currentname', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/currentname', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/pay', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];



    res.render(version + '/maintenance/app/pay', {
        version,
        accountData
    });
})

router.get('/' + version + '/maintenance/app/pay-other', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'
    var HerokuServiceName = process.env.HerokuServiceName
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/pay-other', {
        version,
        accountData,
        HerokuServiceName
    });
})

router.get('/' + version + '/maintenance/app/pay-other-emailsent', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'
    var HerokuServiceName = process.env.HerokuServiceName
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/pay-other-emailsent', {
        version,
        accountData,
        HerokuServiceName
    });
})

router.get('/' + version + '/maintenance/app/feepaid', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/feepaid', {
        version,
        accountData
    });
})
router.get('/' + version + '/maintenance/app/pay-other-emailsent-other', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'
    var HerokuServiceName = process.env.HerokuServiceName
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/pay-other-emailsent-other', {
        version,
        accountData,
        HerokuServiceName
    });
})

router.get('/' + version + '/maintenance/app/complete', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/app/complete', {
        version,
        accountData
    });
})


router.get('/' + version + '/thirdpartypay/pay/:id', (req, res) => {

    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/thirdpartypay/pay', {
        version,
        accountData
    });
})

router.get('/' + version + '/thirdpartypay/result', (req, res) => {

    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];


    res.render(version + '/thirdpartypay/result', {
        version,
        accountData
    });
})

router.post('/' + version + '/thirdpartypay/pay/:id', (req, res) => {

    var returnUrl = process.env.HerokuServiceName + '/' + version + '/thirdpartypay/result';

    const fetch = require('node-fetch');
    const inputBody = {
        "amount": 14500,
        "reference": "999101",
        "return_url": returnUrl,
        "description": "Personal functional licence renewal"
    };
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + process.env.PayKey
    };

    var payPageURL = "";

    fetch('https://publicapi.payments.service.gov.uk/v1/payments', {
            method: 'POST',
            body: JSON.stringify(inputBody),
            headers: headers
        })
        .then(function (res) {
            return res.json();
        }).then(function (body) {
            payPageURL = body._links.next_url.href
            console.log(payPageURL);
            res.redirect(payPageURL);
        });



})



router.post('/' + version + '/maintenance/app/previousaddresses', (req, res) => {
    req.session.data["adressscomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})


router.post('/' + version + '/maintenance/app/pay-other', (req, res) => {

    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    var link = 'https://gc-plmanage.herokuapp.com/version-5/thirdpartypay/pay/' + accountData.feeref;

    var NotifyClient = require('notifications-node-client').NotifyClient,
        notifyClient = new NotifyClient(process.env.V4NotifyKey);
    var personalisation = {
        'fee': accountData.fee,
        'licNo': accountData.licenceNumber,
        'name': accountData.accountName,
        'link': link
    }
    notifyClient
        .sendEmail(process.env.PayTemplateId, 'ajones@gamblingcommission.gov.uk', {
            personalisation: personalisation
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));


    res.redirect('/' + version + '/maintenance/app/pay-other-emailsent');
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

    if (req.session.data['verify-method'] === 'employer') {
        req.session.data["verificationcomplete"] = 1
        res.redirect('/' + version + '/maintenance/app/verify-employer');
    }

    if (req.session.data['verify-method'] === 'thirdparty') {
        req.session.data["verificationcomplete"] = 1
        res.redirect('/' + version + '/maintenance/app/verify-thirdparty');
    }

    if (req.session.data['verify-method'] === 'gc') {
        req.session.data["verificationcomplete"] = 1
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
    req.session.data["personal-criminalitycomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/personal-investigations');
})

router.post('/' + version + '/maintenance/app/personal-criminal-list', (req, res) => {
    req.session.data["personal-criminalitycomplete"] = 1
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

router.post('/' + version + '/maintenance/app/personal-financial', (req, res) => {
    req.session.data["personal-financialcomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})

router.post('/' + version + '/maintenance/app/thirdparty', (req, res) => {
    req.session.data["thirdpartycomplete"] = 1
    res.redirect('/' + version + '/maintenance/app/declaration');
})

router.post('/' + version + '/maintenance/app/declaration', (req, res) => {
    req.session.data["declarationcomplete"] = 1
    res.redirect('/' + version + '/maintenance/tasks/list');
})

router.post('/' + version + '/maintenance/app/pay', (req, res) => {

    var returnUrl = process.env.HerokuServiceName + '/' + version + '/maintenance/app/complete';

    const fetch = require('node-fetch');
    const inputBody = {
        "amount": 14500,
        "reference": "999101",
        "return_url": returnUrl,
        "description": "Personal functional licence renewal"
    };
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + process.env.PayKey
    };

    var payPageURL = "";

    fetch('https://publicapi.payments.service.gov.uk/v1/payments', {
            method: 'POST',
            body: JSON.stringify(inputBody),
            headers: headers
        })
        .then(function (res) {
            return res.json();
        }).then(function (body) {
            payPageURL = body._links.next_url.href
            console.log(payPageURL);
            res.redirect(payPageURL);
        });

})


router.post('/' + version + '/maintenance/app/pay-other', (req, res) => {
    res.redirect('/' + version + '/maintenance/tasks/list');
})




router.get('/' + version + '/financial/type', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/type', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/type', (req, res) => {
    res.redirect('/' + version + '/financial/date');
})


router.get('/' + version + '/financial/date', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/date', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/date', (req, res) => {
    res.redirect('/' + version + '/financial/complete');
})

router.get('/' + version + '/financial/complete', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/complete', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/complete', (req, res) => {
    res.redirect('/' + version + '/financial/where');
})

router.get('/' + version + '/financial/where', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/where', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/where', (req, res) => {
    res.redirect('/' + version + '/financial/body');
})

router.get('/' + version + '/financial/body', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/body', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/body', (req, res) => {
    res.redirect('/' + version + '/financial/details');
})

router.get('/' + version + '/financial/details', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/details', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/details', (req, res) => {
    res.redirect('/' + version + '/financial/nofiles');
})



router.get('/' + version + '/financial/nofiles', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/nofiles', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/nofiles', (req, res) => {
    res.redirect('/' + version + '/financial/check');
})


router.get('/' + version + '/financial/files', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/files', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/files', (req, res) => {
    res.redirect('/' + version + '/financial/check');
})


router.get('/' + version + '/financial/upload', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/upload', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/upload', (req, res) => {
    res.redirect('/' + version + '/financial/files');
})

router.post('/' + version + '/financial/check', (req, res) => {
    res.redirect('/' + version + '/financial/financial-list');
})


router.get('/' + version + '/financial/financial', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/financial', {
        version,
        accountData
    });
})

router.post('/' + version + '/financial/financial', (req, res) => {
    res.redirect('/' + version + '/financial/type');
})


router.get('/' + version + '/financial/financial-list', (req, res) => {
    var d = require('./data/data.json')
    var accountNumber = '999101'

    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/financial/financial-list', {
        version,
        accountData
    });
})

module.exports = router