import React, {useState} from "react";

function Download () {
    function convertStorage (event) {
        event.preventDefault()

        let storage = localStorage.getItem("List")
        let list = JSON.parse(storage)
        let inventory = []
        // console.log(inventory[2].item)
        for (let i = 0; i < list.length; i += 1) {
            let row = [];
            row.push(list[i].item)
            row.push(list[i].count)
            inventory.push(row)
        }

        const date = new Date();
        const loadData = (
            `${date.getMonth() + 1}_${date.getDate()}_${date.getFullYear().toString().slice(-2)}`
        )
        // console.log(loadData)
        
        if (!inventory.length) {
            return
        }
        else {
            const content = "data:text/csv;charset=utf-8," + inventory.map(row => row.join(",")).join("\n")
            const uri = encodeURI(content)
            const link = document.createElement("a")
            link.setAttribute("href", uri);
            link.setAttribute("download", loadData);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <button className="button" onClick={convertStorage}>download</button>
    )
}

export default Download