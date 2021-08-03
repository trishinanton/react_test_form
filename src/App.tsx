import React, {useState} from 'react';
import 'date-fns';
import {Input} from "./Input";
import {Birthday} from "./Birthday";
import {Gender} from "./Gender";
import {Container, Grid} from '@material-ui/core';
import {Btn} from "./Btn";

function App() {


    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [company, setCompany] = useState('')
    const [birthday, setBirthday] = useState<Date | null>(null)
    const [gender, setGender]= useState('female')
    const [serials, setSerials]= useState('')
    const [hobby, setHobby]= useState('')

    const DataConsoleLog = {
        name,
        surname,
        company,
         birthday,
        gender,
        serials,
        hobby
    }

    return (
        <div>
            <Container fixed>
                <Grid container >
                    <Input label={'Your name'} setChange={setName}/>
                    <Input label={'Your surname'} setChange={setSurname} />
                </Grid>
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start">
                    <Input label={'Your company'} setChange={setCompany}/>
                    <Birthday label={'Birthday'} setChange={setBirthday}/>
                    <Gender setChange={setGender}/>
                    {gender === 'female' ?
                        <Input label={'Your serials'} setChange={setSerials}/> :
                        <Input label={'Your hobby'} setChange={setHobby}/>}
                    <Btn DataConsoleLog={DataConsoleLog}/>
                </Grid>


            </Container>

        </div>

    );
}
export default App;

