import React, { Component } from 'react';
import { TextField, FormControl, Button } from '@mui/material';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import ErrorMessage from '../../components/ErrorMessage';

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: black;
  padding: 30px;
  border-radius: 5px;
`;

class CreateTechnology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            resource:'',
            errorMessage: null,
        };
    }

    handleSubmitTechnology = async () => {
        const {
            technologyStore,
        } = this.props;
        const { name, resource } = this.state;
        try {
            await technologyStore.createTechnology(name, resource);
            window.location.hash = `/technologies`;
        } catch (error) {
            const errorMessage = error.message;
            this.setState({ errorMessage });
        }
    };

    render() {
        return (
            <FormWrapper>
                <FormContainer>
                    <h1 style={{color: '#1976d2'}}>Add A New Technology</h1>
                    { this.state.errorMessage && <ErrorMessage message={this.state.errorMessage} />}

                    <FormControl fullWidth>
                        <TextField
                            label="Name"
                            placeholder=""
                            margin="normal"
                            variant="outlined"
                            sx={{
                                '& label': { color: '#ffffff' },                  // Label color (white)
                                '& input': { color: '#ffffff' },                  // Input text color (white)
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ffffff' },       // Default border color (white)
                                    '&:hover fieldset': { borderColor: '#61dafb' }, // Hover border color (light blue)
                                    '&.Mui-focused fieldset': { borderColor: '#61dafb' }, // Focused border color (light blue)
                                },
                            }}
                            onChange={e => this.setState({ name: e.target.value })}
                        />

                        <TextField
                            label="Resource"
                            placeholder=""
                            margin="normal"
                            variant="outlined"
                            sx={{
                                '& label': { color: '#ffffff' },                  // Label color (white)
                                '& input': { color: '#ffffff' },                  // Input text color (white)
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ffffff' },       // Default border color (white)
                                    '&:hover fieldset': { borderColor: '#61dafb' }, // Hover border color (light blue)
                                    '&.Mui-focused fieldset': { borderColor: '#61dafb' }, // Focused border color (light blue)
                                },
                            }}
                            onChange={e => this.setState({ resource: e.target.value })}
                        />
                    </FormControl>
                    <Button
                        style={{ marginTop: '10px' }}
                        fullWidth
                        variant="contained"
                        onClick={this.handleSubmitTechnology}
                    >
                        ADD TECHNOLOGY
                    </Button>
                </FormContainer>
            </FormWrapper>
        );
    }
}

export default inject("technologyStore")(observer(CreateTechnology));
