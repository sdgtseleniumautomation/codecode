exports.config = {
    
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumAddress: 'http://sdg:sdg123@localhost:4444/wd/hub',
    //proxy=http://sdg:sdg123@192.168.1.254:8080/
    //directConnect: true,

    //browser used to open the application
    //capabilities:{
    //	'browserName': 'chrome'
    //},
    
      // frameworks to use
    frameworks: ['jasmine'],
     
// Capabilities to be passed to the webdriver instance.

  multiCapabilities: [{
    'browserName': 'chrome'
 //}, {
   // 'browserName': 'firefox'
    //
   }],
  //onPrepare: function() {
  //  browser.driver.manage().window().maximize();
  //  require('jasmine-reporters');
  //  jasmine.getEnv().addReporter(
   //   new jasmine.JUnitXmlReporter('xmloutput', true. true));
  // },
    // Spec patterns are relative to the current working directory.
  
    //specs: ['readexceldata-spec.js'],
    //specs: ['tests/HomePage.js'],    
    //specs: ['readjasondata-spec.js'],
    specs: ['todo-spec.js'],
    //specs: ['testread-spec.js'],
    framework: 'jasmine',
    jasmineNodeOpts:{
    	showColors: true, // Use Colours in command line report.
        //defaultTimeoutInterval: 60000  	
        defaultTimeoutInterval: 30000
    }
};