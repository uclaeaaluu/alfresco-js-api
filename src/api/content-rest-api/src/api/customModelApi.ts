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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { CustomModelApi as NewCustomModelApi } from '../../../../api-new/content-rest-api/api/customModel.api';

/**
 * Comments service.
 * @module api/CustomModelApi
 * @version 0.1.0
 */

/**
 * Constructs a new CustomModelApi.
 * @alias module:api/CustomModelApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class CustomModelApi  {

    private: boolean = true;

    customModelApi: NewCustomModelApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.customModelApi = new NewCustomModelApi(alfrescoApi);
    }

    /**
     * create Custom Model
     */
    createCustomModel(status, description, name, namespaceUri, namespacePrefix): Promise<any> {
        return this.customModelApi.createCustomModel(status, description, name, namespaceUri, namespacePrefix);
    }

    /**
     * Create a custom type
     * @param {String} modelName
     * @param {String} name
     * @param {String} parentName
     * @param {String} description
     */
    createCustomType(modelName, name, parentName, title, description): Promise<any> {
        return this.customModelApi.createCustomType(modelName, name, parentName, title, description);
    }

    /**
     * Create a custom aspect
     * @param {String} modelName
     * @param {String} name
     * @param {String} parentName
     * @param {String} description
     */
    createCustomAspect(modelName, name, parentName, title, description): Promise<any> {
        return this.customModelApi.createCustomAspect(modelName, name, parentName, title, description);
    }

    /**
     * Create a custom constraint
     * @param {String} modelName
     * @param {String} name
     * @param {String} type
     * @param {Object} parameters
     */
    createCustomConstraint(modelName, name, type, parameters): Promise<any> {
        return this.customModelApi.createCustomConstraint(modelName, name, type, parameters);
    }

    /**
     * Activate the custom model
     * @param {String} modelName
     */
    activateCustomModel(modelName): Promise<any> {
        return this.customModelApi.activateCustomModel(modelName);
    }

    /**
     * Deactivate the custom model
     * @param {String} modelName
     */
    deactivateCustomModel(modelName): Promise<any> {
        return this.customModelApi.deactivateCustomModel(modelName);
    }

    /**
     * Add property into an existing aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {Object} properties
     */
    addPropertyToAspect(modelName, aspectName, properties): Promise<any> {
        return this.customModelApi.addPropertyToAspect(modelName, aspectName, properties);
    }

    /**
     * Add Property into an existing type
     * @param {String} modelName
     * @param {String} typeName
     * @param {Object} properties
     * @param {String} aspectName
     */
    addPropertyToType(modelName, typeName, properties, aspectName): Promise<any> {
        return this.customModelApi.addPropertyToType(modelName, typeName, properties, aspectName);
    }

    /**
     * Edit an existing custom model
     * @param {String} modelName
     * @param {String} description
     * @param {String} namespaceUri
     * @param {String} namespacePrefix
     */
    updateCustomModel(modelName, description, namespaceUri, namespacePrefix): Promise<any> {
        return this.customModelApi.updateCustomModel(modelName, description, namespaceUri, namespacePrefix);
    }

    /**
     * Edit an existing custom model type
     * @param {String} modelName
     * @param {String} typeName
     * @param {String} description
     * @param {String} parentName
     * @param {String} title
     */
    updateCustomType(modelName, typeName, description, parentName, title): Promise<any> {
        return this.customModelApi.updateCustomType(modelName, typeName, description, parentName, title);
    }

    /**
     * Edit an existing custom model aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {String} description
     * @param {String} parentName
     * @param {String} title
     */
    updateCustomAspect(modelName, aspectName, description, parentName, title): Promise<any> {
        return this.customModelApi.updateCustomAspect(modelName, aspectName, description, parentName, title);
    }

    /**
     * Get all custom models
     */
    getAllCustomModel(): Promise<any> {
        return this.customModelApi.getAllCustomModel();
    }

    /**
     * Get custom model
     * @param {String} modelName
     * @param {Object} queryParams
     */
    getCustomModel(modelName, queryParamsInput): Promise<any> {
        return this.customModelApi.getCustomModel(modelName, queryParamsInput);
    }

    /**
     * Get all custom model types
     * @param {String} modelName
     */
    getAllCustomType(modelName): Promise<any> {
        return this.customModelApi.getAllCustomType(modelName);
    }

    /**
     * Get custom model type
     * @param {String} modelName
     * @param {String} typeName
     * @param {Object} queryParams
     */
    getCustomType(modelName, typeName, queryParamsInput): Promise<any> {
        return this.customModelApi.getCustomType(modelName, typeName, queryParamsInput);
    }

    /**
     * Get all custom model aspect
     * @param {String} modelName
     * @param {Object} queryParamsInput
     */
    getAllCustomAspect(modelName, queryParamsInput): Promise<any> {
        return this.customModelApi.getAllCustomAspect(modelName, queryParamsInput);
    }

    /**
     * Get custom model aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {Object} queryParamsInput
     */
    getCustomAspect(modelName, aspectName, queryParamsInput): Promise<any> {
        return this.customModelApi.getCustomAspect(modelName, aspectName, queryParamsInput);
    }

    /**
     * Get all custom model defined constraints
     * @param {String} modelName
     * @param {Object} queryParams
     */
    getAllCustomConstraints(modelName, queryParamsInput): Promise<any> {
        return this.customModelApi. getAllCustomConstraints(modelName, queryParamsInput);
    }

    /**
     * Get custom model defined constraints
     * @param {String} modelName
     * @param {String} constraintName
     * @param {Object} queryParams
     */
    getCustomConstraints(modelName, constraintName, queryParamsInput): Promise<any> {
        return this.customModelApi.getCustomConstraints(modelName, constraintName, queryParamsInput);
    }

    /**
     * Delete the given custom model
     * @param {String} modelName
     */
    deleteCustomModel(modelName): Promise<any> {
        return this.customModelApi.deleteCustomModel(modelName);
    }

    /**
     * Delete the given custom type
     * @param {String} modelName
     * @param {String} typeName
     */
    deleteCustomType(modelName, typeName): Promise<any> {
        return this.customModelApi.deleteCustomType(modelName, typeName);
    }

}