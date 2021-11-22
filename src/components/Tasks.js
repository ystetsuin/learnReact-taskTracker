
import Task from "./Task"

const Tasks = ({ tasks, onDelete, toggleReminder }) => {

    return (
        tasks.map(({ id, ...props}) => {
            return (
                <Task key={id} id={id} {...props}
                onDelete={onDelete}
                toggleReminder={toggleReminder} />
            )
        })
    )
}

export default Tasks
