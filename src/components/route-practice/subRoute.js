import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const subRoute = () => {
    return (
        <div>
            <h3>Sub Router</h3>
            <ul>
                <li><Link to='/subRoute/subRoute1'>서브라우트 1</Link></li>
                <li><Link to='/subRoute/subRoute2'>서브라우트 2</Link></li>
                <li><Link to='/subRoute/subRoute3'>서브라우트 3</Link></li>
            </ul>
            <Route path='/subRoute' exact render={() => <div>Route 태그의 render 속성은 컴포넌트가 아니라 JSX 자체를 렌더링 할 수 있다</div>} />
            <Route path='/subRoute/:username' component={Profile} />
        </div>
    );
}

export default subRoute;