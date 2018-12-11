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

import { Capabilities } from './capabilities';
import { Company } from './company';
import { DateAlfresco } from './dateAlfresco';

export class Person {
    id: string;
    firstName: string;
    lastName?: string;
    description?: string;
    avatarId?: string;
    email: string;
    skypeId?: string;
    googleId?: string;
    instantMessageId?: string;
    jobTitle?: string;
    location?: string;
    company?: Company;
    mobile?: string;
    telephone?: string;
    statusUpdatedAt?: DateAlfresco;
    userStatus?: string;
    enabled: boolean;
    emailNotificationsEnabled?: boolean;
    aspectNames?: Array<string>;
    properties?: { [key: string]: string; };
    capabilities?: Capabilities;

    constructor(input?: any) {

        Object.assign(this, input);
        this.company = new Company(input.company);
        this.statusUpdatedAt = new DateAlfresco(input.statusUpdatedAt);
        this.capabilities = new Capabilities(input.capabilities);
    }

}