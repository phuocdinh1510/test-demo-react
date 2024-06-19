
import React from "react";
import UsersInfo from "./UsersInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers:[
            { id: 1, name: "Hoi Dan IT", age: "10" },
            { id: 2, name: "Pham Phuoc Dinh", age: "20" },
            { id: 3, name: "Anh 7", age: "39" },
        ]
    }
    render() {
        return (
            <div>
                <UsersInfo></UsersInfo>
                <DisplayInfo listUsers={this.state.listUsers}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;

