function statusLogger() {
  var ss = SpreadsheetApp.openById("YOUR-SPREADSHEET-ID");
  var sheet = ss.getSheetByName("Log");
  var pages = runGoogleSheet();
  for (var page in pages) {
    var checkPage = pages[page];
    var lastRow = CountColA() + 1;
    Logger.log(lastRow);
    var response = UrlFetchApp.fetch(checkPage);
    var status = response.getResponseCode();
    var curDate = Utilities.formatDate(new Date(), "GMT+3", "yyyy-MM-dd'T'HH:mm:ss");
    //Get data by Regexp
    var myRegexp = /<span class="obj-count-span"><span>([\s\S]*?)<\/span><\/span>/gi;
    var elems = response.getContentText().match(myRegexp);
    for(var i in elems) {
      var title = elems[i].replace(/<span class="obj-count-span"><span>/gi, "").replace(/<\/span><\/span>/gi, "");
    }
    sheet.getRange(lastRow,1).setValue(curDate);
    sheet.getRange(lastRow,2).setValue(checkPage);
    sheet.getRange(lastRow,3).setValue(status);
    sheet.getRange(lastRow,4).setValue(title);
  }
}

function runGoogleSheet(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Pages");
  //getDataRange returns the range of all present values
  var data = sheet.getDataRange();
  //we then use the dataRange to get all of the data values 
  var values = data.getValues();
  //values = [][];
  return values;
}

function CountColA() {
  var ss = SpreadsheetApp.openById("YOUR-SPREADSHEET-ID");
  var sheet = ss.getSheetByName("Log");
  var data = sheet.getDataRange().getValues();
  for(var i = data.length-1 ; i >=0 ; i--){
    if (data[i][0] != null && data[i][0] != ''){
      return i+1 ;
    }
  }
}
