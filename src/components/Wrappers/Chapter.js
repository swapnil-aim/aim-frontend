import { useParams } from "react-router-dom";
import Chapters from "../Chapter/Chapters";
import CreateChapter from "../Chapter/CreateChapter";


export function ChaptersWrapper() {
    const params = useParams();
    const {
        subject_id,
        subject: subject_name,
        resource: resource_name,
        id: resource_id
    } = params;
    return <Chapters
        subject_id={subject_id}
        subject_name={subject_name}
        resource_name={resource_name}
        resource_id={resource_id}
    />;
}

export function CreateChapterWrapper() {
    const params = useParams();
    const {
        subject_id,
        subject: subject_name,
        resource: resource_name,
        id: resource_id
    } = params;
    return <CreateChapter
        subject_id={subject_id}
        subject_name={subject_name}
        resource_name={resource_name}
        resource_id={resource_id}
    />;
}