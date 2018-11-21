this.run = function(req, res) {
    var itemFulfillment = nlapiTransformRecord('salesorder', 45438, 'itemfulfillment');
    
    //setting location for already present item in sales order
  itemFulfillment.selectLineItem('item',1);
  itemFulfillment.setCurrentLineItemValue('item', 'item', 3678);
  itemFulfillment.setCurrentLineItemValue('item', 'location', 7);
  itemFulfillment.commitLineItem('item');

  var id = nlapiSubmitRecord(itemFulfillment, true);
  nlapiLogExecution('DEBUG', ' fulfillObj:' + id); //45442
res.write(id)
}