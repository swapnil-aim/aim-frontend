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


class Technology extends Component {
    render() {
        const { id, name, resource, completed,
        } = this.props;
        return (
            <CardContainer>
                <Card key={id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <CardTitle style={{ color: completed ? 'red' : 'black' }}>{ name } - { resource }</CardTitle>
                    </CardContent>
                </Card>
            </CardContainer>
        );
    }
}

export default inject('technologyStore')(observer(Technology));
