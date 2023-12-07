import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';


const Like = (props) => {
    return (
        <React.Fragment>
            <button onClick={props.onClick}>
                <FontAwesomeIcon icon={(props.liked) ? faHeart : faHeartCrack} />
            </button>
        </React.Fragment>
    );
}

export default Like;