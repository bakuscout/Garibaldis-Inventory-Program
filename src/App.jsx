import { useState } from 'react'
import './App.css'
import Inventory from './Inventory'
import Download from './Download';

function App() {
  const [inventory, setInventory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()
    const input = [document.getElementById("item").value, document.getElementById("count").value]
    // console.log(input)
    if (input[0] === '' || input[1] === '') {
      return
    }
    else {
      const newItem = {item: input[0], count: input[1]}
      setInventory([...inventory, newItem]);
    }
  }
  localStorage.setItem("List", JSON.stringify(inventory))
  // console.log(JSON.parse(localStorage.getItem('List')))

  function resetStorage () {
    localStorage.clear();
  }

  function removeItem (index) {
    const newArray = inventory
    if (index !== -1) {
      newArray.splice(index, 1)
      setInventory([...newArray])
    }
  }

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
                <input type="text" id="item" placeholder="new item"/>
                <input type="number" id="count" placeholder="how many"/>
                <input type="submit" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <Inventory data={inventory} onDelete={removeItem}/>
        </tbody>
      </table>
      <form>
        <button className="button" type="submit" onSubmit={resetStorage}>clear</button>
        <Download />
      </form>
    </>
  )
}

export default App