import AxiosUtil from "../utils/axios-util";

export default class ChapterActions extends AxiosUtil {
    fetchChapters() {
        return this.get('chapters');
    }
    createChapter(name, subjectId, resourceId) {
        return this.post('chapters', {name,
            subject_id: subjectId,
            resource_id: resourceId,
        });
    }
}