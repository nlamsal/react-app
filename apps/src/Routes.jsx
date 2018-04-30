import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import News from './components/News/News';
import Contact from './components/ContactUs/Contact';

class Routes extends React.Component {
    render() {
        return (
            < Switch >
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route path="/contact" component={Contact} />
            </Switch >
        );
    }
}
export default Routes;
