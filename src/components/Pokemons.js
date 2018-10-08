import React, { Component } from 'react';
import { Container, Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, CardHeader, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPokemon, deletePokemon, getPokemonInitial } from '../actions/pokemonActions';
import PropTypes from 'prop-types';

class Pokemons extends Component {

  componentDidMount() {

    // Initially display Pokemons with id's: 7, 4 and 1
    this.props.getPokemonInitial();

  };

  getRandomPokemon = () => {
    const { pokemons } = this.props.pokemon;
    const pokeSize = pokemons.length;

    // If already displaying a random pokemon, remove it
    if (pokeSize === 4) {
      this.props.deletePokemon(pokemons[pokeSize - 1].id);
    };

    // Find a new random pokemon between 1 and 802
    let newpokeId = Math.floor(Math.random() * 802) + 1;
    //console.log('Random Pokemon id:', newpokeId);

    // Now retireve new pokemon info and display it
    this.props.getPokemon(newpokeId);
  }

  render() {
    const { pokemons } = this.props.pokemon;
    return (
      <Container>
        <Row>
          <CardDeck>
            <TransitionGroup className="pokemon-list">
              {pokemons.map((poke, index) => (
                <CSSTransition key={poke.id} timeout={500} classNames="fade">
                  <Col md="4"> 
                  <Card>
                    {index === 3 ? <CardHeader>Random Pokemon</CardHeader> : ''}
                    <CardImg top width="100%" src={poke.default_image} alt={`pic of Pokemon#: ${poke.id}`} />
                    <CardBody>
                    <CardTitle>Name: {poke.name}</CardTitle>
                    <CardSubtitle>Weight: {poke.weight}</CardSubtitle>
                    <CardSubtitle>Height: {poke.height}</CardSubtitle>
                    <CardSubtitle>Base_Experience: {poke.base_experience}</CardSubtitle>
                    </CardBody>
                  </Card>
                  </Col>
                </CSSTransition>
              ))}
              <Col md="4">
                  <Card>
                  <CardBody>
                    <CardText>
                      Click the button below to display a random pokemon from among the over 800 available characters.
                    </CardText>
                    <Button
                      onClick={this.getRandomPokemon}
                    >
                      Display Pokemon
                    </Button>
                  </CardBody>
                  </Card>
              </Col>
            </TransitionGroup>
          </CardDeck>
        </Row>
      </Container>
    );
  }
}

Pokemons.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  getPokemonInitial: PropTypes.func.isRequired,
  deletePokemon: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps, { getPokemon, getPokemonInitial, deletePokemon })(Pokemons);