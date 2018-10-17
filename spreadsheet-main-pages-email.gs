function findErrors(){
  var ss = SpreadsheetApp.openById("YOU-SPREADSHEET-ID");
  var sheet = ss.getSheetByName("Log");
  var data = sheet.getDataRange().getValues();
  var norm = "200";
  for(var i = 1; i<data.length;i++){
    if(data[i][2] != norm){ //[2] because column C
      MailApp.sendEmail("YOUR-MAIL@gmail.com", "Main pages error", "We have some errors");
    }
  }
}
