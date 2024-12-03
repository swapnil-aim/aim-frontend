import { observable, action, makeObservable } from 'mobx';

export default class TechnologyStore {
    technologies = [];

    constructor(technologyActions) {
        makeObservable(this, {
            technologies: observable,
            fetchTechnologies: action,
            createTechnology: action,
        });
        this.technologyActions = technologyActions;
    }

    async fetchTechnologies() {
        const result = await this.technologyActions.fetchTechnologies();
        if (result) {
            this.technologies = result.data;
        }
    }
    async createTechnology(name, resource) {
        const result = await this.technologyActions.createTechnology(name, resource);
        if (result) {
            this.technologies.push(result.data);
        }
    }
}
