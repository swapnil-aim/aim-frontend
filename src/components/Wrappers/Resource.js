import { useParams } from "react-router-dom";
import Resources from "../Resource/Resources";
import CreateResource from "../Resource/CreateResource";


export function ResourcesWrapper() {
    const params = useParams();
    const { id, subject: subjectName } = params;
    return <Resources subjectId={id} subjectName={subjectName}/>;  // Pass 'id' as a prop
}

export function CreateResourceWrapper() {
    const params = useParams();  // Get the 'id' from the URL
    const { id, subject: subjectName } = params;
    return <CreateResource subjectId={id} subjectName={subjectName}/>;  // Pass 'id' as a prop
}