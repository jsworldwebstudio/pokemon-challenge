import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import uuid from 'uuid';
import { connect } from 'react-redux';
import { getPokemon, deletePokemon } from '../actions/pokemonActions';
import PropTypes from 'prop-types';

class Pokemons extends Component {
  /*
  state = {
    items: [
      { id: uuid(), name: 'Cheese' },
      { id: uuid(), name: 'Bread' },
      { id: uuid(), name: 'Bacon' },
      { id: uuid(), name: 'Eggs' }
    ]
  };
  */

  componentDidMount() {
    //const { loading } = this.props.pokemon;

    // Initially display Pokemons with id's: 7, 4 and 1
    let pokeid = 7;
    this.props.getPokemon(pokeid);

    /*
    if (loading) {
      <Spinner />
    };
    */

    pokeid = 4;
    this.props.getPokemon(pokeid);

    pokeid = 1;
    this.props.getPokemon(pokeid);
  };

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  getRandomPokemon = () => {
    //const { pokemons } = this.props.pokemon;
    const id = 111111;
    this.props.deletePokemon(id);
  }

  render() {
    const { pokemons } = this.props.pokemon;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {pokemons.map((poke) => (
              <CSSTransition key={poke.id} timeout={500} classNames="fade">
                <ListGroupItem>
                  name: {poke.name}<br />
                  weight: {poke.weight}<br />
                  height: {poke.height}<br />
                  default_image: {poke.default_image}<br />
                  base_experience: {poke.base_experience}<br />
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

Pokemons.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  deletePokemon: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps, { getPokemon, deletePokemon })(Pokemons);