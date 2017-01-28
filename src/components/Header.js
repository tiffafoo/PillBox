import React from "react";
import { Menu, Icon } from "semantic-ui-react";

class Header extends React.Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
		const { activeItem } = this.state

		return (
      <Menu icon="labeled">
				<Menu.Item name="home" onClick={this.handleItemClick} >
					<img src="http://placehold.it/150x150" alt="Home" className="nav-home" />
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item name="pillbox" onClick={this.handleItemClick}>
						<Icon name="add square" /> Add Medication
					</Menu.Item>
					<Menu.Item name="pillbox" onClick={this.handleItemClick}>
						<Icon name="circle thin" /> My Pillbox
					</Menu.Item>
				</Menu.Menu>
      </Menu>
    )
  }
}

export default Header;
