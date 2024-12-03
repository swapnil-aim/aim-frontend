import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import {Fab} from "@mui/material"
import Question from "./Question";
import styled from "styled-components";

const QuestionsWrapper = styled.div`
    width: 100%;
    max-width: 860px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
`;


const QuestionsHeader = styled.div`
    display: flex;
    justify-content: center;
`;

const CreateButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const EmptyTasksPlaceholder = styled.p`
    color: black;
    text-align: center;
    font-size: 36px;
`;

const QuestionsContainer = styled.div`
    padding-top: 20px;
`;


class Questions extends Component {
    async componentDidMount() {
        await this.props.questionStore.fetchQuestions(
            this.props.subject_id,
            this.props.resource_id,
            this.props.chapter_id
        );
    }

    renderChapters() {
        const {
            questionStore,
            subject_id,
            subject_name,
            resource_name,
            resource_id,
            chapter_id,
            chapter_name,
        } = this.props;
        const questions = questionStore.questions;
        if (!questions.length) {
            return (
                <EmptyTasksPlaceholder>
                    No Questions available. Add one?
                </EmptyTasksPlaceholder>
            );
        }
        return questions.map((question) => (
            <Question
                key={question.id}
                id={question.id}
                title={question.title}
                description={question.description}
                subject_name={subject_name}
                subject_id={subject_id}
                resource_name={resource_name}
                resource_id={resource_id}
                chapter_id={chapter_id}
                chapter_name={chapter_name}
                completed={question.completed}
            />
        ));
    }
    render() {
        return (
            <QuestionsWrapper>
                <QuestionsHeader>
                    <CreateButtonContainer>
                        <Fab
                            variant="extended"
                            onClick={() =>
                            { window.location.hash = `${this.props.subject_name}/${this.props.subject_id}/${this.props.resource_name}/${this.props.resource_id}/${this.props.chapter_name}/${this.props.chapter_id}/question/create`;}}
                        >
                            Add A {this.props.subject_name} Question
                        </Fab>
                    </CreateButtonContainer>
                </QuestionsHeader>
                <QuestionsContainer>{this.renderChapters()}</QuestionsContainer>
            </QuestionsWrapper>
        );
    }
}

export default inject("questionStore")(observer(Questions));
