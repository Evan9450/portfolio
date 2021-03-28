// import Home from './components/pages/Home/Home';
import { About, Footer, Hero, Navbar } from './components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { GlobalStyleAll } from './globalStyles';
import { useEffect } from 'react';

// import Home from './components/pages/Home';

function App() {
    let path = window.location.hash;
    // path = path.split('/');
    // path = path[path.length - 1];
    console.log(path.substring(1));
    const id = window.location.hash.substring(1);
    if (id) {
        window.scrollTo(0, id.offsetTop - window.innerHeight / 2);
    }

    // 没有的话，滚动到头部
    // else {
    //   document.body.scrollTop = document.documentElement.scrollTop = 0;
    // }

    // useEffect(() => {
    //     if (window.location.hash) {
    //         const id = window.location.hash.substring(1);
    //         setTimeout(() => {
    //             const el = document.getElementById(id);
    //             if (el) {
    //                 el.scrollIntoView();
    //                 el.focus();
    //             }
    //             console.log(el);
    //         }, 0);
    //     }
    // });

    return (
        <Router>
            <GlobalStyleAll />
            <Navbar />
            <Switch>
                <Route path="/" component={Hero} />
            </Switch>
            <About />
            <Footer />
        </Router>
    );
}

export default App;
