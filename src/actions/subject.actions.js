import AxiosUtil from "../utils/axios-util";

export default class SubjectActions extends AxiosUtil {
    fetchSubjects() {
        return this.get('subjects');
    }
    createSubject(name) {
        return this.post('subjects', {name});
    }
}