import React from "react";

function Download () {
    function convertStorage (event) {
        event.preventDefault()
        /*2. convert to csv
          3. download csv file
        */
        let storage = localStorage.getItem("List")
        let invObjArr = JSON.parse(storage)
        let inventory = []
        // console.log(inventory[2].item)
        for (let i = 0; i < invObjArr.length; i += 1) {
            inventory.push(invObjArr[i].item)
            inventory.push(invObjArr[i].count)
            console.log(inventory)
        }
    }

    return (
        <button className="button" onClick={convertStorage}>download</button>
    )
}

export default Download