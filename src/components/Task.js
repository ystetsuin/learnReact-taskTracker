import { BiTrash  } from 'react-icons/bi/'

const Task = ({ text, deadline, id, reminder, onDelete, toggleReminder }) => {
    return (
        <div className={`tasks task ${reminder ? 'reminder' : ''}`}
        onDoubleClick={() => toggleReminder(id)}>
            <div className='task-text'>{text}</div>
            <span className='tasks task deadline'>{deadline}</span>
            <div className='trash'><BiTrash onClick={() => onDelete(id)}/></div>
        </div>
    )
}

export default Task