import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import {fetchCats} from "./actions/catActions";
import CatList from "./CatList";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">CatBook</a>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    catPics: state.pictures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
