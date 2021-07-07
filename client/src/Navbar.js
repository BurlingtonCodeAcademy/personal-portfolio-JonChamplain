import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <a className="active" href="/">About</a>
            <a className="header-text" href="/work">Work</a>
            <a className="header-text" href="/contact">Contact</a>
        </>
    )
}

function Work() {
    return (
        <>
            <a className="header-text" href="/">About</a>
            <a className="active" href="/work">Work</a>
            <a className="header-text" href="/contact">Contact</a>
        </>
    )
}

function Contact() {
    return (
        <>
            <a className="header-text" href="/">About</a>
            <a className="header-text" href="/work">Work</a>
            <a className="active" href="/contact">Contact</a>
        </>
    )
}

export default function Navbar(props) {
    return (
        <div className="topnav">
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/work'} component={Work} />
                <Route path={'/contact'} component={Contact} />
            </Switch>
        </div>
    )
}