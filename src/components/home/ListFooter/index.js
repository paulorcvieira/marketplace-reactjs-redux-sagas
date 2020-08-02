import React from 'react';
import PropTypes from 'prop-types'

import { Container } from './styles'

const ListFooter = ({ date, total }) => (
  <Container>
    <span>{date}</span>
    <p>Total: <span className="currency">R$</span> <span className="price">{total.toFixed(2)}</span></p>
  </Container>
)

ListFooter.propTypes = {
  date: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}

export default ListFooter;