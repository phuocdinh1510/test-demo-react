import React from "react";

class AddUsersInfo extends React.Component{
    state = {
        name: '',
        age: '',
        address: 'Binh Dinh'
      }
    
      HandleClickMe = (event) => {
        console.log("Click Me");
    
        this.setState({
          name: "Phuoc Dinh",
          age: Math.floor((Math.random() * 100) + 1)
        })
      }
    
      HandleOnMouseOver(event) {
        // console.log(event);
      }
      HandleOnChange = (event) => {
        this.setState({
          name: event.target.value
        })
      }
      HandleOnAge = (event) => {
        this.setState({
          age: event.target.value
        })
      }
      HandleOnSubmit = (event) => {
        event.preventDefault();
        this.props.HandleAddNewUser({
          id: Math.floor((Math.random() * 100) + 1) + '-ramdom',
          name: this.state.name,
          age:this.state.age
        }
        );
    }
    render() {
        return (
            <div>
            <h1> Hello my friend, I'm {this.state.name} I'm {this.state.age}</h1>
            <form onSubmit={(event) => this.HandleOnSubmit(event)}>
              <label>your name:</label>
              <input type="text" value={this.state.name} onChange={(event) => this.HandleOnChange(event)} />
              <label>your age:</label>
              <input type="text" value={this.state.age} onChange={(event) => this.HandleOnAge(event)} />
              <button>Submit</button>
            </form>
          </div>
        );
    }
}

export default AddUsersInfo 