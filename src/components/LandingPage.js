import React, { Component } from "react";
import { inject } from "mobx-react";
import { Card, CardContent } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubjectsWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 16px;
`;

const SubjectsHeader = styled.div`
  display: flex;
  justify-content: center;
    padding: 10px;
    margin-bottom: 40px;
    font-size: 40px;
`;

const SubjectsContainer = styled.div`
  padding-top: 20px;
`;

class Subjects extends Component {
    render() {
        return (
            <SubjectsWrapper>
                <SubjectsHeader>
                   Welcome To My Mind !!!
                </SubjectsHeader>
                <SubjectsContainer>
                    <CardContainer>
                        <Card key='subjects' sx={{ marginBottom: 2 }}>
                            <Link to={`/subjects`} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardContent>
                                    <CardTitle>Bishaya</CardTitle>
                                </CardContent>
                            </Link>
                        </Card>
                        <Card key='technologies' sx={{ marginBottom: 2 }}>
                            <Link to={`/technologies`} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardContent>
                                    <CardTitle>Yuktimaan</CardTitle>
                                </CardContent>
                            </Link>
                        </Card>
                        <Card key='weekly_routine' sx={{ marginBottom: 2 }}>
                            <Link to={`/weekly_routine`} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardContent>
                                    <CardTitle>Saptahika Samaya Sarani </CardTitle>
                                </CardContent>
                            </Link>
                        </Card>
                    </CardContainer>
                </SubjectsContainer>
            </SubjectsWrapper>
        );
    }
}

export default inject("subjectStore")(Subjects);
