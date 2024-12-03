import React from "react";
import {useRoutes, HashRouter} from "react-router-dom";
import "./App.css";
import Subjects from "./components/Subject/Subjects";
import CreateSubject from "./components/Subject/CreateSubject";
import LandingPage from "./components/LandingPage";
import { CreateResourceWrapper, ResourcesWrapper } from "./components/Wrappers/Resource";
import {ChaptersWrapper, CreateChapterWrapper} from "./components/Wrappers/Chapter";
import {CreateQuestionWrapper, QuestionsWrapper} from "./components/Wrappers/Question";
import Technologies from "./components/Technology/Technologies";
import CreateTechnology from "./components/Technology/CreateTechnology";
import WeeklyRoutine from "./components/WeeklyRoutine";
import Header from "./components/Header";



const AppRoutes = () => {
    const routes = [
        { path: '/', element: <LandingPage /> },
        { path:  '/weekly_routine', element: <WeeklyRoutine />},
        { path: '/subjects', element: <Subjects /> },
        { path: '/subject/create', element: <CreateSubject /> },
        { path: '/technologies', element: <Technologies /> },
        { path: '/technologies/create', element: <CreateTechnology /> },
        { path: '/:subject/:id/resources', element: <ResourcesWrapper /> },
        { path: '/:subject/:id/resource/create', element: <CreateResourceWrapper /> },
        { path: '/:subject/:subject_id/:resource/:id/chapters', element: <ChaptersWrapper /> },
        { path: '/:subject/:subject_id/:resource/:id/chapter/create', element: <CreateChapterWrapper /> },
        { path: '/:subject/:subject_id/:resource/:resource_id/:chapter/:id/questions', element: <QuestionsWrapper /> },
        { path: '/:subject/:subject_id/:resource/:resource_id/:chapter/:id/question/create', element: <CreateQuestionWrapper /> },
    ];
    return useRoutes(routes);  // Use the hook
};

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Header />
            <AppRoutes />
        </HashRouter>
    </div>
  );
}

export default App;
