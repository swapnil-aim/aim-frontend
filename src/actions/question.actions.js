import AxiosUtil from "../utils/axios-util";

export default class QuestionActions extends AxiosUtil {
    fetchQuestions() {
        return this.get('questions');
    }
    createQuestion(name) {
        return this.post('questions', {name});
    }
}