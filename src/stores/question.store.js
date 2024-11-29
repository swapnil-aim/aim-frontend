import { observable, action, makeObservable } from 'mobx';

export default class QuestionStore {
    questions = [];

    constructor(questionActions) {
        makeObservable(this, {
            questions: observable,
            fetchQuestions: action,
            createQuestion: action,
        });
        this.questionActions = questionActions;
    }

    async fetchQuestions() {
        const result = await this.questionActions.fetchQuestions();
        if (result) {
            this.questions = result.data;
        }
    }
    async createQuestion(name, subjectId, resourceId) {
        const result = await this.questionActions.createQuestion(name, subjectId, resourceId);
        if (result) {
            this.questions.push(result.data);
        }
    }
}
