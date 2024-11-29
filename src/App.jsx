import React from "react";
import {useRoutes, HashRouter} from "react-router-dom";
import Subjects from "./components/Subject/Subjects";
import CreateSubject from "./components/Subject/CreateSubject";
import LandingPage from "./components/LandingPage";
import { CreateResourceWrapper, ResourcesWrapper } from "./components/Wrappers/Resource";
import {ChaptersWrapper, CreateChapterWrapper} from "./components/Wrappers/Chapter";

import "./App.css";

const AppRoutes = () => {
    const routes = [
        { path: '/', element: <LandingPage /> },
        { path: '/subjects', element: <Subjects /> },
        { path: '/subject/create', element: <CreateSubject /> },
        { path: '/:subject/:id/resources', element: <ResourcesWrapper /> },
        { path: '/:subject/:id/resource/create', element: <CreateResourceWrapper /> },
        { path: '/:subject/:subject_id/:resource/:id/chapters', element: <ChaptersWrapper /> },
        { path: '/:subject/:subject_id/:resource/:id/chapter/create', element: <CreateChapterWrapper /> },
    ];
    return useRoutes(routes);  // Use the hook
};

function App() {
  return (
    <div className="App">
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    </div>
  );
}

export default App;
