import { FormEvent, useState } from 'react';
import './App.css';
import { BugPriority, IBug } from './IBug';
import {v4 as uuid } from 'uuid';
import BugListTable from './BugListTable';

function App() {
  const [newBugDescription, setNewBugDescription ] = useState<string>('');
  const [newBugPriority, setNewBugPriority] = useState<string>('Medium');
  const [bugList, setBugList] = useState<IBug[]>([]);

  const addBug = (event: FormEvent) => {
    event.preventDefault();
    const newBug: IBug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    }

    setBugList([
      ...bugList,
      newBug
    ]);

    setNewBugDescription('');
    setNewBugPriority('Medium');
  };
  const deleteBug = (id:string) => {
    const bugs = bugList.filter(bug => bug.id !== id);
    
    setBugList(bugs);
  };
console.log(bugList)
  return (
    <div className="app">
      <h1>🐜 bug chaser</h1>

      <form onSubmit={addBug} className="add-new-bug-form">
        <label htmlFor="newBugDescription">New bug description:</label>
        <input data-testid="newBugDescription" type="text" id="newBugDescription" value={newBugDescription} onChange={event => setNewBugDescription(event.target.value)}/>
        <label htmlFor="newBugPriority">New bug priority:</label>
        <select id="newBugPriority" value={newBugPriority} onChange={event => setNewBugPriority(event.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button data-testid="addBtn" type="submit">Add new bug</button>
      </form>
      <BugListTable bugs={bugList} onDeleteBug={(id: string) => deleteBug(id)} />
    </div>
  );
}

export default App;
