import React from "react";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";

type PropsType = {
    setChange: (value:string)=>void
}
export function Gender(props:PropsType) {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        props.setChange(event.currentTarget.value)
    };
    return (
        <Grid item style={{padding:'20px'}}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                </RadioGroup>
            </FormControl>
        </Grid>

    )


}