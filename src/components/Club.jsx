import React from "react";

const Club = (props) => {
    return (
        <td className={"Club"}>
            <img src={props.img} width="100" height="100"></img>
            <h5>{props.name}</h5>
            <a href={props.link} className = "button"> Club Page</a>
        </td>
    )
}
export default Club;