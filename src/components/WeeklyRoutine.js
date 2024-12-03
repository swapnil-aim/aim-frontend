import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const schedule = {
    Monday: ['AWS', 'Finance Book', 'Kannada', 'Normal Book', 'Coding - 4 Questions', 'Ukelele', 'Table Tennis Shadow', 'Ukelele Practice'],
    Tuesday: ['System Design', 'Finance Book', 'Kannada', 'Normal Book', 'Coding - 4 Questions', 'Ukelele', 'Table Tennis Shadow', 'Ukelele Practice'],
    Wednesday: ['LLD', 'Finance Book', 'Kannada', 'Normal Book', 'Coding - 4 Questions', 'Ukelele', 'Table Tennis Shadow', 'Ukelele Practice'],
    Thursday: ['Technology', 'Finance Book', 'Kannada', 'Normal Book', 'Coding - 4 Questions', 'Ukelele', 'Table Tennis Shadow', 'Ukelele Practice'],
    Friday: ['Coding', 'Finance Book', 'Kannada', 'Normal Book', 'Coding - 4 Questions', 'Ukelele', 'Table Tennis Shadow', 'Ukelele Practice'],
    Saturday: ['AWS', 'Finance Book', 'Kannada', 'Normal Book', 'Coding - 4 Questions', 'Ukelele', 'Table Tennis Shadow', 'Ukelele Practice'],
    Sunday: ['AWS', 'Finance Book', 'Kannada', 'Normal Book', 'Coding - 4 Questions', 'Ukelele', 'Table Tennis Shadow', 'Ukelele Practice']
};

const WeeklyRoutine = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ fontWeight: 'bold' }}>
                        <TableCell sx={{ fontWeight: 'bold' }}>Day</TableCell> {/* Header for the first column */}
                        <TableCell sx={{ fontWeight: 'bold' }}>Morning/Major task</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Office(Finance Book)</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Office(Normal Book)</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Office(Kannada)</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Coding</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Extra Curricular</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Table Tennis Shadow</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Ukelele Practice</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(schedule).map((day) => (
                        <TableRow key={day}>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                {day}
                            </TableCell>
                            {/* Fill the row with data from the schedule object */}
                            {schedule[day].map((item, index) => (
                                <TableCell key={index}>{item}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WeeklyRoutine;