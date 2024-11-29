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
        const { id, name } = this.props;

        return (
            <CardContainer>
                <Card key={id} sx={{ marginBottom: 2 }}>
                    <Link to={`/${name}/${id}/resources`} style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                    <CardContent>
                        <CardTitle>{ name }</CardTitle>
                    </CardContent>
                    </Link>
                    {/*<CardActions style={{ padding: '14px' }} disableSpacing>*/}
                    {/*    <Grid*/}
                    {/*        justify="space-between" // Add it here :)*/}
                    {/*        container*/}
                    {/*    >*/}
                    {/*        <Grid item>*/}
                    {/*            <FormControl style={{ width: '140px' }}>*/}
                    {/*                <Select*/}
                    {/*                    value={this.props.status}*/}
                    {/*                    onChange={this.handleStatusChange}*/}
                    {/*                    displayEmpty*/}
                    {/*                >*/}
                    {/*                    <MenuItem value={'OPEN'}>Open</MenuItem>*/}
                    {/*                    <MenuItem value={'IN_PROGRESS'}>In Progress</MenuItem>*/}
                    {/*                    <MenuItem value={'DONE'}>Done</MenuItem>*/}
                    {/*                </Select>*/}
                    {/*            </FormControl>*/}
                    {/*        </Grid>*/}

                    {/*        <Grid item>*/}
                    {/*            <IconButton onClick={this.deleteTask}>*/}
                    {/*                <DeleteIcon color="error" />*/}
                    {/*            </IconButton>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>*/}
                    {/*</CardActions>*/}
                </Card>
            </CardContainer>
        );
    }
}

export default inject('subjectStore')(observer(Subject));
