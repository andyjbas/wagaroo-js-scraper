function waitFor(testFx, onReady) {
  var self = this;
  var maxtimeOutMillis = 10000,
      start = new Date().getTime(),
      condition = false,
      interval = setInterval(function() {
        if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
          condition = (typeof(testFx) === "string" ? eval(testFx) : testFx());
        } else {
          if(!condition) {
            console.log("'waitFor()' timeout");
            phantom.exit(1);
          } else {
            console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
            typeof(onReady) === "string" ? eval(onReady) : onReady();
            clearInterval(interval);
          }
        }
      }, 250);
};

module.exports = waitFor;
