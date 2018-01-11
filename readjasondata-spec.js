'use strict';
var readtestdata=require('./readjasondata.json');
  
// Testsuite 
describe('Reading Test Data from Jason File', function() {
 
   var a,b;
  
  
  //Data Driven foreach to read all data from json file
    readtestdata.forEach( function(data){
    it('addition in loop by reading data from excel', function() {
    
    
    console.log('value of a ' +data.a);
    console.log('value of a ' +data.b);
    
    });  
    });
  }); 






