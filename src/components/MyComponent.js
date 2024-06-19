
import React from "react";
import AddUsersInfo from "./AddUsersInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers:[
            { id: 1, name: "Hoi Dan IT", age: "10" },
            { id: 2, name: "Pham Phuoc Dinh", age: "20" },
            { id: 3, name: "Anh 7", age: "39" },
        ]
    }

    HandleAddNewUser = (userOj) => {
        this.setState({
         listUsers:[...this.state.listUsers,userOj]
     })
    }
    render() {
        return (
            <div>
                <AddUsersInfo
                    HandleAddNewUser = {this.HandleAddNewUser}
                />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    
                >

                </DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;

