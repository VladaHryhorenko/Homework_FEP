import React from "react";

const UserList = (props) => {
    return (
        <ol>
            {props.users.map((user) => props.children(user))}
        </ol>
      )

}
export default UserList;


