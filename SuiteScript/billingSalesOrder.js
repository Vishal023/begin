var billType='invoice';
var billRecord = nlapiTransformRecord('salesorder', 45438, billType); 
var id= nlapiSubmitRecord( billRecord,true ); 
nlapiLogExecution('DEBUG',' billedInvoice:'+id);//id : 45443