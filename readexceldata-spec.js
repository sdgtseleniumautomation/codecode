'use strict';
var readtestdata=require.resolve('./protractortestdat.xlsx');
//require.resolve("./test") D:\dev\foo\test.js
//require("path").resolve("test.js") d:\dev\foo\test.js  
// Testsuite 
describe('Reading Test Data from Jason File', function() {
  
  //Data Driven foreach to read all data from json file
    readtestdata.forEach( function(data){
    it('Read Test data from excel file useing exceljs package', function() {
     var wrkbook = new Excel.Workbook();

     wrkbook.xlsx.readFile('protractortestdat.xlsx').then(function() 
    {

      var worksheet = wrkbook.getWorksheet('');


      worksheet.eachRow(function (Row, rowNumber) 
    {

      //console.log("Row " + rowNumber + " = " + JSON.stringify(Row.values));
      console.log("Row " + 1 + " = " + JSON.stringify(A2));
    });


    });
    console.log('end of file');    
    });  
    });
  }); 




