
import { useState } from 'react';
import Button from './Button';

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text || !deadline) {
            const emptyFiled = (text) ? 'Deadline' : 'Task';
            alert(`Field ${emptyFiled} isn't filled`);
            return;
        }

        onAdd ({text, deadline, reminder});

        setText('');
        setDeadline('');
        setReminder(false);
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task:</label>
                <input type='text' placeholder='some task...'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Deadline:</label>
                <input type='date'
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Remind me:</label>
                <input type='checkbox'
                value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <Button text='Save'><input type='submit'/></Button>
        </form>
    )
}

export default AddTask
