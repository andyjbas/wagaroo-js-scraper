var fs = require('fs'),
    webPage = require('webpage'),
    page = webPage.create();

page.open('http://www.michiganhumane.org/adoption/dogs', function(status) {
  // A more appropriate approach would be to wait for specific elements on the page
  // to finish loading, therefore signifying a complete load and removing the need
  // for an explicit timeout.
  setTimeout(function() {
    fs.write('./page.html', page.content, 'w');
    console.log('Successfully scraped webpage to "./page.html"');
    phantom.exit();
  }, 10000);
});

