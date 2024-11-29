import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import {Fab} from "@mui/material"
import Resource from "./Resource";
import styled from "styled-components";

const ResourcesWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const ResourcesHeader = styled.div`
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

const ResourcesContainer = styled.div`
  padding-top: 20px;
`;


class Resources extends Component {
    async componentDidMount() {
        const { id , subjectName} = this.props;
        await this.props.resourceStore.fetchResources();
    }

    renderResources() {
        const { resourceStore } = this.props;
        const resources = resourceStore.resources;
        if (!resources.length) {
            return (
                <EmptyTasksPlaceholder>
                    No Resources available. Create one?
                </EmptyTasksPlaceholder>
            );
        }
        return resources.map((resource) => (
            <Resource
                key={resource.id}
                id={resource.id}
                name={resource.name}
                subject_name={this.props.subjectName}
                subject_id={this.props.subjectId}
            />
        ));
    }
    render() {
        return (
            <ResourcesWrapper>
                <ResourcesHeader>
                    <CreateButtonContainer>
                        <Fab
                            variant="extended"
                            onClick={() => { window.location.hash = `${this.props.subjectName}/${this.props.subjectId}/resource/create`; }}
                        >
                            Create A {this.props.subjectName} Resource
                        </Fab>
                    </CreateButtonContainer>
                </ResourcesHeader>
                <ResourcesContainer>{this.renderResources()}</ResourcesContainer>
            </ResourcesWrapper>
        );
    }
}

export default inject("resourceStore")(observer(Resources));
