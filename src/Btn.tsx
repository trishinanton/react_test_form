import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import React from "react";

type PropsType={
    DataConsoleLog:{
        name:string
        surname:string
        company: string,
        birthday: Date | null,
        gender:string,
        serials:string,
        hobby:string
    }
}
export function Btn(props:PropsType) {
    const sendData=()=>{
        console.log(props.DataConsoleLog)
    }
    return (
        <Grid item style={{padding: '20px'}}>
            <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon/>}
                onClick={sendData}
            >
                Send
            </Button>
        </Grid>

    )
}