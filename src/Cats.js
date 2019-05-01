import React from 'react';

import { Link } from 'react-router-dom';

const arrayOfCats = [
    'oakley',
    'milla',
    'angela',
    'chris'
];

function Cats({match, history}) {

    const catLink = arrayOfCats.map(catName => (
        <li>
            <Link to={`${match.path}/${catName}`}>{catName}</Link>                
        </li>
    ));

    return (
        <div>
            <h1>🐱</h1>
            <ul>
                {catLink}
                {/* <li>
                    <Link to="/cats/oakley">Oakley</Link>                
                </li>
                <li>
                    <Link to="/cats/milla">Milla</Link>
                </li> */}
                <button onClick={() => {
                    // history.push lets us programmatically go to a different route
                    // you can use this instead of a component
                    // you will use this instead of <Link> if you need to trigger some other custom code, like setState
                    history.push('/');
                    // 'history' is not an array, but you can imagine that it manages the paths you've been to as an array
                }}>Go Home</button>
            </ul>
        </div>
    )
}

export default Cats;