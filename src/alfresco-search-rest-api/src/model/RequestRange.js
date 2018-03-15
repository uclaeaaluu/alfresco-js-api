/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RequestRange = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestRange model module.
   * @module model/RequestRange
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RequestRange</code>.
   * Facet range
   * @alias module:model/RequestRange
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>RequestRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {any} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestRange} obj Optional instance to populate.
   * @return {module:model/RequestRange} The populated <code>RequestRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'String');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'String');
      }
      if (data.hasOwnProperty('gap')) {
        obj['gap'] = ApiClient.convertToType(data['gap'], 'String');
      }
      if (data.hasOwnProperty('hardend')) {
        obj['hardend'] = ApiClient.convertToType(data['hardend'], 'Boolean');
      }
      if (data.hasOwnProperty('other')) {
        obj['other'] = ApiClient.convertToType(data['other'], ['String']);
      }
      if (data.hasOwnProperty('include')) {
        obj['include'] = ApiClient.convertToType(data['include'], ['String']);
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('excludeFilters')) {
        obj['excludeFilters'] = ApiClient.convertToType(data['excludeFilters'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The name of the field to perform range
   * @member {string} field
   */
  exports.prototype['field'] = undefined;
  /**
   * The start of the range
   * @member {string} start
   */
  exports.prototype['start'] = undefined;
  /**
   * The end of the range
   * @member {string} end
   */
  exports.prototype['end'] = undefined;
  /**
   * Bucket size
   * @member {string} gap
   */
  exports.prototype['gap'] = undefined;
  /**
   * If true means that the last bucket will end at “end” even if it is less than “gap” wide.
   * @member {boolean} hardend
   */
  exports.prototype['hardend'] = undefined;
  /**
   * before, after, between, non, all
   * @member {string[]} other
   */
  exports.prototype['other'] = undefined;
  /**
   * lower, upper, edge, outer, all
   * @member {string[]} include
   */
  exports.prototype['include'] = undefined;
  /**
   * A label to include as a pivot reference
   * @member {string} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Filter queries to exclude when calculating statistics
   * @member {string[]} excludeFilters
   */
  exports.prototype['excludeFilters'] = undefined;



  return exports;
}));


