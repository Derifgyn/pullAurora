import { LightningElement, api, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getRecord } from 'lightning/uiRecordApi';

import createNewAuroraProject from '@salesforce/apex/AuroraSpikeController.createAuroraProject';

import SITE_ID from '@salesforce/schema/Site.Id';
import SITE_ACCOUNT_ID from '@salesforce/schema/Site.Account.Id';
import SITE_AURORA_PROJECT_ID from '@salesforce/schema/Site.Aurora_Project_Id';

export default class AuroraProjectSiteButton extends NavigationMixin(LightningElement) {
    @track site;

    @wire(
        getRecord,
        {
            recordId: '$recordId',
            fields: [
                SITE_ID,
                SITE_ACCOUNT_ID,
                SITE_AURORA_PROJECT_ID
            ]
        }
    )

    async createNewAuroraProject(){
        await createNewAuroraProject(this.site.Id, this.site.AccountId);
    }
}