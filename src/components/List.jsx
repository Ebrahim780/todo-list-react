import React, { useContext } from 'react';
import ToDo from './ToDo';
import { ToDoContext } from '../contexts/ToDoProvider';

const List = () => {
  const { todos, farsi } = useContext(ToDoContext)

  return [
    todos.length ?
      <div className='row list' key={1}>
        <div className='col s12 m6 l4'>
          <div className='card-panel green'>
            <h5 className='list__header'>{farsi ? 'مهم نیست انجام بشه' : 'No Matter to done'}</h5>
            <ToDo priority='low' />
          </div>
        </div>
        <div className='col s12 m6 l4'>
          <div className='card-panel orange'>
            <h5 className='list__header'>{farsi ? 'بهتره انجام بشه' : 'Better to done'}</h5>
            <ToDo priority='medium' />
          </div>
        </div>
        <div className='col s12 m6 l4'>
          <div className='card-panel red'>
            <h5 className='list__header'>{farsi ? 'باید انجام بشه' : 'Have to done'}</h5>
            <ToDo priority='high' />
          </div>
        </div>
      </div>
      : null]
}

export default List;