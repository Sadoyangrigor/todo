import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import {deleteTask, getTasks} from "../../api/api";
import Task from "../../components/Task";
import AddTask from "../../components/AddTask";
import EditTask from "../../components/EditTask";
import ResultModal from "../../components/ResultModal";

function Index({taskList, setAllTasks, setAddedTask, setUpdatedTask, removingTask}) {
    const [requested,setRequested] = useState(false)
    const [showNew,setShowNew] = useState(false)
    const [showResultModal,setShowResultModal] = useState(false)
    const [modalText,setModalText] = useState('')
    const [showUpdateModal,setShowUpdateModal] = useState(false)
    const [editableTask,setEditableTask] = useState({})

    useEffect(()=>{
        if(!requested){
            getAllTasks();
        }
    },[taskList])

    const getAllTasks = async ()  =>{
        let tasks = await getTasks();
        setAllTasks(tasks)
        setRequested(true)
    }

    const updateReduserTasks = (type,x) => {
        let text;
        if(type === 'add'){
            setAddedTask(x);
            setShowNew(false)
            text = 'Item Added';
        }
        if(type === 'update'){
            setUpdatedTask(x);
            setShowUpdateModal(false)
            text = 'Item Updated';
        }
        showResponseModal(true, text)

    }
    const removeTask = async x => {
        await deleteTask(x);
        removingTask(x)
        showResponseModal(true,'Item Removed')
    }

    function showResponseModal(open,text) {
        setModalText(text)
        setShowResultModal(open)
        setTimeout(function () {
            setShowResultModal(!open)
        }, 1400)
    }

    const taskEdit = (x) => {
        setEditableTask(x)
        setShowUpdateModal(true)
    }

    return (
        <section>
            {showNew ?
                <AddTask
                    updateReduserTasks={updateReduserTasks}
                    showNew={showNew}
                    setShowNew={setShowNew}
            />:null}
            {showUpdateModal ?
                <EditTask
                    updateReduserTasks={updateReduserTasks}
                    showUpdateModal={showUpdateModal}
                    setShowUpdateModal={setShowUpdateModal}
                    editableTask={editableTask}
            />:null}
            {showResultModal ?
                <ResultModal
                    text={modalText}
            />:null}
            <div className={`add`} onClick={()=>setShowNew(true)}>
                New
            </div>
            {taskList.map((item, i) => (
                <Task item={item}  key={i} deleteTask={removeTask} editTask={taskEdit} />
            ))}
        </section>
    );
}

export default connect(
    (state) => ({
        taskList:state.taskList,
    }),
    dispatch => ({
        setAllTasks:(data) => {
            dispatch({ type: 'TASK_LIST_ALL', payload:data });
        },
        setUpdatedTask:(data) => {
            dispatch({ type: 'TASK_LIST_UPDATE', payload:data });
        },
        setAddedTask:(data) => {
            dispatch({ type: 'TASK_LIST_ADD', payload:data });
        },
        removingTask:(id) => {
            dispatch({ type: 'TASK_LIST_REMOVE', payload:id });
        },
    })
)(Index);
