import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from "react-icons"

import { ListItem, Content } from './styles'

const ListCardItem = ({ icon, text }) => (
  <ListItem>
    <IconContext.Provider value={{
      verticalAlign: 'middle',
      className: 'react-icons'
    }}>
        {icon}
    </IconContext.Provider>

    <Content>{text}</Content>
  </ListItem>
)

ListCardItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

export default ListCardItem