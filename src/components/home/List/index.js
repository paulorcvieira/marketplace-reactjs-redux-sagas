import React from 'react'

import { FaShoppingBasket, FaCheck } from "react-icons/fa"

import { ListCardBody } from './styles'

import CustomCard from '../../default/CustomCard'
import ListCardItem from '../ListCardItem'
import ListFooter from '../ListFooter'

const List = ({ list, total, openedItems, closedItems, date }) => (
  <CustomCard
    containerClass="list-container"
    title={list}
    color="#000000"
    link="/list/edit"
    footer={<ListFooter date={date} total={total} />}
    cardClass={openedItems < 1 ? 'closed-list' : 'opened-list'}
  >
    <ListCardBody>
      <ListCardItem
        icon={<FaShoppingBasket size={21} color="#e84393" />}
        text={`${openedItems} Item(s) restante(s)`}
      />
      <ListCardItem
        icon={<FaCheck size={21} color="#e84393" />}
        text={`${closedItems} Item(s) comprado(s)`}
      />
    </ListCardBody>
  </CustomCard>
)

export default List
