import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  contents: {
    id: string;
    question: string;
    answer: string;
  }[];
};

export default function SupportContent({ contents }: Props) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Box sx={{ pl: { md: 10 } }}>
      {contents.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.question}
          onChange={handleChangeExpanded(faq.question)}
        >
          <AccordionSummary
            sx={{
              py: 2,
              minHeight: 64,
              [`& .${accordionSummaryClasses.content}`]: {
                p: 0,
                m: 0,
              },
              [`&.${accordionSummaryClasses.expanded}`]: {
                bgcolor: 'action.selected',
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              {faq.question}
            </Typography>

            <Iconify
              icon={expanded === faq.question ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            />
          </AccordionSummary>

          <AccordionDetails sx={{ color: 'text.secondary' }}>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
