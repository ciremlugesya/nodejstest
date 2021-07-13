const assert = require('assert');
const mongoose = require('mongoose');
const ShippingCompanyLog = require('../models/shippingcompanylog');
const Retry = require('../models/shippingcompanylog');
// describe tests

describe('shippingcompanylog records', function(){

/*  beforeEach(function(done){
    mongoose.connection.collections.shippingcompanylog.drop(function(){
      done();
    });
  });
*/

    //create tests
/*
    it('creates a shippingcompanylog with sub-documents', function(done){
      var pat = new ShippingCompanyLog({
        ShippingCompanyId: 1,
        OrderId:  1,
        RequestType:  '2', // sendshipmentinfo
        RequestStatus: 'pending',
        RequestDate:  '2021-07-08',
        RetryCount: 0,
        RetryDate: null,
        UserId: 1,
        RequestData: '<?xml version=\"1.0\" encoding=\"utf-16\"?><ShipmentInformation xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><ShippingCompanyId>1</ShippingCompanyId><OrderNumber>2106250513001</OrderNumber><ShippingListId>1488873963</ShippingListId><ShippingListNo>5106250513001</ShippingListNo><CurrencyCode>TL</CurrencyCode><CustomerId>5047236</CustomerId><CustomerEmail>benan.oz@lcwaikiki.com</CustomerEmail><OrderId>1</OrderId><GrandTotal>139.9700</GrandTotal><PaymentAmount>139.9700</PaymentAmount><CashOnDeliveryPaymentAmount>0</CashOnDeliveryPaymentAmount><TotalPaymentAmount>139.9700</TotalPaymentAmount><ShippingPrice>0.0000</ShippingPrice><IsCashOnDelivery>false</IsCashOnDelivery><InvoiceNumber>9992021216689883</InvoiceNumber><ECommerceToShippingCompanyCurrencyRate>1.00000</ECommerceToShippingCompanyCurrencyRate><ConsigneeAddress><FullName>Benan ÖZ</FullName><Address>Fulya Mh. test dsds</Address><RegionId xsi:nil=\"true\" /><RegionName /><DistrictId xsi:nil=\"true\" /><DistrictName /><CityId>34</CityId><CityName>İstanbul</CityName><CountyId>83117</CountyId><CountyName>Şişli</CountyName><NeighborhoodName>Fulya Mh.</NeighborhoodName><StreetTypeId xsi:nil=\"true\" /><StreetTypeName /><StreetId xsi:nil=\"true\" /><StreetName /><PostalCode /><CountryId>1</CountryId><CountryCode>TR</CountryCode><CountryName>Türkiye</CountryName><PhoneNumber>05395852424</PhoneNumber><MobilePhoneNumber /><SaleOrderShippingAddressId>1</SaleOrderShippingAddressId><House /><Flat /><ExternalAddressDefinition /></ConsigneeAddress><Packages><ShipmentInfoPackage><ShippingListPackageId>1</ShippingListPackageId><Weight>0.23</Weight><VolumetricWeight>4</VolumetricWeight><Barcode>51062505130011</Barcode><Items><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388734408</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>XXL-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>79.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3886719&amp;optionId=653976</ProductUrl><SalePrice>74.064814814814814814814814815</SalePrice><SalePriceTaxAmount>5.925185185185185185185185185</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388442846</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>4-5 Yaş-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>49.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3807713&amp;optionId=634081</ProductUrl><SalePrice>46.287037037037037037037037037</SalePrice><SalePriceTaxAmount>3.702962962962962962962962963</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388821818</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>0-1 Ay-</ProductSize><ProductDescription>Çıtçıtlı Body</ProductDescription><UnitPrice>9.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3735705&amp;optionId=648388</ProductUrl><SalePrice>9.25</SalePrice><SalePriceTaxAmount>0.7400</SalePriceTaxAmount></ShipmentInfoPackageItem></Items></ShipmentInfoPackage></Packages><RequestId>0</RequestId><LcwMoneyPaymentAmount>0</LcwMoneyPaymentAmount><IsShippingWithTryOn>false</IsShippingWithTryOn><TryOnFee>0</TryOnFee></ShipmentInformation>',
        ResponseData: {
          ShippingListId: 1,
          ResponseDate: '2021-07-08',
          ResponseStatus : '2',
          ResultCode : '0',
          ResultMessage : 'Başarılı',
          InvoiceKey : '5106250513001',
          OrgReceiverCustId : '5106250513001'
        }

      });

      pat.save().then(function(){
        ShippingCompanyLog.findOne({OrderId: 1 }).then(function(record){
          assert(record.ResponseData.length === 1);
          done();
        });
      });
    });
*/

    it('Adds a Retries to a shippingcompanylog', function(done){

      var pat = new ShippingCompanyLog({
        ShippingCompanyId: 1,
        OrderId:  3,
        RequestType:  '2', // sendshipmentinfo
        RequestStatus: 'pending',
        RequestDate:  '2021-07-08',
        RetryCount: 0,
        RetryDate: null,
        UserId: 1,
        RequestData: '<?xml version=\"1.0\" encoding=\"utf-16\"?><ShipmentInformation xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><ShippingCompanyId>1</ShippingCompanyId><OrderNumber>2106250513001</OrderNumber><ShippingListId>1488873963</ShippingListId><ShippingListNo>5106250513001</ShippingListNo><CurrencyCode>TL</CurrencyCode><CustomerId>5047236</CustomerId><CustomerEmail>benan.oz@lcwaikiki.com</CustomerEmail><OrderId>1</OrderId><GrandTotal>139.9700</GrandTotal><PaymentAmount>139.9700</PaymentAmount><CashOnDeliveryPaymentAmount>0</CashOnDeliveryPaymentAmount><TotalPaymentAmount>139.9700</TotalPaymentAmount><ShippingPrice>0.0000</ShippingPrice><IsCashOnDelivery>false</IsCashOnDelivery><InvoiceNumber>9992021216689883</InvoiceNumber><ECommerceToShippingCompanyCurrencyRate>1.00000</ECommerceToShippingCompanyCurrencyRate><ConsigneeAddress><FullName>Benan ÖZ</FullName><Address>Fulya Mh. test dsds</Address><RegionId xsi:nil=\"true\" /><RegionName /><DistrictId xsi:nil=\"true\" /><DistrictName /><CityId>34</CityId><CityName>İstanbul</CityName><CountyId>83117</CountyId><CountyName>Şişli</CountyName><NeighborhoodName>Fulya Mh.</NeighborhoodName><StreetTypeId xsi:nil=\"true\" /><StreetTypeName /><StreetId xsi:nil=\"true\" /><StreetName /><PostalCode /><CountryId>1</CountryId><CountryCode>TR</CountryCode><CountryName>Türkiye</CountryName><PhoneNumber>05395852424</PhoneNumber><MobilePhoneNumber /><SaleOrderShippingAddressId>1</SaleOrderShippingAddressId><House /><Flat /><ExternalAddressDefinition /></ConsigneeAddress><Packages><ShipmentInfoPackage><ShippingListPackageId>1</ShippingListPackageId><Weight>0.23</Weight><VolumetricWeight>4</VolumetricWeight><Barcode>51062505130011</Barcode><Items><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388734408</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>XXL-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>79.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3886719&amp;optionId=653976</ProductUrl><SalePrice>74.064814814814814814814814815</SalePrice><SalePriceTaxAmount>5.925185185185185185185185185</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388442846</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>4-5 Yaş-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>49.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3807713&amp;optionId=634081</ProductUrl><SalePrice>46.287037037037037037037037037</SalePrice><SalePriceTaxAmount>3.702962962962962962962962963</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388821818</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>0-1 Ay-</ProductSize><ProductDescription>Çıtçıtlı Body</ProductDescription><UnitPrice>9.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3735705&amp;optionId=648388</ProductUrl><SalePrice>9.25</SalePrice><SalePriceTaxAmount>0.7400</SalePriceTaxAmount></ShipmentInfoPackageItem></Items></ShipmentInfoPackage></Packages><RequestId>0</RequestId><LcwMoneyPaymentAmount>0</LcwMoneyPaymentAmount><IsShippingWithTryOn>false</IsShippingWithTryOn><TryOnFee>0</TryOnFee></ShipmentInformation>',
        ResponseData: [{
          ShippingListId: 1,
          ResponseDate: '2021-07-08',
          ResponseStatus : '1',
          ResultCode : '0',
          ResultMessage : 'Başarısız',
          InvoiceKey : '5106250513001',
          OrgReceiverCustId : '5106250513001'
        }],
        Retries: [{
          ShippingCompanyId: 1,
          OrderId:  3,
          RequestType:  '2', // sendshipmentinfo
          RequestStatus: 'ok',
          RequestDate:  '2021-07-08',
          RetryCount: 1,
          RetryDate: '2021-07-08',
          UserId: 1,
          RequestData: '<?xml version=\"1.0\" encoding=\"utf-16\"?><ShipmentInformation xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><ShippingCompanyId>1</ShippingCompanyId><OrderNumber>2106250513001</OrderNumber><ShippingListId>1488873963</ShippingListId><ShippingListNo>5106250513001</ShippingListNo><CurrencyCode>TL</CurrencyCode><CustomerId>5047236</CustomerId><CustomerEmail>benan.oz@lcwaikiki.com</CustomerEmail><OrderId>1</OrderId><GrandTotal>139.9700</GrandTotal><PaymentAmount>139.9700</PaymentAmount><CashOnDeliveryPaymentAmount>0</CashOnDeliveryPaymentAmount><TotalPaymentAmount>139.9700</TotalPaymentAmount><ShippingPrice>0.0000</ShippingPrice><IsCashOnDelivery>false</IsCashOnDelivery><InvoiceNumber>9992021216689883</InvoiceNumber><ECommerceToShippingCompanyCurrencyRate>1.00000</ECommerceToShippingCompanyCurrencyRate><ConsigneeAddress><FullName>Benan ÖZ</FullName><Address>Fulya Mh. test dsds</Address><RegionId xsi:nil=\"true\" /><RegionName /><DistrictId xsi:nil=\"true\" /><DistrictName /><CityId>34</CityId><CityName>İstanbul</CityName><CountyId>83117</CountyId><CountyName>Şişli</CountyName><NeighborhoodName>Fulya Mh.</NeighborhoodName><StreetTypeId xsi:nil=\"true\" /><StreetTypeName /><StreetId xsi:nil=\"true\" /><StreetName /><PostalCode /><CountryId>1</CountryId><CountryCode>TR</CountryCode><CountryName>Türkiye</CountryName><PhoneNumber>05395852424</PhoneNumber><MobilePhoneNumber /><SaleOrderShippingAddressId>1</SaleOrderShippingAddressId><House /><Flat /><ExternalAddressDefinition /></ConsigneeAddress><Packages><ShipmentInfoPackage><ShippingListPackageId>1</ShippingListPackageId><Weight>0.23</Weight><VolumetricWeight>4</VolumetricWeight><Barcode>51062505130011</Barcode><Items><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388734408</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>XXL-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>79.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3886719&amp;optionId=653976</ProductUrl><SalePrice>74.064814814814814814814814815</SalePrice><SalePriceTaxAmount>5.925185185185185185185185185</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388442846</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>4-5 Yaş-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>49.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3807713&amp;optionId=634081</ProductUrl><SalePrice>46.287037037037037037037037037</SalePrice><SalePriceTaxAmount>3.702962962962962962962962963</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388821818</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>0-1 Ay-</ProductSize><ProductDescription>Çıtçıtlı Body</ProductDescription><UnitPrice>9.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3735705&amp;optionId=648388</ProductUrl><SalePrice>9.25</SalePrice><SalePriceTaxAmount>0.7400</SalePriceTaxAmount></ShipmentInfoPackageItem></Items></ShipmentInfoPackage></Packages><RequestId>0</RequestId><LcwMoneyPaymentAmount>0</LcwMoneyPaymentAmount><IsShippingWithTryOn>false</IsShippingWithTryOn><TryOnFee>0</TryOnFee></ShipmentInformation>',
          ResponseData: [{
            ShippingListId: 1,
            ResponseDate: '2021-07-08',
            ResponseStatus : '2',
            ResultCode : '0',
            ResultMessage : 'Başarılı',
            InvoiceKey : '5106250513001',
            OrgReceiverCustId : '5106250513001'
          }]
        }]
      });
      /*
          var pat = new Author({
            name: 'Patrick Rothfuss',
            books:[{ title: 'Name of the Wind', pages: 400 }]
          });

          pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
              // add a book to the books array
              record.books.push({title: "Wise Man's Fear", pages: 500});
              record.save().then(function(){
                Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){
                  assert(record.books.length === 2);
                  done();
                });
              });


            });
          });
      */
      pat.save().then(function(){
        ShippingCompanyLog.findOne({OrderId : 3}).then(function(record){
          record.Retries.push({
            ShippingCompanyId: 1,
            OrderId:  3,
            RequestType:  '2', // sendshipmentinfo
            RequestStatus: 'okkkk',
            RequestDate:  '2021-07-08',
            RetryCount: 1,
            RetryDate: '2021-07-08',
            UserId: 1,
            RequestData: '<?xml version=\"1.0\" encoding=\"utf-16\"?><ShipmentInformation xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><ShippingCompanyId>1</ShippingCompanyId><OrderNumber>2106250513001</OrderNumber><ShippingListId>1488873963</ShippingListId><ShippingListNo>5106250513001</ShippingListNo><CurrencyCode>TL</CurrencyCode><CustomerId>5047236</CustomerId><CustomerEmail>benan.oz@lcwaikiki.com</CustomerEmail><OrderId>1</OrderId><GrandTotal>139.9700</GrandTotal><PaymentAmount>139.9700</PaymentAmount><CashOnDeliveryPaymentAmount>0</CashOnDeliveryPaymentAmount><TotalPaymentAmount>139.9700</TotalPaymentAmount><ShippingPrice>0.0000</ShippingPrice><IsCashOnDelivery>false</IsCashOnDelivery><InvoiceNumber>9992021216689883</InvoiceNumber><ECommerceToShippingCompanyCurrencyRate>1.00000</ECommerceToShippingCompanyCurrencyRate><ConsigneeAddress><FullName>Benan ÖZ</FullName><Address>Fulya Mh. test dsds</Address><RegionId xsi:nil=\"true\" /><RegionName /><DistrictId xsi:nil=\"true\" /><DistrictName /><CityId>34</CityId><CityName>İstanbul</CityName><CountyId>83117</CountyId><CountyName>Şişli</CountyName><NeighborhoodName>Fulya Mh.</NeighborhoodName><StreetTypeId xsi:nil=\"true\" /><StreetTypeName /><StreetId xsi:nil=\"true\" /><StreetName /><PostalCode /><CountryId>1</CountryId><CountryCode>TR</CountryCode><CountryName>Türkiye</CountryName><PhoneNumber>05395852424</PhoneNumber><MobilePhoneNumber /><SaleOrderShippingAddressId>1</SaleOrderShippingAddressId><House /><Flat /><ExternalAddressDefinition /></ConsigneeAddress><Packages><ShipmentInfoPackage><ShippingListPackageId>1</ShippingListPackageId><Weight>0.23</Weight><VolumetricWeight>4</VolumetricWeight><Barcode>51062505130011</Barcode><Items><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388734408</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>XXL-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>79.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3886719&amp;optionId=653976</ProductUrl><SalePrice>74.064814814814814814814814815</SalePrice><SalePriceTaxAmount>5.925185185185185185185185185</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388442846</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>4-5 Yaş-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>49.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3807713&amp;optionId=634081</ProductUrl><SalePrice>46.287037037037037037037037037</SalePrice><SalePriceTaxAmount>3.702962962962962962962962963</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388821818</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>0-1 Ay-</ProductSize><ProductDescription>Çıtçıtlı Body</ProductDescription><UnitPrice>9.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3735705&amp;optionId=648388</ProductUrl><SalePrice>9.25</SalePrice><SalePriceTaxAmount>0.7400</SalePriceTaxAmount></ShipmentInfoPackageItem></Items></ShipmentInfoPackage></Packages><RequestId>0</RequestId><LcwMoneyPaymentAmount>0</LcwMoneyPaymentAmount><IsShippingWithTryOn>false</IsShippingWithTryOn><TryOnFee>0</TryOnFee></ShipmentInformation>',
            ResponseData: [{
              ShippingListId: 1,
              ResponseDate: '2021-07-08',
              ResponseStatus : '2',
              ResultCode : '0',
              ResultMessage : 'Başarılı',
              InvoiceKey : '5106250513001',
              OrgReceiverCustId : '5106250513001'
            }]
          });

          record.save().then(function(){
            ShippingCompanyLog.findOne({OrderId : 3}).then(function(result){
              assert(record.Retries.length === 2);
              done();
            });
          });
        });

      });
    }); // it
});
