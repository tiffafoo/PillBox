import React from "react";
import logo from "../../public/logo.png"
import { Menu, Icon } from "semantic-ui-react";

class Header extends React.Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { path }) => this.context.router.transitionTo(path);
  render() {
		return (
      <Menu secondary icon="labeled">
				<Menu.Item name="home" path="/" onClick={this.handleItemClick} >
					<img src={logo} alt="Home" className="nav-home" />
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item name="pillbox" path="/add" onClick={this.handleItemClick}>
						<Icon name="add square" /> Add Medication
					</Menu.Item>
					<Menu.Item name="pillbox" path="/pillbox" onClick={this.handleItemClick}>
						<Icon name="circle thin" /> My Pillbox
					</Menu.Item>
				</Menu.Menu>
      </Menu>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header;
