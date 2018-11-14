/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { QueriesApi as NewQueriesApi } from '../../../../api-new/content-rest-api/api/queries.api';
import { AlfrescoApi } from '../../../../alfrescoApi';

/**
 * Queries service.
 * @module api/QueriesApi
 * @version 0.1.0
 */

/**
 * Constructs a new QueriesApi.
 * @alias module:api/QueriesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class QueriesApi  {

    queriesApi: NewQueriesApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.queriesApi = new NewQueriesApi(alfrescoApi);
    }

    /**
     * Find nodes
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of nodes that match the given search criteria.  The search term is used to look for nodes that match against name, title, description, full text content or tags.  The search term: - must contain a minimum of 3 alphanumeric characters - allows \&quot;quoted term\&quot; - can optionally use &#39;*&#39; for wildcard matching  By default, file and folder types will be searched unless a specific type is provided as a query parameter.  By default, the search will be across the repository unless a specific root node id is provided to start the search from.  You can sort the result list using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter: * name * modifiedAt * createdAt
     * @param {String} term The term to search for.
     * @param {Object} opts Optional parameters
     * @param {String} opts.rootNodeId The id of the node to start the search from.  Supports the aliases -my-, -root- and -shared-.
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.nodeType Restrict the returned results to only those of the given node type and its sub-types
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties
     * @param {string[]} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodePaging}
     */
    findNodes(term: string, opts?: any): Promise<any> {
        return this.queriesApi.findNodes(term,opts);
    }

    /**
     * Find people
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of people that match the given search criteria.  The search term is used to look for matches against person id, firstname and lastname.  The search term: - must contain a minimum of 2 alphanumeric characters - can optionally use &#39;*&#39; for wildcard matching within the term  You can sort the result list using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter: * id * firstName * lastName
     * @param {String} term The term to search for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @param {string[]} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonPaging}
     */
    findPeople(term: string, opts?: any): Promise<any> {
        return this.queriesApi.findPeople(term,opts);
    }

    /**
     * Find sites
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of sites that match the given search criteria.  The search term is used to look for sites that match against site id, title or description.  The search term: - must contain a minimum of 2 alphanumeric characters - can optionally use &#39;*&#39; for wildcard matching within the term  The default sort order for the returned list is for sites to be sorted by ascending id.  You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter: * id * title * description
     * @param {String} term The term to search for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SitePaging}
     */
    findSites(term: string, opts?: any): Promise<any> {
        return this.queriesApi.findSites(term,opts);
    }
}
