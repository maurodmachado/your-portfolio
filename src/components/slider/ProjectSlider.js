import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imagenProject1 from '../../media/projects/project1.png';
import imagenProject2 from '../../media/projects/project2.png';
import imagenProject3 from '../../media/projects/project3.png';
import imagenProject4 from '../../media/projects/project4.png';
import './Slider.css'
import { Card, CardImg, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1340 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 960, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label='Go to next slide'
      className='react-multiple-carousel__arrow react-multiple-carousel__arrow--right'
    />
  );
}

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label='Go to previous slide'
      className='react-multiple-carousel__arrow react-multiple-carousel__arrow--left'
    />
  );
}

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className='carousel-button-group'>
      <CustomLeftArrow
        onClick={() => previous()}
      />
      <CustomRightArrow onClick={() => next()} />
    </div>
  );
};

const ProjectSlider = ({translate}, props) => {

    const projects = [
                {
          nombre: translate('slider.barberapp.nombre'),
          web: translate('slider.barberapp.web'),
          description: translate('slider.barberapp.description'),
          img: imagenProject1
        },
        {
          nombre: translate('slider.mernsat.nombre'),
          web: translate('slider.mernsat.web'),
          description: translate('slider.mernsat.description'),
          img: imagenProject2
        },
        {
          nombre: translate('slider.tiendaonline.nombre'),
          web: translate('slider.tiendaonline.web'),
          description: translate('slider.tiendaonline.description'),
          img: imagenProject3
        },
        {
          nombre: translate('slider.appunca.nombre'),
          web: translate('slider.appunca.web'),
          description: translate('slider.appunca.description'),
          img: imagenProject4
        },
      ];

    return (
        <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      arrows={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={7000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType={props.deviceType}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
    >
      {projects.length !== 0 ? (
        projects.map((project,index) => 
          <Card className='card-container'>
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
      ) : (
        <></>
      )}
    </Carousel>
    )
}

export default ProjectSlider
