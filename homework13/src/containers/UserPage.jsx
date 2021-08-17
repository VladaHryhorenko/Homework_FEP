import React from "react";

import UserList from "../components/UserList";

const UserPage = () => {
    let users = [
        { id: 1, firstName: "John", lastName: "Doe", age: 24, job: "Developer"},
        { id: 2, firstName: "Kate", lastName: "Reton", age: 22, job: "Chef"},
        { id: 3, firstName: "Melissa", lastName: "Lout", age: 41, job: "Developer"},
        { id: 4, firstName: "Ann", lastName: "Willington", age: 23, job: "Driver"},
        { id: 5, firstName: "Michel", lastName: "Plank", age: 55, job: "Developer"},
        { id: 6, firstName: "Bob", lastName: "Palanski", age: 32, job: "Waiter"},
        { id: 7, firstName: "Jack", lastName: "Daniels", age: 23, job: "Developer"},
        { id: 8, firstName: "Poul", lastName: "Torn", age: 65, job: "Cashier"},
    ];
    return (
        <UserList users = {users}>
            {(user) => <li key={user.id}>firstName: {user.firstName}, lastName: {user.lastName}, fullName: {user.firstName+" "+user.lastName}, age: {user.age + 5}, job: {user.job}</li>}
        </UserList>
    )
}

export default UserPage;