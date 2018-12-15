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

import { WebscriptApi as NewWebscriptApi } from '../../../../api-new/content-rest-api/api/webscript.api';
import { AlfrescoApi } from '../../../../alfrescoApi';

/**
 * Tags service.
 * @module api/WebscriptApi
 * @version 0.1.0
 */

/**
 * Constructs a new WebscriptApi.
 * @alias module:api/WebscriptApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class WebscriptApi {

    webscriptApi: NewWebscriptApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.webscriptApi = new NewWebscriptApi(alfrescoApi);
    }


    /**
     * Call a get on a  Web Scripts see https://wiki.alfresco.com/wiki/Web_Scripts for more details about Web Scripts
     * Url syntax definition : http[s]://<host>:<port>/[<contextPath>/]/<servicePath>[/<scriptPath>][?<scriptArgs>]
     * example: http://localhost:8081/share/service/mytasks?priority=1
     *
     * @param {String} httpMethod  GET, POST, PUT and DELETE
     * @param {String} scriptPath
     * @param {Object} scriptArgs
     * @param {String} contextRoot default value alfresco
     * @param {String} servicePath default value service
     * @param {String} postBody
     *
     * @returns {Promise} A promise that is resolved return the webScript data and {error} if rejected.
     */
    executeWebScript(httpMethod: string, scriptPath: string, scriptArgs: string, contextRoot: string, servicePath: string, postBody: any): Promise<any> {
        return this.webscriptApi.executeWebScript(httpMethod, scriptPath, scriptArgs, contextRoot, servicePath, postBody);
    }
}