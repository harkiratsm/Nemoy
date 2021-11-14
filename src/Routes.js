import React from 'react'
import {Route,Switch } from "react-router-dom";
import Main from './components/Main';

import MainLayout from './layout/MainLayout';
import {emoji, math} from './data/data'
import TexttoSpeech from './components/TexttoSpeech';
function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <MainLayout>
                    <Main info={emoji} />
                </MainLayout>
            </Route>
            <Route path="/math" exact>
                <MainLayout>
                    <Main info={math} />
                </MainLayout>
            </Route>
            <Route path="/texttospeech" exact >
                <MainLayout>
                    <TexttoSpeech />
                </MainLayout>
            </Route>

        </Switch>
    )
}

export default Routes
