import React from "react";

class Header extends React.Component {
    state = {
        hour: null,
    }

    componentDidMount() {
        this.getHour()
    }

    getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        this.setState({
            hour
        });
    }

    render() {
        const { hour } = this.state;
        return (
            <header className="header">
                <p className="bold-txt header-title">{hour < 18  ? 'Добрый день!' : 'Добрый вечер!' }</p>
            </header>
        );
    }

}

export default Header;