var record = nlapiCreateRecord('salesorder');
record.setFieldValue('entity', 5516);
record.setFieldValue('subsidiary',3);
record.setLineItemValue('item', 'item', 1, 3678);
record.setLineItemValue('item', 'amount', 1, 500);
record.setFieldValue('shippingcost', 12);

var id = nlapiSubmitRecord(record, true);
nlapiLogExecution('DEBUG',' salesOrder:'+id);//id : 45438