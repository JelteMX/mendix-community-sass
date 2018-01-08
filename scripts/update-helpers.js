require('shelljs/make');

const pkg = require('../package.json');
const https = require('follow-redirects').https;
const AdmZip = require('adm-zip');
const fs = require('fs');

const tmpPath = 'sass-helpers.zip';
const version = pkg['sass-helpers-version'];
const fileUrl = `https://github.com/JelteMX/sass-helpers/releases/download/${version}/helpers.zip`;

https.get(fileUrl, res => {
    res.on('data', data => {
        fs.appendFileSync(tmpPath, data);
    });
    res.on('end', () => {
        const zip = new AdmZip(tmpPath);
        zip.extractAllTo('src/community/helpers/', true);
        fs.unlinkSync(tmpPath);
    })
})
