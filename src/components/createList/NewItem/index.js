import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FaPlus } from 'react-icons/fa'

import { Creators as FormActions } from '../../../store/modules/form/actions'

import CustomCard from '../../default/CustomCard'

class NewItem extends React.Component {
  render() {
    return (
      <CustomCard
        link="#"
        containerClass="list-item"
        title="Novo Produto"
        color="#e84393"
        action={() => this.props.startAdd(this.props.list)}>
        <div className="new-item">
          <FaPlus size={93} color="#fff" />
        </div>
      </CustomCard>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null, mapDispatchToProps)(NewItem)