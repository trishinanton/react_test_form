import React from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Grid} from "@material-ui/core";

type PropsType = {
    label?: string
    setChange:(value:Date | null)=>void
}

export function Birthday(props: PropsType) {

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        props.setChange(selectedDate)
    };
    return (
        <Grid item style={{padding:'20px'}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label={props.label}
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </Grid>

    )
}