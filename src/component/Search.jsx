import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type:'all',
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search , this.state.type);
    }
  };

  handleFelter = (e) => {
    this.setState(
        () => ({type: e.target.dataset.type}),
        () => {this.props.searchMovies(this.state.search, this.state.type)}
    )
  }

  render() {
    return (
      <div className="row">
        <div
          className="col s22"
          style={{ display: "flex", alignItem: "center" }}>
          <input
            className="validate"
            placeholder="Search"
            id="search"
            type="search"
            onChange={(e) => this.setState({ search: e.target.value })}
            value={this.state.search}
            onKeyDown={this.handleKey}/>
          <button
            className="waves-effect waves-light btn-large #c62828 red darken-3"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
            Search
          </button>
        </div>
        <div className="gap">
          <label>
            <input class="with-gap" 
            name="type" 
            type="radio" 
            data-type="all" 
            onChange={this.handleFelter} 
            checked={this.state.type === 'all'} />
            <span>ALL</span>
          </label>

          <label>
            <input class="with-gap" 
            name="type" 
            type="radio" 
            data-type="movie" 
            onChange={this.handleFelter} 
            checked={this.state.type === 'movie'} />
            <span>MOVIES</span>
          </label>

          <label>
            <input class="with-gap" 
            name="type" 
            type="radio" 
            data-type="series" 
            onChange={this.handleFelter} 
            checked={this.state.type === 'series'} />
            <span>SERIES</span>
          </label>

          <label>
            <input class="with-gap" 
            name="type" 
            type="radio"
             data-type="game" 
            onChange={this.handleFelter} 
            checked={this.state.type === 'game'} />
            <span>GAMES</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
