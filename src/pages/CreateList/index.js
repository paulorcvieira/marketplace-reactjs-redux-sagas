import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Form from '../../components/createList/Form'
import ListItem from '../../components/createList/ListItem'
import NewItem from '../../components/createList/NewItem'

import { Creators as ListActions } from '../../store/modules/list/actions'

import { Container, ListItemsContainer } from './styles'

class CreateList extends React.Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  }

  render() {
    return (
      <Container>
        <Form
          addProduct={this.addProduct}
          updateProduct={this.props.updateProduct}
          url={this.props.match.params.action}
        />
        <ListItemsContainer>
          {this.props.list.items.map((item) => <ListItem
            key={item.id}
            list={this.props.list.list}
            item={item}
            toggleProduct={this.props.toggleProduct}
            deleteProduct={this.props.deleteProduct}
          />)}

          { this.props.match.params.action === 'edit' &&
          <NewItem list={this.props.list.list} />
          }
        </ListItemsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)