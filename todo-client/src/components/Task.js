import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';

function Task({item,key,deleteTask, editTask}) {
    return (
        <div className={`item`} key={key}>
            <div className={`title`}>{item.title} - {item.id}</div>
            <div className={`date`}>01.02.2021 15:35</div>
            <div className={`description`}>{item.description}</div>
            <div className={`buttons`}>
                <div className={`edit`} onClick={()=>editTask(item)}>Edit</div>
                <div className={`delete`} onClick={()=>deleteTask(item.id)}>Delete</div>
            </div>
        </div>
    );
}

export default connect()(Task);
