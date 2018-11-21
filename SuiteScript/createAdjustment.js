var obj = nlapiCreateRecord('inventoryadjustment');

obj.setFieldValue('subsidiary', 3);  //UK   
obj.setFieldValue('account', 201);

obj.selectNewLineItem('inventory');
obj.setCurrentLineItemValue('inventory', 'item', 3678);// itemid 3678 -  VJ_SS_InvtItm_Test(inventory item)
obj.setCurrentLineItemValue('inventory', 'location', 6);
obj.setCurrentLineItemValue('inventory', 'line', 1);
obj.setCurrentLineItemValue('inventory', 'newquantity', 1);
obj.setCurrentLineItemValue('inventory', 'adjustqtyby', 1);
obj.setCurrentLineItemValue('inventory', 'unitcost', 30);

obj.commitLineItem('inventory');

var id = nlapiSubmitRecord(obj); 
nlapiLogExecution('DEBUG',' AdjObj:'+id);//45437