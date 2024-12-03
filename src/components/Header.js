import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';


const Header = () => {
    return (
        <AppBar position="static" color="black">
            <Toolbar sx={{ display: 'flex', gap: '20px' }}>
                <Link to={`/subjects`} style={{
                    textDecoration: 'none',
                    color: 'black',
                }}>
                SUBJECTS
                </Link>

                <Link to={`/technologies`} style={{
                    textDecoration: 'none',
                    color: 'black',
                }}>
                    TECHNOLOGIES
                </Link>
                <Link to={`/weekly_routine`} style={{
                    textDecoration: 'none',
                    color: 'black',
                }}>
                    WEEKLY ROUTINE
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;