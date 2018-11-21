
function createInvItm(){

    var record = nlapiCreateRecord('inventoryitem');
    record.setFieldValue('itemid','VJ_SS_InvtItm_Test');
    record.setFieldValue('costingmethod','AVG') ;
    return record;
}

function submitItem(record){
    var id = nlapiSubmitRecord(record, true); 
    nlapiLogExecution('DEBUG',' nlapiSubmitRecord:'+id);//id : 3678
}

var inventoryItem=createInvItm();
submitItem(inventoryItem);



