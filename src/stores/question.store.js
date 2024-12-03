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

    async fetchQuestions(subjectId, resourceId, chapterId) {
        const result = await this.questionActions.fetchQuestions(subjectId, resourceId, chapterId);
        if (result) {
            this.questions = result.data;
        }
    }
    async createQuestion(title, description, subjectId, resourceId, chapterId) {
        console.log(title, description, subjectId, resourceId, chapterId);
        const result = await this.questionActions.createQuestion(title, description, subjectId, resourceId, chapterId);
        if (result) {
            this.questions.push(result.data);
        }
    }
}
