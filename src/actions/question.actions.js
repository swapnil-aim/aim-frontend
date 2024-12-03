import AxiosUtil from "../utils/axios-util";

export default class QuestionActions extends AxiosUtil {
    fetchQuestions(subjectId, resourceId, chapterId) {
        return this.get('questions', {subjectId, resourceId, chapterId});
    }
    createQuestion(title, description, subjectId, resourceId, chapterId) {
        console.log(title, description, subjectId, resourceId, chapterId);
        return this.post('questions', {
            title,
            description,
            subject_id:subjectId,
            resource_id:resourceId,
            chapter_id: chapterId
        });
    }
}