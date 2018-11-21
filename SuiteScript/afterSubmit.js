function afterSubmit_test(type) {
    var Id = nlapiGetRecordId();
    nlapiLogExecution('DEBUG',
        ' type:' + type + ', Id: ' + Id);
}