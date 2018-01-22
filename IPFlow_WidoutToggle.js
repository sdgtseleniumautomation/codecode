	var Excel = require('exceljs');
	var XLSX = require('xlsx');
	var os = require('os');
	var TEMP_DIR = os.tmpdir();
	var wrkbook = new Excel.Workbook();

	describe('Open the clinicare website by logging into the site', function () {
	it('Add the Acyclovir medicine into the flow', function () {
	console.log("hello6");
	browser.driver.manage().window().maximize();
	var wb = XLSX.readFile('E:\\LAM WAH EE_Testing Enviornment\\IP_Medication_Flow\\Patients_Entry.xlsx');
	var ws = wb.Sheets.Sheet1;
	var wd = wb.Sheets.Sheet2;
	var json = XLSX.utils.sheet_to_json(wb.Sheets.Sheet1);
	var json2= XLSX.utils.sheet_to_json(wb.Sheets.Sheet2);
	console.log("json", json);	
			
	//var json = XLSX.utils.sheet_to_json(wb.Sheets.Sheet1);
	//console.log("json", json);
			
	for(var a = 0; a < json.length ; a++){
				console.log("Test_URL", json[a].Test_URL);
				console.log("User_Name", json[a].User_Name);
				console.log("Password", json[a].Password);
			browser.get(json[a].Test_URL); 

			//Perform Login:UserName 
			element(by.model('accessCode')).sendKeys(json[a].User_Name); 
			browser.sleep(6000);
		//	browser.driver.sleep(6000);

			//Perform Login:Password 
			element(by.model('password')).sendKeys(json[a].Password); 
			browser.sleep(6000);
			
			//Hospital Name
			element(by.cssContainingText('option', 'HLWE')).click();
			browser.sleep(6000);
			
			
			//Perform Login:LoginButton 
			element(by.css('.btn.btn-primary.pull-right')).click(); 
			browser.sleep(6000);
			
		
			//Clicking on Admitted Tab
			element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[4]/thead/tr/th[1]/i')).click();
			browser.sleep(6000);
			
			
			//Clicking on First Admitted Patient
			element(by.cssContainingText('span.clearfloat','25000')).element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[4]/tbody/tr[1]/td[1]/div[1]/img')).click();
			browser.sleep(6000);
			
			
			//Clicking on Arrow Button
			element(by.id('admitedPatientDetailsNextArrow')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			

			//Clicking on Visit List
			element(by.xpath('/html/body/div[3]/div[26]/div/div/div[2]/div/table/tbody/tr/td')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Clicking on Order Button
			element(by.id('iconOrder')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Clicking on IP Medication Tab
			element(by.id('tabIpPharmcy')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Mention the Name of the Medicine
			element(by.id('focusedInput')).sendKeys('Zeffix').element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div[1]/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li/a/strong')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Mention the Frequency of the Medicine
			element(by.name('schedule')).sendKeys('2 Times Daily').element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div[1]/div[2]/div[2]/div/div[1]/form/div/div[3]/div[1]/ul/li[1]/a/strong')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			
			//Mention the Dosage of the Medicine
			element(by.id('ipDosage')).sendKeys('1');
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Selecting Days Button
			element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div[1]/div[2]/div[2]/div/div[1]/form/div/div[3]/div[3]/div/label[1]')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Entering number of Duration
			element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div[1]/div[2]/div[2]/div/div[1]/form/div/div[3]/div[3]/div/input')).sendKeys('2');
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			
			//Selecting Window Ward
			element(by.id('opClinic')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Adding Comment
			element(by.id('ipSimpleComment')).sendKeys('Zeffix Medicine');
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			
			//Saving the medicine
			element(by.id('saveIpPharmacyOrder')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(10000);
			
			//Closing the IP Medication Page
			element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div/div/div/div[2]/div[6]/button')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Clicking on Sign In Button
			element(by.id('iconOrderSign')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Clicking on Electronic Signature
			element(by.id('signature')).sendKeys('testSign2');
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(10000);
			
			//Clicking on Sign Button
			element(by.xpath('/html/body/div[3]/div[6]/div/div/div[2]/div/div[2]/div[2]/div/div[2]/div[3]/button')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(10000);
			
			
			//Clicking on Confirm Button
			element(by.xpath('/html/body/div[3]/div[21]/div/div/div[2]/div[2]/div/div/div/button')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
				
			//Closing the Tag
			element(by.xpath('/html/body/div[3]/div[6]/div/div/div[1]/div/button')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			
			//Clicking on Order Button
			element(by.id('iconOrder')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
			browser.sleep(8000);
			
			//Clicking on IP Pharmacy Button
			element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/form/div/div[2]/div/div/div[2]/div/div/div/div[1]/h4/table/thead/tr/th/span[2]')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
			browser.sleep(10000);
			
			//Closing the Tab
			element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[1]/div/div/div/div[2]/div[6]/button')).click();
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
			browser.sleep(10000);
			
			//Clicking on Image for Logout
			//element(by.css('.user-auth-img.img-circle')).click();
			//browser.driver.sleep(2000)
	
			//Clicking on LogOut Button
			//element(by.xpath('/html/body/div[3]/div[1]/div[16]/div[1]/div/div[2]/nav/div[2]/ul/li[4]/ul/li[5]/a/span')).click();
			//browser.driver.sleep(2000)
	
			//Clicking on Ok for confirmation
			//element(by.id('logout')).click();
	
	//console.log(json[a].User_Name + "Passed the Test");
			};
			
		})
	
	});