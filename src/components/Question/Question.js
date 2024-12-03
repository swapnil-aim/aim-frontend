import React, { Component } from 'react';
import {
    Card,
    CardContent,
} from '@mui/material';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;


class Question extends Component {
    render() {
        const { id,
            title,
            description,
            subject_name,
            subject_id,
            resource_name,
            resource_id,
            chapter_id,
            chapter_name,
            completed,
        } = this.props;
        return (
            <CardContainer>
                <Card key={id} sx={{ marginBottom: 2 }}>
                        <CardContent>
                            <CardTitle style={{ color: completed ? 'red' : 'black' }}>{ title }</CardTitle>
                        </CardContent>
                </Card>
            </CardContainer>
        );
    }
}

export default inject('questionStore')(observer(Question));
