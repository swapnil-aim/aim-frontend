import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
} from '@mui/material';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;


class Subject extends Component {
    render() {
        const { id, name, completed } = this.props;

        return (
            <CardContainer>
                <Card key={id} sx={{ marginBottom: 2 }}>
                    <Link to={`/${name}/${id}/resources`} style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                    <CardContent>
                        <CardTitle style={{ color: completed ? 'red' : 'black' }}>{ name }</CardTitle>
                    </CardContent>
                    </Link>
                </Card>
            </CardContainer>
        );
    }
}

export default inject('subjectStore')(observer(Subject));
