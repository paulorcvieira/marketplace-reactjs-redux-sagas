import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as FormActions } from '../../../store/modules/form/actions'

import { FaPen, FaTrash } from "react-icons/fa"

import { ListCardFooter, ListCardFooterActions } from './styles';

const ListItemFooter = ({ list, item, deleteProduct, startUpdate }) => (
  <ListCardFooter>
    <ListCardFooterActions>
      <FaPen
        size={16}
        color="#00cec9"
        onClick={() => startUpdate(list, item)}
      />
      <FaTrash
        size={16}
        color="#e84393"
        onClick={() => deleteProduct(item.id)}
      />
    </ListCardFooterActions>
    <p>Total: <span className="currency">R$</span> <span className="price">{item.total.toFixed(2)}</span></p>
  </ListCardFooter>
)

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null, mapDispatchToProps)(ListItemFooter)