import React from 'react'
import { Checkbox, Typography } from '@material-ui/core'

import CustomCard from '../../default/CustomCard'
import ListItemFooter from '../ListItemFooter'

import { ListItemHeader } from './styles'

const ListItem = ({ item, toggleProduct, deleteProduct, list }) => (
  <CustomCard
    link="#"
    containerClass="list-item"
    footer={<ListItemFooter
      list={list}
      item={item}
      deleteProduct={deleteProduct}
    />}
    image={item.img}
    action={() => toggleProduct(item.id)}
  >
    <>
      <ListItemHeader>
      <Typography variant="subtitle1" component="h2">{item.product}</Typography>
        <Checkbox checked={item.checked} />
      </ListItemHeader>
      <Typography component="p">{item.quantity} {item.unit}</Typography>
      <Typography component="p">R$ {item.price}</Typography>
    </>
  </CustomCard>
)

export default ListItem