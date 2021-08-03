import {TextField} from "@material-ui/core";
import React, {useRef, useState, RefObject, ChangeEvent} from "react";
import {Container, Grid} from '@material-ui/core';

type PropsType = {
    label?: string
    setChange:(value:string)=>void
}


export function Input(props: PropsType) {
    const [value, setValue] = useState('')
    const ChangeValue = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setValue(e.currentTarget.value)
        props.setChange(e.currentTarget.value)
    }
    // const inputRef = useRef<HTMLInputElement>(null)
    // const SendData = ()=>{
    //
    //     const el = inputRef.current as HTMLInputElement
    //     const inp = el.children[1].children[0]
    //
    //     console.log(el.value)
    //     // console.log(el.value)
    // }
    return (
        <Grid item style={{padding:'20px'}}>
            <TextField
                // ref={inputRef}
                required
                label={props.label}
                defaultValue=""
                variant="outlined"
                value = {value}
                onChange={ChangeValue}
            />

        </Grid>

    )
}