import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Divider,
  CardMedia,
} from '@material-ui/core'

import { ListContainer, Content, Title } from './styles'

const CustomCard = ({
  containerClass,
  link,
  title,
  color,
  children,
  footer,
  image,
  action,
  cardClass = '',
}) => (
  <ListContainer>
    <div className={containerClass}>
      <Link to={link}>
        <Card className={`card ${cardClass}`}>
          <CardActionArea className="card-action-area" onClick={action}>
            {image && (
              <CardMedia
                component="img"
                className="card-img"
                height="100"
                image={image}
                title="imagem"
              />
            )}
            <CardContent className="card-content">
              <Content>
                {title && (
                  <Title color={color}>{title}</Title>
                )}
                {children}
              </Content>
            </CardContent>
          </CardActionArea>

          {footer && (
            <>
              <Divider />
              <CardActions className="card-actions-footer">
                {footer}
              </CardActions>
            </>
          )}

        </Card>
      </Link>
    </div>
  </ListContainer>
)

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
  footer: PropTypes.element,
  image: PropTypes.string,
  newList: PropTypes.func,
}

export default CustomCard