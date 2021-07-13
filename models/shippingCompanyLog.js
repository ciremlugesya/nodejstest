const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const ResponseData = new Schema({
  ShippingListId:{ type: Number, required: true },
  ResponseDate: { type: Date, required: true },
  ResponseStatus : { type: Number, required: true },
  ResultCode : { type: String, required: true },
  ResultMessage : { type: String, required: true },
  InvoiceKey : { type: String, required: true },
  OrgReceiverCustId : { type: String, required: true }
});

const RetrySchema = new Schema({
  ShippingCompanyId: { type: Number, required: true },
  OrderId:  { type: Number, required: true },
  RequestType:  { type: String, required: true },
  RequestStatus:  { type: String, required: true },
  RequestDate:  { type: Date, required: true },
  RetryCount:  { type: Number, required: true },
  RetryDate:  { type: Date, required: false },
  UserId:  { type: Number, required: true },
  RequestData:  { type: String, required: true },
  ResponseData: [ResponseData]
});

const LogSchema = new Schema({
  ShippingCompanyId: { type: Number, required: true },
  OrderId:  { type: Number, required: true },
  RequestType:  { type: String, required: true },
  RequestStatus:  { type: String, required: true },
  RequestDate:  { type: Date, required: true },
  RetryCount:  { type: Number, required: true },
  RetryDate:  { type: Date, required: false },
  UserId:  { type: Number, required: true },
  RequestData:  { type: String, required: true },
  ResponseData: [ResponseData],
  Retries: [RetrySchema]
});

// create model

module.exports = mongoose.model('shippingcompanylog', LogSchema); // collection, Schema


/*
{

    "ShippingCompanyId" : "1",
    "OrderId" : "1",
    "RequestType" : "2",
    "RequestStatus" : "2",
    "RequestDate" : null,
    "RetryCount" : "0",
    "RetryDate" : "",
    "UserId" : "5047236",
    "SendShipmentInformationRequestData" : "<?xml version=\"1.0\" encoding=\"utf-16\"?><ShipmentInformation xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><ShippingCompanyId>1</ShippingCompanyId><OrderNumber>2106250513001</OrderNumber><ShippingListId>1488873963</ShippingListId><ShippingListNo>5106250513001</ShippingListNo><CurrencyCode>TL</CurrencyCode><CustomerId>5047236</CustomerId><CustomerEmail>benan.oz@lcwaikiki.com</CustomerEmail><OrderId>1</OrderId><GrandTotal>139.9700</GrandTotal><PaymentAmount>139.9700</PaymentAmount><CashOnDeliveryPaymentAmount>0</CashOnDeliveryPaymentAmount><TotalPaymentAmount>139.9700</TotalPaymentAmount><ShippingPrice>0.0000</ShippingPrice><IsCashOnDelivery>false</IsCashOnDelivery><InvoiceNumber>9992021216689883</InvoiceNumber><ECommerceToShippingCompanyCurrencyRate>1.00000</ECommerceToShippingCompanyCurrencyRate><ConsigneeAddress><FullName>Benan ÖZ</FullName><Address>Fulya Mh. test dsds</Address><RegionId xsi:nil=\"true\" /><RegionName /><DistrictId xsi:nil=\"true\" /><DistrictName /><CityId>34</CityId><CityName>İstanbul</CityName><CountyId>83117</CountyId><CountyName>Şişli</CountyName><NeighborhoodName>Fulya Mh.</NeighborhoodName><StreetTypeId xsi:nil=\"true\" /><StreetTypeName /><StreetId xsi:nil=\"true\" /><StreetName /><PostalCode /><CountryId>1</CountryId><CountryCode>TR</CountryCode><CountryName>Türkiye</CountryName><PhoneNumber>05395852424</PhoneNumber><MobilePhoneNumber /><SaleOrderShippingAddressId>1</SaleOrderShippingAddressId><House /><Flat /><ExternalAddressDefinition /></ConsigneeAddress><Packages><ShipmentInfoPackage><ShippingListPackageId>1</ShippingListPackageId><Weight>0.23</Weight><VolumetricWeight>4</VolumetricWeight><Barcode>51062505130011</Barcode><Items><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388734408</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>XXL-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>79.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3886719&amp;optionId=653976</ProductUrl><SalePrice>74.064814814814814814814814815</SalePrice><SalePriceTaxAmount>5.925185185185185185185185185</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388442846</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>4-5 Yaş-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>49.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3807713&amp;optionId=634081</ProductUrl><SalePrice>46.287037037037037037037037037</SalePrice><SalePriceTaxAmount>3.702962962962962962962962963</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388821818</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>0-1 Ay-</ProductSize><ProductDescription>Çıtçıtlı Body</ProductDescription><UnitPrice>9.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3735705&amp;optionId=648388</ProductUrl><SalePrice>9.25</SalePrice><SalePriceTaxAmount>0.7400</SalePriceTaxAmount></ShipmentInfoPackageItem></Items></ShipmentInfoPackage></Packages><RequestId>0</RequestId><LcwMoneyPaymentAmount>0</LcwMoneyPaymentAmount><IsShippingWithTryOn>false</IsShippingWithTryOn><TryOnFee>0</TryOnFee></ShipmentInformation>",
    "SendShipmentInformationResponseData" : {
        "ShippingListId" : "1488873963",
        "ResponseDate" : "",
        "ResponseStatus" : "2",
        "ResultCode" : "0",
        "ResultMessage" : "Başarılı",
        "InvoiceKey" : "5106250513001",
        "OrgReceiverCustId" : "5106250513001"
    },
    "Retry" : {
        "ShippingCompanyId" : "1",
        "OrderId" : "1",
        "RequestType" : "2",
        "RequestStatus" : "2",
        "RequestDate" : "2021-06-25 14:08:38.783",
        "RetryCount" : "1",
        "RetryDate" : "2021-06-25 14:08:38.783",
        "UserId" : "5047236",
        "SendShipmentInformationRequestData" : "<?xml version=\"1.0\" encoding=\"utf-16\"?><ShipmentInformation xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><ShippingCompanyId>1</ShippingCompanyId><OrderNumber>2106250513001</OrderNumber><ShippingListId>1488873963</ShippingListId><ShippingListNo>5106250513001</ShippingListNo><CurrencyCode>TL</CurrencyCode><CustomerId>5047236</CustomerId><CustomerEmail>benan.oz@lcwaikiki.com</CustomerEmail><OrderId>1</OrderId><GrandTotal>139.9700</GrandTotal><PaymentAmount>139.9700</PaymentAmount><CashOnDeliveryPaymentAmount>0</CashOnDeliveryPaymentAmount><TotalPaymentAmount>139.9700</TotalPaymentAmount><ShippingPrice>0.0000</ShippingPrice><IsCashOnDelivery>false</IsCashOnDelivery><InvoiceNumber>9992021216689883</InvoiceNumber><ECommerceToShippingCompanyCurrencyRate>1.00000</ECommerceToShippingCompanyCurrencyRate><ConsigneeAddress><FullName>Benan ÖZ</FullName><Address>Fulya Mh. test dsds</Address><RegionId xsi:nil=\"true\" /><RegionName /><DistrictId xsi:nil=\"true\" /><DistrictName /><CityId>34</CityId><CityName>İstanbul</CityName><CountyId>83117</CountyId><CountyName>Şişli</CountyName><NeighborhoodName>Fulya Mh.</NeighborhoodName><StreetTypeId xsi:nil=\"true\" /><StreetTypeName /><StreetId xsi:nil=\"true\" /><StreetName /><PostalCode /><CountryId>1</CountryId><CountryCode>TR</CountryCode><CountryName>Türkiye</CountryName><PhoneNumber>05395852424</PhoneNumber><MobilePhoneNumber /><SaleOrderShippingAddressId>1</SaleOrderShippingAddressId><House /><Flat /><ExternalAddressDefinition /></ConsigneeAddress><Packages><ShipmentInfoPackage><ShippingListPackageId>1</ShippingListPackageId><Weight>0.23</Weight><VolumetricWeight>4</VolumetricWeight><Barcode>51062505130011</Barcode><Items><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388734408</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>XXL-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>79.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3886719&amp;optionId=653976</ProductUrl><SalePrice>74.064814814814814814814814815</SalePrice><SalePriceTaxAmount>5.925185185185185185185185185</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388442846</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>4-5 Yaş-</ProductSize><ProductDescription>Elbise</ProductDescription><UnitPrice>49.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3807713&amp;optionId=634081</ProductUrl><SalePrice>46.287037037037037037037037037</SalePrice><SalePriceTaxAmount>3.702962962962962962962962963</SalePriceTaxAmount></ShipmentInfoPackageItem><ShipmentInfoPackageItem><Quantity>1</Quantity><Barcode>8681388821818</Barcode><BrandName>LC WAIKIKI</BrandName><ProductSize>0-1 Ay-</ProductSize><ProductDescription>Çıtçıtlı Body</ProductDescription><UnitPrice>9.9900</UnitPrice><ProductUrl>http://www.lcwaikiki.com/model/?modelId=3735705&amp;optionId=648388</ProductUrl><SalePrice>9.25</SalePrice><SalePriceTaxAmount>0.7400</SalePriceTaxAmount></ShipmentInfoPackageItem></Items></ShipmentInfoPackage></Packages><RequestId>0</RequestId><LcwMoneyPaymentAmount>0</LcwMoneyPaymentAmount><IsShippingWithTryOn>false</IsShippingWithTryOn><TryOnFee>0</TryOnFee></ShipmentInformation>",
        "SendShipmentInformationResponseData" : {
            "ShippingListId" : "1488873963",
            "ResponseDate" : "",
            "ResponseStatus" : "2",
            "ResultCode" : "0",
            "ResultMessage" : "Başarılı",
            "InvoiceKey" : "5106250513001",
            "OrgReceiverCustId" : "5106250513001"
        }
    }
}
*/
