import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


class Resource extends Component {
    render() {
        const { id,
            name,
            subject_name,
            subject_id,
        } = this.props;
        return (
            <CardContainer>
                <Card key={id} sx={{ marginBottom: 2 }}>
                    <Link to={`/${this.props.subject_name}/${this.props.subject_id}/${this.props.name}/${this.props.id}/chapters`} style={{
                        textDecoration: 'none',
                        color: 'black',
                    }}>
                        <CardContent>
                            <CardTitle>{ name }</CardTitle>
                        </CardContent>
                    </Link>
                </Card>
            </CardContainer>
        );
    }
}

export default inject('resourceStore')(observer(Resource));
