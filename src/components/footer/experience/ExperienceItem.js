import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const ExperienceItem = ({year, target, tooglea, popHeader, popBody, popOver, index}) => {
    return (
        <li
                data-year={year}
                href='#'
                id={target}
                data-text={popHeader}
                className={popOver ? "opacity" : ""}
              >
                <Popover
                  placement={index % 2 !== 0 ? (window.innerWidth >= 1423 ? 'Bottom' : 'left') : (window.innerHeight >= 960 ? 'top' : 'right')}
                  className='popover'
                  isOpen={popOver}
                  target={target}
                  toggle={tooglea}
                >
                  <PopoverHeader>{popHeader}</PopoverHeader>
                  <PopoverBody>
                  {popBody}
                  </PopoverBody>
                </Popover>
        </li>
    )
}

export default ExperienceItem
