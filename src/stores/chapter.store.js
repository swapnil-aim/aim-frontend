import { observable, action, makeObservable } from 'mobx';

export default class ChapterStore {
    chapters = [];

    constructor(chapterActions) {
        makeObservable(this, {
            chapters: observable,
            fetchChapters: action,
            createChapter: action,
        });
        this.chapterActions = chapterActions;
    }

    async fetchChapters() {
        const result = await this.chapterActions.fetchChapters();
        if (result) {
            this.chapters = result.data;
        }
    }
    async createChapter(name, subjectId, resourceId) {
        const result = await this.chapterActions.createChapter(name, subjectId, resourceId);
        if (result) {
            this.chapters.push(result.data);
        }
    }
}
