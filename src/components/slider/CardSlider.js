import React, { useState } from 'react';
import { Card, CardImg, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardSlider = ({translate, project, index}) => {
    const [overCard, setOverCard] = useState(false)
    return (
        <Card className={overCard ? 'card-container overcard' : 'card-container'} onMouseLeave={() => setOverCard(false)} onMouseOver={() => setOverCard(true)}>
              <div className={`card-item card-${index+1}`} >
            <CardImg
            className='card-img'
              top
              width='100%'
              src={project.img}
              alt={project.nombre}
            />
              <CardTitle className='card-title'>{project.nombre}</CardTitle>
              <CardSubtitle className='card-subtitle'>
              {project.web}
              </CardSubtitle>
              <CardText  className='card-description' >
              {project.description}
              </CardText>
              <Button className='card-button' ><label>{translate('slider.card.seeproject')}</label></Button> 
            </div>
          </Card>
    )
}

export default CardSlider
