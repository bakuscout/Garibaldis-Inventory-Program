import React from "react";

function Inventory (props) {
  // console.log(props.data)
  if(props.data[0] === undefined) {
    return
  }
  else {
  const items = props.data.map((obj, i) => {
    return (
      <tr key={"id-" + i}>
          <td>{obj.item}</td>
          <td>{obj.count}</td>
          <td><button className="button" onClick={()=> {props.onDelete(i)}}>remove</button></td>
      </tr>
    )
  })

    return (
      <>
        {items}
      </>
    )
  }
}

export default Inventory;