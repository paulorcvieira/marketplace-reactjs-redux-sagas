import React from 'react'

import CustomCard from '../../default/CustomCard'

const NewList = ({ newList }) => {
  return (
      <CustomCard
        containerClass="new-list-container"
        link="/list/new"
        title="Adicionar Nova Lista"
        color="#e84393"
        action={newList}
      />
  )
}

export default NewList
