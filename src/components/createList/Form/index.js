import React from 'react'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  TextField,
  MenuItem,
  InputAdornment,
  Button,
} from '@material-ui/core';

import { Creators as FormActions } from '../../../store/modules/form/actions'

import { FaAngleRight } from 'react-icons/fa'

import { Container, FormRow } from './styles'

const units = ['Quilo(s)', 'Litro(s)', 'Unidade(s)']

class Form extends React.Component {
  state = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: '',
    showErrors: false,
  }

  componentDidUpdate(prevProps) {
    if (this.props.form.action === 'update' &&
      prevProps.form.productToUpdate !== this.props.form.productToUpdate) {
        const { product, quantity, unit, price } = this.props.form.productToUpdate
        this.setState({
          list: this.props.form.listToUpdate,
          product,
          quantity,
          unit,
          price,
          showErrors: false,
        })
    }

    if (this.props.form.action === 'new' &&
      prevProps.form.action !== this.props.form.action) {
        this.setState({ list: this.props.form.listToUpdate })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const { list, product, quantity, unit, price } = this.state

    if (!list || !product || !quantity || !unit) {
      this.setState({ showErrors: true })
      toast.error('Verifique os campos preenchidos.');
    } else {
      this.props.form.action === 'update'
        ? this.updateItem(list, product, quantity, unit, price)
        : this.addItem(list, product, quantity, unit, price)
    }
  }

  addItem = (list, product, quantity, unit, price) => {
    this.props.addProduct({ product, quantity, unit, price }, list)
    toast.success('Produto adicionado com sucesso.');
    this.props.finishAdd()
    this.clearState()
  }

  updateItem = (list, product, quantity, unit, price) => {
    const { id, checked, img } = this.props.form.productToUpdate
    this.props.updateProduct({ product, quantity, unit, price, id, checked, img }, list)
    toast.success('Produto atualizado com sucesso.');
    this.props.finishUpdate()
    this.clearState()
  }

  clearState = () => {
    this.setState({
      product: '',
      quantity: '',
      unit: '',
      price: '',
      showErrors: false,
    })
  }

  render() {
    if (!this.props.showForm) {
      return <div></div>
    } else {
      return (
        <Container>
          <form noValidate autoComplete="off">
              <FormRow>
                  <TextField
                    required
                    label="Lista"
                    name="list"
                    value={this.state.list}
                    onChange={this.handleChange}
                    variant="outlined"
                    error={!this.state.list && this.state.showErrors}
                  />
                  <Button
                      variant="outlined"
                      color="secondary"
                      endIcon={<FaAngleRight />}
                      onClick={this.handleSubmit}
                  >
                    {this.props.form.action === 'update' ? (
                      'Atualizar'
                    ) : (
                      'Adicionar'
                    )}
                  </Button>
              </FormRow>

              <FormRow>
                <TextField
                    required
                    label="Produto"
                    name="product"
                    value={this.state.product}
                    onChange={this.handleChange}
                    variant="outlined"
                    error={!this.state.product && this.state.showErrors}
                  />
                  <TextField
                    required
                    label="Quantidade"
                    name="quantity"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    helperText="Digite a Quantidade"
                    variant="outlined"
                    error={!this.state.quantity && this.state.showErrors}
                  />
                  <TextField
                    select
                    required
                    label="Unidade"
                    name="unit"
                    value={this.state.unit}
                    onChange={this.handleChange}
                    helperText="Selecione a Unidade"
                    variant="outlined"
                    error={!this.state.unit && this.state.showErrors}
                  >
                    {units.map((option, index) => (
                      <MenuItem key={index} value={option}>{option}</MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label="Preço"
                    name="price"
                    type="number"
                    value={this.state.price}
                    onChange={this.handleChange}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">R$</InputAdornment>
                    }}
                    variant="outlined"
                    onKeyDown={(e) => e.keyCode === 13 && this.handleSubmit()}
                  />
              </FormRow>
          </form>
        </Container>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  form: state.form,
  showForm: state.form.action || ownProps.url === 'new'
})

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)