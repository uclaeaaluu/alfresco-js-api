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

import { NodesApi } from './content-rest-api/src/api/nodesApi';
import * as Emitter_ from 'event-emitter';
import { AlfrescoApi } from '../alfrescoApi';

const Emitter = Emitter_;

export class AlfrescoUpload extends NodesApi {

    constructor(alfrescoApi: AlfrescoApi) {
        super();
        this.init(alfrescoApi);
        Emitter.call(this);
    }

    uploadFile(fileDefinition, relativePath, rootFolderId, nodeBody, opts) {
        rootFolderId = rootFolderId || '-root-';
        opts = opts || {};

        let nodeBodyRequired = {
            'name': fileDefinition.name,
            'nodeType': 'cm:content',
            'relativePath': relativePath
        };

        nodeBody = Object.assign(nodeBodyRequired, nodeBody);

        let formParam = Object.assign({}, nodeBody.properties || {});
        formParam.filedata = fileDefinition;
        formParam.relativePath = relativePath;
        if (opts.name) {
            formParam.name = opts.name;
        }

        formParam = Object.assign(formParam, opts);

        return this.addNodeUpload(rootFolderId, nodeBody, opts, formParam);
    }

    updateFile(fileDefinition, relativePath, nodeId, nodeBody, opts) {
        opts = opts || {};
        return this.updateNodeContent(nodeId, nodeBody, opts);
    }

    /**
     * Create a node
     *
     * @param {String} rootFolderId The identifier of a node. You can also use one of these well-known aliases: -my-\ -shared- -root-\n
     * @param {module:model/NodeBody1} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     */
    //@deprecated in 2.4.0 use addNode in NodesApi
    addNodeUpload(nodeId, nodeBody, opts, formParams) {
        return this.nodesApi.createNode(nodeId, <any>nodeBody, opts);
    }
}