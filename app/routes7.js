const express = require('express')
const router = express.Router()
const version = "version-7"
const accountNumber = '999101'

// Add your routes here - above the module.exports line

router.get('/' + version + '/companieshouse', (req, res) => {

    const CHA = require('companies-house-api-es6');
    const cha = new CHA(process.env.CompaniesHouseAPIKey);

    cha.searchForDisqualifiedOfficer('Paul+Smith').then(result => {
        res.render(version + '/companieshouse', {
            result
        });
    }).catch(err => {
        console.log(err);
    });

    // const fetch = require('node-fetch');
    // const inputBody = {
    //     "q": "Paul Smith"
    // };
    // const headers = {
    //     'Content-Type': 'application/json',
    //      'Accept': 'application/json'
    // };

    // var payPageURL = "";

    // fetch('https://api.companieshouse.gov.uk/search/disqualified-officers?q='+ 'Paul+Smith', {
    //         method: 'GET',
    //         headers: headers,
    //         auth:{
    //             username: process.env.CompaniesHouseAPIKey,
    //             password: ''
    //         },
    //         params: {
    //             q: 'Paul Smith',
    //             items_per_page: ''
    //         },

    //     })
    //     .then(function (res) {
    //         return res.json();
    //     }).then(function (body) {
    //         console.log(body);
    //         res.render(version + '/companieshouse', {
    //             body
    //         });
    //     })

})

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

router.get('/' + version + '/security/signedout', (req, res) => {
    res.render(version + '/security/signedout', {
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

router.get('/' + version + '/security/notfound-hard', (req, res) => {
    res.render(version + '/security/notfound-hard', {
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

router.post('/' + version + '/security/forgot', (req, res) => {
    res.redirect('/' + version + '/security/found');
})

router.post('/' + version + '/security/signin', (req, res) => {
    req.session.data['account'] = '999101'
    res.redirect('/' + version + '/security/privacy');
})

router.post('/' + version + '/security/privacy', (req, res) => {
    req.session.data['account'] = '999101'
    res.redirect('/' + version + '/account/hub');
})

router.get('/' + version + '/security/privacy', (req, res) => {
    req.session.data = {}
    var d = require('./data/data.json')


    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    res.render(version + '/security/privacy', {
        version,
        accountData
    });
})

router.get('/' + version + '/account/hub', (req, res) => {
    req.session.data = {}
    var d = require('./data/data.json')


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

    req.session.data['frommaint'] = 'yes'
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];

    res.render(version + '/maintenance/start', {
        version,
        accountData
    });
})


// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************

// MAINTENANCE SCREENS 

// GET Requests

// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************



router.get('/' + version + '/maintenance/assessment/keep', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "keep";
    })[0];
    res.render(version + '/maintenance/assessment/keep', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/surrender', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/surrender";
    })[0];
    res.render(version + '/maintenance/assessment/outcome/surrender', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/financial', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "financial";
    })[0];
    res.render(version + '/maintenance/assessment/financial', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/refuse', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/refuse";
    })[0];
    res.render(version + '/maintenance/assessment/outcome/refuse', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/refuse-check', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/refuse-check";
    })[0];
    res.render(version + '/maintenance/assessment/outcome/refuse-check', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/name-changed', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "name-changed";
    })[0];
    res.render(version + '/maintenance/assessment/name-changed', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/name-change-required', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/name-change-required";
    })[0];
    res.render(version + '/maintenance/assessment/outcome/name-change-required', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/dob', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "dob";
    })[0];
    res.render(version + '/maintenance/assessment/dob', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/dob', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "dob";
    })[0];
    res.render(version + '/maintenance/assessment/dob', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/new-dob', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "new-dob";
    })[0];
    res.render(version + '/maintenance/assessment/new-dob', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/current-home-address', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "current-home-address";
    })[0];
    res.render(version + '/maintenance/assessment/current-home-address', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/home-address-required', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/home-address-required";
    })[0];
    res.render(version + '/maintenance/assessment/outcome/home-address-required', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/app/previousaddresses', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/previousaddresses";
    })[0];
    res.render(version + '/maintenance/app/previousaddresses', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/current-corr-address', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "current-corr-address";
    })[0];
    res.render(version + '/maintenance/assessment/current-corr-address', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/assessment/outcome/corr-address-required', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/corr-address-required";
    })[0];
    res.render(version + '/maintenance/assessment/outcome/corr-address-required', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/app/previousnames', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/previousnames";
    })[0];
    res.render(version + '/maintenance/app/previousnames', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/app/placeofbirth', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/born";
    })[0];
    res.render(version + '/maintenance/app/placeofbirth', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/app/sex', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/sex";
    })[0];
    res.render(version + '/maintenance/app/sex', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/app/dbsconsent', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/dbsconsent";
    })[0];
    res.render(version + '/maintenance/app/dbsconsent', {
        version,
        accountData,
        appJourney
    });
})

router.get('/' + version + '/maintenance/app/dbs-id', (req, res) => {
    var d = require('./data/data.json')
    var accountData = d.accounts.filter(function (value) {
        return value.accountNumber === accountNumber;
    })[0];
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/dbs-id";
    })[0];
    res.render(version + '/maintenance/app/dbs-id', {
        version,
        accountData,
        appJourney
    });
})


// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************

// MAINTENANCE SCREENS 

// POST Requests

// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************




router.post('/' + version + '/maintenance/assessment/keep', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "keep";
    })[0];
    if (req.session.data['keep-licence'] === 'no') {
        res.redirect('/' + version + appJourney.conditions[0].no);
    } else {
        res.redirect('/' + version + appJourney.conditions[0].yes);
    }
})

router.post('/' + version + '/maintenance/assessment/outcome/surrender', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/surrender";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/assessment/financial', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "financial";
    })[0];
    if (req.session.data['changed-financial'] === 'no') {
        res.redirect('/' + version + appJourney.conditions[0].no);
    } else {
        res.redirect('/' + version + appJourney.conditions[0].yes);
    }
})

router.post('/' + version + '/maintenance/assessment/outcome/refuse', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/refuse";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/assessment/outcome/refuse-check', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "outcome/refuse-check";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/assessment/name-changed', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "name-changed";
    })[0];
    if (req.session.data['same-name'] === 'yes') {
        res.redirect('/' + version + appJourney.conditions[0].yes);
    } else {
        res.redirect('/' + version + appJourney.conditions[0].no);
    }
})

router.post('/' + version + '/maintenance/assessment/outcome/name-change-required', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "name-change-required";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/assessment/dob', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "dob";
    })[0];
    if (req.session.data['dob-correct'] === 'yes') {
        res.redirect('/' + version + appJourney.conditions[0].yes);
    } else {
        res.redirect('/' + version + appJourney.conditions[0].no);
    }
})

router.post('/' + version + '/maintenance/assessment/new-dob', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "new-dob";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/assessment/current-home-address', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "current-home-address";
    })[0];
    if (req.session.data['current-home-address'] === 'no') {
        res.redirect('/' + version + appJourney.conditions[0].no);
    } else {
        res.redirect('/' + version + appJourney.conditions[0].yes);
    }
})

router.post('/' + version + '/maintenance/app/previousaddresses', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/previousaddresses";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/assessment/current-corr-address', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "current-corr-address";
    })[0];
    if (req.session.data['current-corr-address'] === 'no') {
        res.redirect('/' + version + appJourney.conditions[0].no);
    } else {
        res.redirect('/' + version + appJourney.conditions[0].yes);
    }
})

router.post('/' + version + '/maintenance/app/previousnames', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/previousnames";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/app/placeofbirth', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/born";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/app/sex', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/sex";
    })[0];
    res.redirect('/' + version + appJourney.next);
})

router.post('/' + version + '/maintenance/app/dbsconsent', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/dbsconsent";
    })[0];
    res.redirect('/' + version + appJourney.next);
})


router.post('/' + version + '/maintenance/app/dbs-id', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "app/dbs-id";
    })[0];


    if (req.session.data['dbsid']) {
        if (req.session.data['dbsid'][0] === 'iddrivers') {
            res.redirect('/' + version + appJourney.conditions[0].iddrivers);
        } else if (req.session.data['dbsid'][0] === 'idni') {
            res.redirect('/' + version + appJourney.conditions[0].idni);
        } else if (req.session.data['dbsid'][0] === 'idpassport') {
            res.redirect('/' + version + appJourney.conditions[0].idpassport);
        }
    } else {
        res.redirect('/' + version + appJourney.next);
    }
})


module.exports = router