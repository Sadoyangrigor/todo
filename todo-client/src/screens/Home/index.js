import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Index() {
    return (
        <div className={''}>
            <Link to={'/tasks'}>Go to Tasks</Link>
        </div>
    );
}

export default connect()(Index);
