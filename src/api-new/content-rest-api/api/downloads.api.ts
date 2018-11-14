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

import { DownloadBodyCreate } from '../model/downloadBodyCreate';
import { DownloadEntry } from '../model/downloadEntry';
import { ModelError } from '../model/modelError';
import { BaseApi } from './base.api';

/**
* Downloads service.
* @module DownloadsApi
*/
export class DownloadsApi extends BaseApi {
    /**
    * Cancel a download
    *
    * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Cancels the creation of a download request.

**Note:** The download node can be deleted using the **DELETE /nodes/{downloadId}** endpoint

By default, if the download node is not deleted it will be picked up by a cleaner job which removes download nodes older than a configurable amount of time (default is 1 hour)

Information about the existing progress at the time of cancelling can be retrieved by calling the **GET /downloads/{downloadId}** endpoint

The cancel operation is done asynchronously.

    *
    * @param downloadId The identifier of a download node.
    * @return Promise<{}>
    */
    cancelDownload(downloadId: string): Promise<{} | ModelError> {

        let postBody = null;

        if (downloadId === undefined || downloadId === null) {
            throw new Error("Required param 'downloadId' in cancelDownload");
        }

        let pathParams = {
            'downloadId': downloadId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/downloads/{downloadId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a new download
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Creates a new download node asynchronously, the content of which will be the zipped content of the **nodeIds** specified in the JSON body like this:

    JSON
    {
        \"nodeIds\":
         [
           \"c8bb482a-ff3c-4704-a3a3-de1c83ccd84c\",
           \"cffa62db-aa01-493d-9594-058bc058eeb1\"
         ]
    }


    **Note:** The content of the download node can be obtained using the **GET /nodes/{downloadId}/content** endpoint

        *
        * @param downloadBodyCreate The nodeIds the content of which will be zipped, which zip will be set as the content of our download node.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<DownloadEntry>
        */
    createDownload(downloadBodyCreate: DownloadBodyCreate, opts?: any): Promise<DownloadEntry | ModelError> {
        opts = opts || {};
        let postBody = downloadBodyCreate;

        if (downloadBodyCreate === undefined || downloadBodyCreate === null) {
            throw new Error("Required param 'downloadBodyCreate' in createDownload");
        }

        let pathParams = {

        };

        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/downloads', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a download
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Retrieve status information for download node **downloadId**

        *
        * @param downloadId The identifier of a download node.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<DownloadEntry>
        */
    getDownload(downloadId: string, opts?: any): Promise<DownloadEntry | ModelError> {
        opts = opts || {};
        let postBody = null;

        if (downloadId === undefined || downloadId === null) {
            throw new Error("Required param 'downloadId' in getDownload");
        }

        let pathParams = {
            'downloadId': downloadId
        };

        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/downloads/{downloadId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
