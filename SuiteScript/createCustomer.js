var obj = nlapiCreateRecord('customer');

obj.setFieldValue('subsidiary', 3);  
obj.setFieldValue('isperson', 'F');

obj.setFieldValue('customcustentity_cust_priority',50);
obj.setFieldValue('companyname','test' );
obj.setFieldValue('entitystatus',  13);


var id = nlapiSubmitRecord(obj); 
nlapiLogExecution('DEBUG',' CustObj:'+id); // 5516