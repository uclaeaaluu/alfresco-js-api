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

import { RequestFacetIntervalsIntervals } from './requestFacetIntervalsIntervals';
import { RequestFacetSet } from './requestFacetSet';

/**
 * Facet Intervals
 */
export class RequestFacetIntervals {
    /**
     * Sets the intervals for all fields.
     */
    sets?: Array<RequestFacetSet>;
    /**
     * Specifies the fields to facet by interval.
     */
    intervals?: Array<RequestFacetIntervalsIntervals>;

    constructor(input?: any) {

        Object.assign(this, input);
        this.sets = input.sets.map((item: any) => {
            return new Array<RequestFacetSet>(item);
        });
        this.intervals = input.intervals.map((item: any) => {
            return new Array<RequestFacetIntervalsIntervals>(item);
        });
    }

}