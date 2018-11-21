function beforeSubmit_test(type) {
    var Type = nlapiGetRecordType();
    nlapiLogExecution('DEBUG',
        ' type:' + type + ', RecordType: ' + Type);
} 