import { useParams } from "react-router-dom";
import Questions from "../Question/Questions";
import CreateQuestion from "../Question/CreateQuestion";


export function QuestionsWrapper() {
    const params = useParams();
    const {
        subject_id,
        subject: subject_name,
        resource: resource_name,
        resource_id,
        chapter: chapter_name,
        id: chapter_id,

    } = params;
    return <Questions
        subject_id={subject_id}
        subject_name={subject_name}
        resource_name={resource_name}
        resource_id={resource_id}
        chapter_name={chapter_name}
        chapter_id={chapter_id}
    />;
}

export function CreateQuestionWrapper() {
    const params = useParams();
    const {
        subject_id,
        subject: subject_name,
        resource: resource_name,
        resource_id,
        chapter: chapter_name,
        id: chapter_id,
    } = params;
    return <CreateQuestion
        subject_id={subject_id}
        subject_name={subject_name}
        resource_name={resource_name}
        resource_id={resource_id}
        chapter_name={chapter_name}
        chapter_id={chapter_id}
    />;
}