import React from 'react';

import { Link } from 'react-router-dom';

const arrayOfCats = [
    'oakley',
    'milla',
    'angela',
    'chris'
];

function Cats(props) {

    const catLink = arrayOfCats.map(catName => (
        <li>
            <Link to={`${props.match.path}/${catName}`}>{catName}</Link>                
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
            </ul>
        </div>
    )
}

export default Cats;