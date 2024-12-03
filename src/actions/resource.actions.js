import AxiosUtil from "../utils/axios-util";

export default class ResourceActions extends AxiosUtil {
    fetchResources(subjectId) {
        return this.get('resources', {subjectId});
    }
    createResource(subjectId,name, instructor, course) {
        return this.post('resources', {
            name,
            subject_id: subjectId,
            instructor,
            course,
        });
    }
}