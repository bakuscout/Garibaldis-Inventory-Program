import { useState } from 'react'
import './App.css'
import Inventory from './Inventory'
import Download from './Download';

function App() {
  const [inventory, setInventory] = useState([]);

  // Persistance WIP

  // if (localStorage.getItem("List").length === 2) {
  //   console.log("Storage is Empty", localStorage.getItem("List").length)
  // }
  // else if (inventory.length === 0 && localStorage.getItem("List").length > 2) {
  //   let storage = localStorage.getItem("List")
  //   let list = JSON.parse(storage)
  //   setInventory([...inventory, list]);
  //   // console.log("inventory is now " + inventory.length)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const input = [document.getElementById("item").value, document.getElementById("count").value]
    // console.log(input)
    if (input[0] === '' || input[1] === '') {
      console.log("No Input")
      return
    }
    else {
      // console.log("Input Recieved")
      const newItem = {item: input[0], count: input[1]}
      setInventory([...inventory, newItem]);
      // console.log("Input Set")
    }
  }
  localStorage.setItem("List", JSON.stringify(inventory))

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
                <input type="number" id="count" placeholder="how many" step="0.125"/>
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