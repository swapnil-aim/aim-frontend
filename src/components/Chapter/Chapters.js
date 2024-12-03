import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import {Fab} from "@mui/material"
import Chapter from "./Chapter";
import styled from "styled-components";

const ChaptersWrapper = styled.div`
    width: 100%;
    max-width: 860px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
`;


const ChaptersHeader = styled.div`
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

const ChaptersContainer = styled.div`
    padding-top: 20px;
`;


class Chapters extends Component {
    async componentDidMount() {
        await this.props.chapterStore.fetchChapters(this.props.subject_id, this.props.resource_id);
    }

    renderChapters() {
        const {
            chapterStore,
            subject_id,
            subject_name,
            resource_name,
            resource_id
        } = this.props;
        const chapters = chapterStore.chapters;
        if (!chapters.length) {
            return (
                <EmptyTasksPlaceholder>
                    No Chapters available. Add one?
                </EmptyTasksPlaceholder>
            );
        }
        return chapters.map((chapter) => (
            <Chapter
                key={chapter.id}
                id={chapter.id}
                name={chapter.name}
                subject_name={subject_name}
                subject_id={subject_id}
                resource_name={resource_name}
                resource_id={resource_id}
                completed={chapter.completed}
            />
        ));
    }
    render() {
        return (
            <ChaptersWrapper>
                <ChaptersHeader>
                    <CreateButtonContainer>
                        <Fab
                            variant="extended"
                            onClick={() =>
                            { window.location.hash = `${this.props.subject_name}/${this.props.subject_id}/${this.props.resource_name}/${this.props.resource_id}/chapter/create`;}}
                        >
                            Add A {this.props.subject_name} Chapter
                        </Fab>
                    </CreateButtonContainer>
                </ChaptersHeader>
                <ChaptersContainer>{this.renderChapters()}</ChaptersContainer>
            </ChaptersWrapper>
        );
    }
}

export default inject("chapterStore")(observer(Chapters));
