import React, { useState } from "react";

import{
    FormControl,
    Checkbox,
    FormGroup,
    TextField, Button, Grid, Typography, RadioGroup, FormControlLabel, Radio
 } from '@mui/material';

 const Form = () => {

    const [gender,setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form style ={{marginLeft:'5%', marginRight:'5%'}} onSubmit={handleSubmit}>
            <Typography align='center' color='purple' variant='h3'>Customer Support Form</Typography>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label = "Full Name"
                        variant = "outlined"
                        fullWidth
                    />
                </Grid>

            
                <Grid item xs={12}>
                        <TextField
                            label = "Address Line 1"
                            variant = "outlined"
                            fullWidth
                        />
                </Grid>

                <Grid item xs={12}>
                        <TextField
                            label = "Address Line 2"
                            variant = "outlined"
                            fullWidth
                        />
                </Grid>

                <Grid item xs={12} sm={6}>
                        <TextField
                            label = "Pincode"
                            variant = "outlined"
                            fullWidth
                        />
                </Grid>

                <Grid item xs={12} sm={6}>
                        <TextField
                            label = "Phone Number"
                            variant = "outlined"
                            fullWidth
                        />
                </Grid>

                <Grid item xs={12}>
                        <TextField
                            type='email'
                            label = "Email ID"
                            variant = "outlined"
                            fullWidth
                        />
                </Grid>

                <Grid item xs={12}>
                    <RadioGroup
                        value={gender}
                        onchange={handleGenderChange}
                        row
                        aria-label="gender"
                        name="gender"
                    >
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </Grid>

                <Grid item xs={12}>
                        <TextField
                            label = "Customer ID"
                            variant = "outlined"
                            fullWidth
                        />
                </Grid>

                <Grid item xs={12}>
                        <TextField
                            label = "Description Of Your Problem"
                            variant = "outlined"
                            fullWidth
                            multiline
                            rows={4}
                        />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='body1' color='purple'>Date and time</Typography>
                    <TextField
                        type='datetime-local'
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid container item xs={12}>
                    <Button variant="contained" color="secondary" component="label">
                        Upload Attachments
                        <input type="file" hidden multiple/>
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                    control = {<Checkbox/>}
                    label = "I agree to the terms and Conditions"
                    />
                </Grid>

                <Grid container justifyContent="center" alignItems="center" item xs={12}>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        size="large"

                       > Register a Complaint
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
 };

 export default Form;