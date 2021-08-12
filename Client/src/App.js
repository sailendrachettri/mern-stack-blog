import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import About from './pages/About';

// components 
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <div className="max-w-screen-md mx-auto pt-20">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/article/:name" component={Article} />
                        <Route exact path="/articles-list" component={ArticlesList} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;