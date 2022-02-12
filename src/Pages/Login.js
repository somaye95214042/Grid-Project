
import * as React from 'react';
import {useState} from 'react';
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {Button} from "@material-ui/core";



const Login = () => {


    const { register, handleSubmit, reset, watch, control, formState:{errors} } = useForm();
    const onSubmit = data => console.log(data);


  return (
    <div style={{padding:'30px'}}>
        <Box noValidate
          autoComplete="off" 
          component="form" 
          onSubmit={handleSubmit(onSubmit)} >
          <FormControl fullWidth className='filed'>
            <Controller
              control={control}
              name='firstName'
              render={({ field }) => (
                  <TextField
                      {...field}
                      label="First Name"
                  />
              )}
              rules={{ required: "This field is required", 
              minLength:{
                value: 3, 
                message: "Min lenght is 3"
              }
             }}
            InputLabelProps={{
              shrink: true,
            }}
          />
            <p>{errors.firstName?.message}</p>
          </FormControl>


          <FormControl fullWidth className='filed'>
            <Controller
              control={control}
              name='lastName'
              render={({ field }) => (
                  <TextField
                      {...field}
                      label="Last Name"
                  />
              )}
              rules={{ required: "This field is required", 
              minLength:{
                value: 3, 
                message: "Min lenght is 3"
              }
             }}
            InputLabelProps={{
              shrink: true,
            }}
          />
            <p>{errors.lastName?.message}</p>
          </FormControl>


          <FormControl fullWidth className='filed'>
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                  <TextField
                      {...field}
                      label="PassWord"
                      type="password"
                      autoComplete="current-password"
                  />
              )}
              rules={{ required: "This filed is required", 
              minLength:{
                value: 8, 
                message: "Min lenght is 8"
              }, 
              pattern : /^[A-Za-z]+$/i
             }}
            InputLabelProps={{
              shrink: true,
            }}
          />
            <p>{errors.password?.message}</p>
          </FormControl>


          <FormControl fullWidth className='filed'>
            <Controller
              control={control}
              name='age'
              render={({ field }) => (
                  <TextField
                      {...field}
                      label="Age"
                      type="number"
                  />
              )}
              rules={{ required: "This filed is required", 
              min:{
                value: 18, 
                message: "Min age is 18"
              }, 
              max : {
                value: 99,
                message: "Max age is 99"
              }
             }}
            InputLabelProps={{
              shrink: true,
            }}
          />
            <p>{errors.age?.message}</p>
          </FormControl>
          

          <FormControl fullWidth className='filed'>
          <FormLabel component="legend" style={{paddingBottom:15}}>Select your country</FormLabel>
          <Controller
          render={
                ({ field }) => <Select {...field}>
                  <MenuItem value='australia'>Australia</MenuItem>
                  <MenuItem value='canada'>Canada</MenuItem>
                  <MenuItem value='usa'>USA</MenuItem>
                </Select>
              }
            control={control}
            label='country'
            name="select"
            defaultValue={'australia'}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </FormControl>

          <FormControl fullWidth className='filed'>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
          >

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              name="gender"
              onChange={(value) => onChange(value)}
            >
              <FormControlLabel
              control={
                <Radio value="male">
                <TextField mx={2}>Male</TextField>
                </Radio>
              }
              label="Male"
            />
            <FormControlLabel
              control={
                <Radio value="female">
                <TextField mx={2}>FeMale</TextField>
                </Radio>
              }
              label="Female"
            />
            </RadioGroup>
          )}
          name="gender"
          rules={{ required: 'Gender is required' }}
        />
          </RadioGroup>
        </FormControl>


        <FormControl fullWidth className='filed'>
          <FormLabel component="legend" style={{paddingBottom:15}}>Select all vehicles you have</FormLabel>

          <Controller
            control={control}
            name='car'
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
              control={
                <Checkbox />
              }
              label="I have a Car"
            />
            )}
        />

          <Controller
            control={control}
            name='bike'
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
              control={
                <Checkbox />
              }
              label="I have a Bike"
            />
            )}
        />

          <Controller
            control={control}
            name='boat'
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
              control={
                <Checkbox />
              }
              label="I have a Boat"
            />
            )}
        />
          
          {/* <FormControlLabel
            control={
              <Checkbox 
              checked={state.car} 
              onChange={handleChange} 
              name="car" 
              value="car"/>
            }
            label="I have a car"
          /> */}
          
        </FormControl>

         <FormControl fullWidth className='filed'>
         <Controller
              control={control}
              name='bio'
              render={({ field }) => (
                <TextareaAutosize className='bio'
                {...field}
                  name="bio"
                  minRows={10}
                  maxRows={Infinity}
                  placeholder="Write something..."
          />
              )}
              rules={{ required: "This field is required"}}
          />
            <p>{errors.bio?.message}</p>
          </FormControl>

        <FormControl fullWidth className='filed'>
          <Button className={'submit'}
              type="submit"
              variant="contained"
              color="inherit"
                      >
              Login
          </Button>
        </FormControl>
      
      </Box>
    </div>
  );
}


export default Login;
