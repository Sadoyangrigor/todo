import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';

import {updateTask} from "../api/api";

function AddTask({updateReduserTasks,showUpdateModal, setShowUpdateModal, editableTask}) {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [id,setId] = useState('')

    useEffect(()=>{
        setTitle(editableTask.title)
        setDescription(editableTask.description)
        setId(editableTask.id)
    },[editableTask])

    const saveForm = async ()  => {
        let updateData = {id};
        if(title !== editableTask.title)
            updateData.title = title
        if(description !== editableTask.description)
            updateData.description = description

        let x = await updateTask(updateData)
        setTitle('')
        setDescription('')
        updateReduserTasks('update',x)
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
                <div className={`add`} onClick={()=>setShowUpdateModal(!showUpdateModal)}>
                    {showUpdateModal ? 'Close' : 'New'}
                </div>
            </div>
        </div>
    );
}

export default connect()(AddTask);
