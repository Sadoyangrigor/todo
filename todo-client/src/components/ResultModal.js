import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';

function ResultModal({text}) {
    return (
        <div className={`modal`} >
            <span>{text}</span>
        </div>
    );
}

export default connect()(ResultModal);
