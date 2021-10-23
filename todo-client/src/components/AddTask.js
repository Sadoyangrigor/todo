import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import {addTask} from "../api/api";

function AddTask({updateReduserTasks,showNew, setShowNew}) {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const saveForm = async ()  => {
        let x = await addTask({title,description})
        setTitle('')
        setDescription('')
        updateReduserTasks('add',x)
    }

    return (
        <div className={`add_modal`}>
            <div className={`window`}>
                <div className={`title_input`}>
                    <input
                        value={title}
                        type={`text`}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder={`Title`}
                    />
                </div>
                <div className={`title_input`}>
                            <textarea
                                onChange={(e)=>setDescription(e.target.value)}
                                value={description}
                                placeholder={`Description`}
                            />
                </div>
                <div className={`add`} onClick={()=>saveForm()}>Save</div>
                <div className={`add`} onClick={()=>setShowNew(!showNew)}>
                    {showNew ? 'Close' : 'New'}
                </div>
            </div>
        </div>
    );
}

export default connect()(AddTask);
