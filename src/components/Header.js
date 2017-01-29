import React from "react";
import axios from "axios";
import logo from "../../public/logo.png"
import { Menu, Icon } from "semantic-ui-react";

class Header extends React.Component {
  state = {
    recording: false
 }

  handleItemClick = (e, { path }) => this.context.router.transitionTo(path);
  activateVoice = () => {
    this.setState({recording: !this.state.recording});
    axios.get('/api/nuance')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
		return (
      <Menu secondary icon="labeled">
				<Menu.Item name="home" path="/" onClick={this.handleItemClick} >
					<img src={logo} alt="Home" className="nav-home" />
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item name="activate voice" onClick={this.activateVoice}
            className={this.state.recording ? 'mic recording' : 'mic'}>
						<Icon name="unmute" /> Activate Voice
					</Menu.Item>
					<Menu.Item name="add medication" path="/add" onClick={this.handleItemClick}>
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
