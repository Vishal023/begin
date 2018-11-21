function postRecord(params){
    var record = nlapiCreateRecord(params.recordtype);
    record.setFieldValue('itemid',params.itemId);
    record.setFieldValue('costingmethod',params.costingMethod) ;
    var id = nlapiSubmitRecord(record, true);
    return id;
}//params{recordtype,itemid,costingmethod}

function deleteRecord(params){
    var resu=nlapiDeleteRecord(params.recordtype,params.id);
    return resu;
}

function getRecord(datain) {
    return nlapiLoadRecord(datain.recordtype, datain.id);
    // e.g recordtype="customer", id=769
}

function putRec(params){

}
