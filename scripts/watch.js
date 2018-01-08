require('shelljs/make');

const fs = require('fs');
const path = require('path');
const util = require('util');
const watch = require('watch');
const Mustache = require("mustache");
const pkg = require('../package.json');

const targetFolder = path.resolve(pkg.buildFolder);
const repository = 'https://github.com/JelteMX/mendix-community-sass/';

const config = {
    repository,
    version: pkg.version,
    url: repository + 'releases/tag/' + pkg.version
};

const cleanFiles = () => {
    rm('-rf', path.join(targetFolder, '*'));
}

const copyFiles = () => {
    // try {
    //     cleanFiles();
    // } catch (e) {}

    cp('-r', 'src/*', targetFolder);

    const mainFile = fs.readFileSync(`src/_community.scss`, {
        encoding: "utf8"
    });
    const renderedFile = Mustache.render(mainFile, config);

    fs.writeFileSync(path.join(targetFolder, '_community.scss'), renderedFile);
}

try {
    rm('-rf', targetFolder);
    mkdir('-p', targetFolder);
} catch (e) {}

copyFiles();

watch.createMonitor('src', {
    'interval': 1
}, monitor => {
    util.log('Monitoring of folder started');
    monitor.on("created", (f, stat) => {
        util.log(`Monitor: [${f}] created`);
        copyFiles();
    });
    monitor.on("changed", (f, curr, prev) => {
        util.log(`Monitor: [${f}] changed`);
        copyFiles();
    });
    monitor.on("removed", (f, stat) => {
        util.log(`Monitor: [${f}] removed`);
        copyFiles();
    });
});
