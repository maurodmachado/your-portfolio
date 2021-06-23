import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';

const FooterExperience = ({ translate }) => {
  const [popoverOpenBanco, setPopoverOpenBanco] = useState(false);
  const [popoverOpenPoderJudicial, setPopoverOpenPoderJudicial] = useState(false);
  const [popoverOpenPackGo, setPopoverOpenPackGo] = useState(false);
  const [popoverOpenNaranja, setPopoverOpenNaranja] = useState(false);

  const toggleBanco = () => setPopoverOpenBanco(!popoverOpenBanco);
  const togglePoderJudicial = () => setPopoverOpenPoderJudicial(!popoverOpenPoderJudicial);
  const togglePackGo = () => setPopoverOpenPackGo(!popoverOpenPackGo);
  const toggleNaranja = () => setPopoverOpenNaranja(!popoverOpenNaranja);

  const experienceItems = [
    {
      id: 1,
      year: '2020',
      target: 'Banco',
      toggle: toggleBanco,
      popHeader: translate('footer.work1.title'),
      popBody: translate('footer.work1.description'),
      popOver: popoverOpenBanco,
    },
    {
      id: 2,
      year: '2020',
      target: 'PoderJudicial',
      toggle: togglePoderJudicial,
      popHeader: translate('footer.work2.title'),
      popBody: translate('footer.work2.description'),
      popOver: popoverOpenPoderJudicial,
    },
    {
      id: 3,
      year: '2021',
      target: 'PackGo',
      toggle: togglePackGo,
      popHeader: translate('footer.work3.title'),
      popBody: translate('footer.work3.description'),
      popOver: popoverOpenPackGo,
    },
    {
      id: 4,
      year: '2021',
      target: 'Naranja',
      toggle: toggleNaranja,
      popHeader: translate('footer.work4.title'),
      popBody: translate('footer.work4.description'),
      popOver: popoverOpenNaranja,
    },
  ];

  return (
    <div className='footer-row'>
      <div className='footer-info'>
        <h3>{translate('footer.workexperience')}</h3>
      </div>
      <div className='footer-experience'>
        <ul className={(popoverOpenBanco || popoverOpenNaranja || popoverOpenPoderJudicial || popoverOpenPackGo) ? 'timeline opacity' : 'timeline'}>
          {experienceItems.lenght !== 0 ? (
            experienceItems.map((experienceItem) => (
              <ExperienceItem
                year={experienceItem.year}
                target={experienceItem.target}
                tooglea={experienceItem.toggle}
                popHeader={experienceItem.popHeader}
                popBody={experienceItem.popBody}
                popOver={experienceItem.popOver}
                index={experienceItem.id}
              />
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FooterExperience;
