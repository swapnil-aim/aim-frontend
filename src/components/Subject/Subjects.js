import { Component } from "react";
import { inject, observer } from "mobx-react";
import {Fab} from "@mui/material";
import Subject from "./Subject";
import styled from "styled-components";

const SubjectsWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const SubjectsHeader = styled.div`
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
  color: #61dafb;
  text-align: center;
  font-size: 36px;
`;

const SubjectsContainer = styled.div`
  padding-top: 20px;
`;

class Subjects extends Component {
  async componentDidMount() {
    await this.props.subjectStore.fetchSubjects();
  }
  renderSubjects() {
    const { subjectStore } = this.props;
    const subjects = subjectStore.subjects;
    if (!subjects.length) {
      return (
        <EmptyTasksPlaceholder>
          No Subjects available. Create one?
        </EmptyTasksPlaceholder>
      );
    }
    return subjects.map((subject) => (
      <Subject key={subject.id} id={subject.id} name={subject.name} />
    ));
  }
  render() {
    return (
      <SubjectsWrapper>
        <SubjectsHeader>
          <CreateButtonContainer>
            <Fab
                variant="extended"
                onClick={() => { window.location.hash = '/subject/create'; }}
            >
              Create A Subject
            </Fab>
          </CreateButtonContainer>
        </SubjectsHeader>
        <SubjectsContainer>{this.renderSubjects()}</SubjectsContainer>
      </SubjectsWrapper>
    );
  }
}

export default inject("subjectStore")(observer(Subjects));
