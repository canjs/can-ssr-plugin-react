import React from "react";
import ReactDOM from "react-dom";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchUsers() {
	var component = this;

	setTimeout(function(){
		component.setState({
			users: [
				{ id: 1, name: "Matthew" },
				{ id: 2, name: "Wilbur" }
			]
		});
	}, 20);
  }

  render() {
    let users = this.state.users;

    if(!users) {
      this.fetchUsers();

      return <div id="empty">No users</div>;
    }

    return <div id="users">
      {users.map(user => {
        return <li key={user.id}>{user.name}</li>
      })}
    </div>
  }
}

export function createState() {
	return {};
}

export function render(document){
	var div = document.createElement("div");
	document.body.appendChild(div);
	ReactDOM.render(<Users />, div);
}
