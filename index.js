var fs = require('fs'),
    webPage = require('webpage'),
    page = webPage.create(),
    minimist = require('minimist'),
    system = require('system'),
    argv = minimist(system.args),
    Promise = require('bluebird'),
    waitFor = require('./lib/phantomjs-wait-for');

var url = argv['url'];
if (!url) {
  console.error('Must provide a url option');
  phantom.exit();
}

var waitForList;
waitForList = argv['wait-for'] || 'html';
waitForList = waitForList.split(',');

var name = argv['name'] || 'page';
var outputPath = './output/'+name+'.html';

page.open(url, function(status) {
  return Promise.map(waitForList, waitForAsync)
    .then(function() {
      fs.write(outputPath, page.content, 'w');
      console.log('Successfully scraped webpage to "'+outputPath+'"');
    })
    .finally(phantom.exit);
});

function waitForAsync(selector) {
  return new Promise(function(resolve) {
    var condition = function() {
      var condStr = "page.evaluate(function() { return !!document.querySelector(\""+selector+"\"); });";
      return eval(condStr);
    }

    waitFor(condition, resolve);
  });
}
