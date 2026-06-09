import React from "react";
import { Link } from "react-router-dom";

const User = ({user,delUser}) => {
  return (
    <tr>
        <td><Link to = {"/users/:" + user._id + "?react=889"} >{user._id} </Link></td>
        <td>{user.name}</td>
        <td> <button onClick= {() =>delUser(user._id)}> X </button> </td>
    </tr>
  )
}

export default User