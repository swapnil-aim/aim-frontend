import { observable, action, makeObservable } from 'mobx';

export default class SubjectStore {
    subjects = [];

    constructor(subjectActions) {
        makeObservable(this, {
            subjects: observable,
            fetchSubjects: action,
            createSubject: action,
            deleteSubject: action,
        });
        this.subjectActions = subjectActions;
    }

    async fetchSubjects() {
        const result = await this.subjectActions.fetchSubjects();
        if (result) {
            this.subjects = result.data;
        }
    }
    async createSubject(name) {
        const result = await this.subjectActions.createSubject(name);
        if (result) {
            this.subjects.push(result.data);
        }
    }

    async deleteSubject(id) {
        const idx = this.subjects.findIndex(subject => subject.id === id);
        await this.subjectActions.deleteTask(id);
        this.subjects.splice(idx, 1);
    }

    // @action
    // async updateTaskStatus(id, status) {
    //     const task = this.tasks.find(task => task.id === id);
    //     await this.tasksService.updateTaskStatus(id, status);
    //     task.status = status;
    // }
}
