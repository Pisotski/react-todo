import * as React from 'react';
import './App.css'

// Go ahead and render the item’s url, author, num_comments, and points as well. 
// In the special case of the url, use an HTML anchor HTML element (read: <a> tag) that surrounds the title. 

const list = [
  {
    title: 'Cleaning',
    id: 0,
  }, {
    title: 'Groceries',
    id: 1,
  }, {
    title: 'Work',
    id: 2,
  },
  {
    title: 'Sleep',
    id: 3,
  },
];

function App() {
  return (
    <div className="body-wrapper">
      <ul className="list-wrapper">
        {list.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" id={item.title} name={item.title} value={item.title}/>
              <label htmlFor={item.title}>{item.title}</label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App