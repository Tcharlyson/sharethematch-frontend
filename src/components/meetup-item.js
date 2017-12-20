import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class MeetupItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    placesAvailable: PropTypes.number.isRequired,
    apply: PropTypes.func.isRequired,
  }

  handleAddToCartClick = (e) => {
    const { id } = this.props;
    this.props.addToCart(id);
  }

  render() {

    const {
      name,
      host,
      placesAvailable,
    } = this.props;

    return (
      <div className="product">

        <div className="product-content">
          <div className="product-name">{name}</div>
          <div className="product-details">remaining seats : {placesAvailable}</div>
        </div>
        <div className="product-highlight">{host} €</div>

        <div className="product-actions">
          <Button
            onClick={this.apply}
            disabled={!placesAvailable}
            >
            Apply
          </Button>
        </div>
      </div>
    );
  }

}

export default MeetupItem;
