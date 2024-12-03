import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import {Fab} from "@mui/material"
import Technology from "./Technology";
import styled from "styled-components";

const TechnologiesWrapper = styled.div`
    width: 100%;
    max-width: 860px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
`;


const TechnologiesHeader = styled.div`
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

const TechnologiesContainer = styled.div`
    padding-top: 20px;
`;


class Technologies extends Component {
    async componentDidMount() {
        await this.props.technologyStore.fetchTechnologies();
    }

    renderTechnologies = () => {
        const {
            technologyStore,
        } = this.props;
        const technologies = technologyStore.technologies;
        if (!technologies.length) {
            return (
                <EmptyTasksPlaceholder>
                    No Technologies available. Add one?
                </EmptyTasksPlaceholder>
            );
        }
        return technologies.map((technology) => (
            <Technology
                key={technology.id}
                id={technology.id}
                name={technology.name}
                resource={technology.resource}
                completed={technology.completed}
            />
        ));
    }
    render() {
        return (
            <TechnologiesWrapper>
                <TechnologiesHeader>
                    <CreateButtonContainer>
                        <Fab
                            variant="extended"
                            onClick={() =>
                            { window.location.hash = `/technologies/create`;}}
                        >
                            Add A TECHNOLOGY
                        </Fab>
                    </CreateButtonContainer>
                </TechnologiesHeader>
                <TechnologiesContainer>{this.renderTechnologies()}</TechnologiesContainer>
            </TechnologiesWrapper>
        );
    }
}

export default inject("technologyStore")(observer(Technologies));
