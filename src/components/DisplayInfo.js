import React from "react";
class DisplayInfo extends React.Component{
    state = {
         isShowListUser : true
     }
    handleShowHide = () => {
        this.setState(
            {
                isShowListUser: !this.state.isShowListUser
            }
        )
    }
    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
      

        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser === true ? "Hide List Users: " : "Show List Users:" }</span>
                </div> 
                {this.state.isShowListUser &&
                    <div>
                        {
                            listUsers.map((user, index) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>My Name's {user.name}</div>
                                        <div>My Name's {user.age}</div>
                                        <hr></hr>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfo;