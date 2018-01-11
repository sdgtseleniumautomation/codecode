'use strict';
  
 

var workbook = new Excel.Workbook();
    describe('Reading Test Data from Jason File', function() {
   
  //Data Driven foreach to read all data from json file
    
    it('addition in loop by reading data from excel', function() {
    
workbook.xlsx.readFile("protractortestdat.xlsx").then(function () {
            
//Get sheet by Name
var worksheet=workbook.getWorksheet('Test_URL');
            
//Get Lastrow
var row = worksheet.lastRow;
//console.log('url is ');

//Update a cell
row.getCell(1).value = 5;

row.commit();
console.log('a');
console.log(row.getCell(1));
 
// 
//Save the workbook
return workbook.xlsx.writeFile("protractortestdat.xlsx");
//console.log('url is ', +row);
 
});    
});  
});
  