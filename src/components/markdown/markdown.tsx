import { Theme, SxProps } from '@mui/material/styles';

import StyledMarkdown from './styles';

// ----------------------------------------------------------------------

type Props = {
  firstLetter?: boolean;
  content: string;
  sx?: SxProps<Theme>;
};

export default function Markdown({ content, firstLetter = false, sx }: Props) {
  return (
    <StyledMarkdown
      firstLetter={firstLetter}
      dangerouslySetInnerHTML={{ __html: content }}
      sx={sx}
    />
  );
}
