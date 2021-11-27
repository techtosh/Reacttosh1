import React from 'react';


class SearchBar extends React.Component {

    state = { term : '' };

    onInputChange = (event) => {
        this.setState({ term : event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div className= "search-bar ui segment">
                <form onSubmit= {(event) => this.onFormSubmit(event)} className= "ui form">
                    <div className= "field">
                        <label>Video Search</label>
                        <input type= "text" value= {this.state.term} onChange= {(event) => this.onInputChange(event)} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;