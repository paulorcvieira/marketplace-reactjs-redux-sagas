import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Container } from './styles'

import NewList from '../../components/home/NewList'
import List from '../../components/home/List'

import {
  getListTotal,
  getOpenedItems,
  getClosedItems,
} from '../../store/modules/list/reducers'
import { Creators as ListActions } from '../../store/modules/list/actions'

const Home = ({ list, total, openedItems, closedItems, newList, date }) => (
  <Container>
    <NewList newList={newList} />
    {!!list.items.length && (
      <List
        list={list.list}
        total={total}
        openedItems={openedItems}
        closedItems={closedItems}
        date={date}
      />
    )}
  </Container>
)

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state),
  date: state.list.date,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
