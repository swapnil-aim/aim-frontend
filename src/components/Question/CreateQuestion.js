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

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:'',
            errorMessage: null,
        };
    }

    handleSubmitQuestion = async () => {
        const {
            questionStore,
            subject_id: subjectId,
            resource_id: resourceId,
            chapter_id: chapterId,
        } = this.props;
        const { title, description } = this.state;
        try {
            console.log(title, description);
            await questionStore.createQuestion(title, description, subjectId, resourceId, chapterId);
            window.location.hash = `${this.props.subject_name}/${this.props.subject_id}/${this.props.resource_name}/${this.props.resource_id}/${this.props.chapter_name}/${this.props.chapter_id}/questions`;
        } catch (error) {
            const errorMessage = error.message;
            this.setState({ errorMessage });
        }
    };

    render() {
        return (
            <FormWrapper>
                <FormContainer>
                    <h1 style={{color: '#1976d2'}}>Add A New Question</h1>
                    { this.state.errorMessage && <ErrorMessage message={this.state.errorMessage} />}

                    <FormControl fullWidth>
                        <TextField
                            label="Title"
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
                            onChange={e => this.setState({ title: e.target.value })}
                        />

                        <TextField
                            label="Description"
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
                            onChange={e => this.setState({ description: e.target.value })}
                        />


                    </FormControl>
                    <Button
                        style={{ marginTop: '10px' }}
                        fullWidth
                        variant="contained"
                        onClick={this.handleSubmitQuestion}
                    >
                        ADD QUESTION
                    </Button>
                </FormContainer>
            </FormWrapper>
        );
    }
}

export default inject("questionStore")(observer(CreateQuestion));
