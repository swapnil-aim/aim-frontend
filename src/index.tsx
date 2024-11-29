import React from 'react';
import { Provider } from "mobx-react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SubjectActions from "./actions/subject.actions";
import SubjectStore from "./stores/subject.store";
import QuestionStore from "./stores/question.store";
import QuestionActions from "./actions/question.actions";
import ResourceStore from "./stores/resource.store";
import ResourceActions from "./actions/resource.actions";
import ChapterActions from "./actions/chapter.actions";
import ChapterStore from "./stores/chapter.store";



const actions: {
    subjectActions?: SubjectActions,
    questionActions?:QuestionActions,
    resourceActions?:ResourceActions,
    chapterActions?:ChapterActions,
} = {};
const stores: {
    subjectStore?:SubjectStore,
    resourceStore?:ResourceStore,
    questionStore?:QuestionStore,
    chapterStore?:ChapterStore,
} = {};
actions.subjectActions = new SubjectActions();
actions.resourceActions = new ResourceActions();
actions.questionActions = new QuestionActions();
actions.chapterActions = new ChapterActions();
stores.subjectStore = new SubjectStore(actions.subjectActions);
stores.resourceStore = new ResourceStore(actions.resourceActions);
stores.questionStore = new QuestionStore(actions.questionActions);
stores.chapterStore = new ChapterStore(actions.chapterActions);
const root = (
    <Provider {...stores}>
        <App />
    </Provider>

)
ReactDOM.render(
  root, document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
