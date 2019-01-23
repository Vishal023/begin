var assert = require('assert');
var nock = require('nock')
var xmlBeauty = require('xml-beautifier');
const request = require('request')

var XmlParser = require('../q1.js');
var JsonToXmlConvert = require('../q2.js')
describe('UnitTestCases started:', function () {
    describe('"XMLtoJSON parse" testCase:', function () {
        it('should return JSON object.', function () {
            var json = { "root": { "name": "outer", "attributes": {}, "children": [{ "name": "innerItem1", "attributes": {}, "children": [], "content": "inner1Value" }, { "name": "innItm2", "attributes": {}, "children": [{ "name": "inInnItm2", "attributes": {}, "children": [], "content": "in side innItm2 - a" }, { "name": "inInnItm2", "attributes": {}, "children": [], "content": "in side innItm2 - b" }], "content": "inner2Value" }], "content": "outerValue" } }
            assert.equal(JSON.stringify(new XmlParser().parse('./test12.xml')),
                JSON.stringify(json),
                "The JSON match failed."
            );
        });
    })
    describe('"JSON to XML parse" testCase:', function () {
        it('should return JSON object.', function () {
            var xmlsource =
                `<products>
         <product>
             <baseId>1</baseId>
             <features>
                 <feature>parent</feature>
                 <feature>first entry</feature>
             </features>
             <isActive>true</isActive>
             <contentType>
                  <contentTypeValue>pure</contentTypeValue>
                  <contentTypeValue>mix</contentTypeValue>
             </contentType>
             <childProducts>
                 <childProduct>
                     <baseId>1-1</baseId>
                     <isActive>true</isActive>
                 </childProduct>
                 <childProduct>
                     <baseId>1-2</baseId>
                     <isActive>false</isActive>
                 </childProduct>
                 <childProduct>
                     <baseId>1-3</baseId>
                     <isActive>true</isActive>
                 </childProduct>
                 <childProduct>
                     <baseId>1-4</baseId>
                     <isActive>true</isActive>
                     <features>
                         <feature>parent</feature>
                         <feature>first entry</feature>
                     </features>
                     <searchTerms>
                         <searchTermValue>glue</searchTermValue>
                         <searchTermValue>adhesive</searchTermValue>
                         <searchTermValue>stick</searchTermValue>
                     </searchTerms>
                 </childProduct>
             </childProducts>
         </product>
         <product>
             <baseId>10</baseId>
             <isActive>true</isActive>
             <searchTerms>
                 <searchTermValue>glue</searchTermValue>
                 <searchTermValue>adhesive</searchTermValue>
                 <searchTermValue>stick</searchTermValue>
             </searchTerms>
             <childProducts>
                 <childProduct>
                     <baseId>10-1</baseId>
                     <isActive>true</isActive>
                     <searchTerms>
                         <searchTermValue>glue</searchTermValue>
                     </searchTerms>
                 </childProduct>
                 <childProduct>
                     <baseId>10-2</baseId>
                     <isActive>false</isActive>
                 </childProduct>
                 <childProduct>
                     <baseId>10-3</baseId>
                     <isActive>true</isActive>
                 </childProduct>
                 <childProduct>
                     <baseId>10-4</baseId>
                     <isActive>true</isActive>
                 </childProduct>
             </childProducts>
         </product>
      </products>`
            assert.equal(xmlBeauty(JsonToXmlConvert()),
                xmlBeauty(xmlsource),
                "The XML match failed."
            );
        });
    })

    describe('http test resp body', function () {
        before(function (done) {
            nock('http://www.mocky.io/v2')
                .get('/5c3ed22535000055003e99c2')
                .reply(200, { "sample": "test" });
            done()
        })

        after(function (done) {
            nock.cleanAll()
            done()
        })
        it('should get expected response body', function (done) {

            var expectedRespBody = { "sample": "test" }
            request('http://www.mocky.io/v2/5c3ed22535000055003e99c2', function (error, response, body) {

                assert.equal(response.body, JSON.stringify(expectedRespBody), "test failed request")
                done()
            })
        })
    })
    describe('http test resp code', function () {
        before(function (done) {
            nock('http://www.mocky.io/v2')
                .get('/5c3ed22535000055003e99c2')
                .reply(200, { "sample": "test" });
            done()
        })

        after(function (done) {
            nock.cleanAll()
            done()
        })
        it('should get expected response code', function (done) {

            var expectedRespBody = 200
            request('http://www.mocky.io/v2/5c3ed22535000055003e99c2', function (error, response, body) {
                assert.equal(response.statusCode, expectedRespBody, "test failed request response")
                done()
            })
        })
    })

    describe('http request error', function () {
        before(function (done) {
            nock('http://www.mocky.io/v2')
                .get('/5c3ed22535000055003e99c2')
                .replyWithError({ 'message': 'something awful happened', 'code': 'AWFUL_ERROR' })
            done()
        })

        after(function (done) {
            nock.cleanAll()
            done()
        })
        it('should get expected error', function (done) {

            var expectedRespBody = "something awful happened"
            request('http://www.mocky.io/v2/5c3ed22535000055003e99c2', function (error, response, body) {
                assert.equal(error.message, expectedRespBody, "Error resp test case failed.")
                done()
            })
        })
    })

});