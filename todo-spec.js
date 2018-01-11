
var readtestdata=require('./readjasondata.json');
 
 'use strict'
// Testsuite 
describe('Protractor Trial Testsuite', function() {
 
  var a,b,c;
  var previuoscount;
  
  //Block which should execute before each test case
  beforeEach(function(){
   
   //browser.get('https://sdg:sdg123@angularjs.org');
   browser.get('https://angularjs.org');
   //To verify the page title
   expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');

   //My Angulajs
  });

  //Testcase 1
  it('should add a todo', function() {
    console.log('\n 1st test started');
    a=true;
    expect(a).toBe(true);
    a=1;
    b=2;
    
    c=a+b;
    console.log('\t\tsum is ', +c);
    console.log('\n\t1 st passed');
  
    }); 
    
   //Testcase 2
   it('2nd test', function() {
    console.log('\n 2 nd test started');
    x=true;
    expect(x).toBe(true);
    console.log('\nx is true');
    console.log('\n\t2nd test passed');
  
    });
   
  afterEach(function(){
      console.log('\nend of test')
  });

  });






