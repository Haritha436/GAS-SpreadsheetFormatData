function copyLastToLast() 
{
  //Get first sheet from spreadsheet and get the last row values.
  var ss=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("1DomainToEmailToText");
  var srg=ss.getRange(ss.getLastRow(),1,1,ss.getLastColumn());  
  //change the number 1 above to skip rows that don't have a value in a column when searching for a changed value e.g. set to 1 it is looking for changes in column B.
  var svA=srg.getValues();
  Logger.log('Lenght of last row:'+svA[0].length);
  
  //Get second sheet from spreadsheet.
  var tss=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TextOutput");
  var tb = tss.getRange(ss.getLastRow(),2,1,svA[0].length);
  //change the first number in this get range (and the one in line 4 too) to change which column it starts copying the data from e.g. currently it's copying from the first column e.g. column A.
  var svB = tb.getValues();
    
  Logget.log('Copy only the Non empty values to second shee starting from column B.');
  var j = 0;
  for(var i = 0; i < svA[0].length; i++){
    Logger.log('element: %s ', svA[0][i]);
    if(svA[0][i] != '')
    {
      svB[0][j++]=svA[0][i];
    }
  }  
  tb.setValues(svB);
  Logger.log('actual length after removing null values: %s ', j);
 
}
