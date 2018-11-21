
var filters = new Array();
filters[0] = new nlobjSearchFilter( 'type', 'transaction', 'anyof', 'InvReval' );
filters[1] = new nlobjSearchFilter( 'created', 'custitem_celigo_etail_channel', "within", "fiscalhalfbeforelasttodate" );

// Define return columns
var columns = new Array();
columns[0] = new nlobjSearchColumn( 'trandate' ,"transaction","GROUP").setSort();
columns[1] = new nlobjSearchColumn( 'location' ,"transaction","GROUP");
columns[2] = new nlobjSearchColumn( 'Item' ,"transaction","GROUP");
columns[3] = new nlobjSearchColumn( 'costcomponentstandardcost','transaction', "SUM");
// Create the saved search
var search = nlapiCreateSearch( 'item', filters, columns );
var searchId = search.saveSearch('Any of InvReval with in last half of fiscal year', 'customsearch_kr');

