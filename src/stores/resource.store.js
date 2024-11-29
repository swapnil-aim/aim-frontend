import { observable, action, makeObservable } from 'mobx';

export default class ResourceStore {
    resources = [];

    constructor(resourceActions) {
        makeObservable(this, {
            resources: observable,
            fetchResources: action,
            createResource: action,
        });
        this.resourceActions = resourceActions;
    }

    async fetchResources() {
        const result = await this.resourceActions.fetchResources();
        if (result) {
            this.resources = result.data;
        }
    }
    async createResource(subjectId, name, instructor, course) {
        const result = await this.resourceActions.createResource(subjectId, name, instructor, course);
        if (result) {
            this.resources.push(result.data);
        }
    }
}
