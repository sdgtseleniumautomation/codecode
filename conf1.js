var HtmlScreenshotReporter = require('protractor-jasmine2-html-reporter');
  var today = new Date(),
  timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
  // var reporter = new HtmlScreenshotReporter({
    // pathBuilder: function(currentSpec, suites, browserCapabilities) {
    // },
    // metadataBuilder: function(currentSpec, suites, browserCapabilities){
		// return { id: currentSpec.id, os: browserCapabilities.get('browserName',
		// ),
    // //savePath: './test/report', 
    // fileNamePrefix: 'Long',
    // filename: 'my-report.html',
    // fileNameSeparator: '_',
    // cleanDestination: false,
    // showSummary: true,
    // showQuickLinks: true,
    // showConfiguration: true,
    // fileNameSuffix: timeStamp,
    // consolidate: false,
    // consolidateAll: false,
	    // }
	  // }
	   
	    // });

 exports.config = {
    capabilities: {'browserName': 'chrome'},
    specs: ['.js'],  
    jasmineNodeOpts: {showColors: true, // Use colors in the command line report.
    },	 
	onPrepare: function () {
		return browser.getCapabilities().then(function (caps) {
			var sessionId = caps.get('webdriver.remote.sessionId');
			var date = Date.now();
			jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
				savePath: './reports/date- ' + date,
				pathBuilder: function (currentSpec, suites, browserCapabilities) {
				},
				metadataBuilder: function (currentSpec, suites, browserCapabilities) {
					return {
						// id: currentSpec.id, os: browserCapabilities.get('browserName',
						// ),
						//savePath: './test/report' + sessionId,
						fileNamePrefix: 'Long',
						filename: 'my-report.html',
						fileNameSeparator: '_',
						cleanDestination: false,
						showSummary: true,
						showQuickLinks: true,
						showConfiguration: true,
						fileNameSuffix: timeStamp,
						consolidate: false,
						consolidateAll: false
					}
				}
			}));
		});
	}
  };
  
  
 
  
//-------------------------------------------------------------------------------------------------------------	
	
 // var HtmlReporter = require('protractor-jasmine2-html-reporter');

// var reporter = new HtmlReporter({
    // plugins: [{
    // package: 'jasmine2-protractor-utils',
    // showSummary: true,
    // reportTitle: "Clinicare Report",
    // filename: 'Clinicarereport.html',
    // disableHTMLReport: false,//disableHTMLReport
    // disableScreenshot: false,
    // captureOnlyFailedSpecs: false,
    // screenshotPath:'./reports/screenshots',
    // screenshotOnExpectFailure:true,
    // screenshotOnSpecFailure:true,
    // dest: 'protractor-reports',
    // filename: 'protractor-report.html',
    // takeScreenshots: true,
    // ignoreSkippedSpecs: true,
    // takeScreenshotsOnlyOnFailures: false,
// //	screenshotsFolder: 'F:\\Screeshots'
    // }]
// });             
// exports.config = 
// {

    // directconnect: true,
    // capabilities: {'browserName': 'chrome'},
    // framework: 'jasmine',
    // specs: ['example1.js'],
    // jasmineNodeOpts: {
    // defaultTimeoutInterval: 300000
// },
// onPrepare: function() {
// // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      // jasmine.getEnv().addReporter(reporter);     
  // }
  // }
