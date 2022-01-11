import React, { useState } from 'react';
import * as S from './Faq_Style';
import { useTheme } from 'styled-components';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Faq = () => {
  const theme = useTheme();
  const [Expanded, setExpanded] = useState(false);

  //-->  Accordion controller
  function handleAccordion(panel) {
    return (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  }

  //-->  FAQ data
  const FAQDATA = [
    {
      question: `Who can signup for Transol ?`,
      answer: `Mechanics, Vehicle owners, Companies in search of vehicle and fleet management services and every other person. Transol is open to every user of the transol eco-system.`,
      panel: `panel_1`,
    },
    {
      question: `Is Transol a free system? `,
      answer: `Sign up and Registration is free, but services rendered by Transol are paid for. Transol also offers 
      subscription plans for premium services and elevated assurance. `,
      panel: `panel_2`,
    },
    {
      question: `Can I be a mechanic and a user? `,
      answer: `Yes! You can be a certified mechanic and sign up as a user, but that does not imply free services as you 
      would be required to fulfil all requirements as a regular user.`,
      panel: `panel_3`,
    },
    {
      question: `What happens if a mechanic damages my vehicle?`,
      answer: `After complete validation of PROOF that the cause of 
     damage to the vehicle is from a CERTIFIED Transol Ranger and   not  a 3rd party mechanic, Transol would 
     take full responsibility of restoring damages.`,
      panel: `panel_4`,
    },
    {
      question: `Would Transol be offline? `,
      answer: `No! All of Transol's operations and transactions would be carried out solely online (including mechanics diagnosis and field work). You would need an active internet connection to 
    access the platform for proper data representation `,
      panel: `panel_5`,
    },
    {
      question: `How do i get Updates and News about Transol?`,
      answer: `Subscribe to our Newsletter/ Blog post for updates and more information for free with your preferred 
      active email address`,
      panel: `panel_6`,
    },
  ];

  return (
    <S.Container theme={theme}>
      {/* ----- title ----- */}
      <h1>Frequently asked questions</h1>

      {/* ----- title grid ----- */}
      <S.FaqDiv>
        {FAQDATA.map((data, index) => {
          return (
            <S.AccordionDiv
              key={index}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05',
              }}
              expanded={Expanded === data.panel}
              onChange={handleAccordion(data.panel)}
            >
              <AccordionSummary
                style={{ color: theme.colors.lt }}
                expandIcon={
                  Expanded === data.panel ? (
                    <RemoveOutlinedIcon style={{ color: theme.colors.lt_2 }} />
                  ) : (
                    <AddOutlinedIcon style={{ color: theme.colors.main }} />
                  )
                }
              >
                {data.question}
              </AccordionSummary>
              <AccordionDetails style={{ color: theme.colors.lt_2 }}>
                {data.answer}
              </AccordionDetails>
            </S.AccordionDiv>
          );
        })}
      </S.FaqDiv>
    </S.Container>
  );
};

export default Faq;
