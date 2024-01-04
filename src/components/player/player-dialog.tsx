import { ReactPlayerProps } from 'react-player';

import Dialog from '@mui/material/Dialog';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from '../iconify';
import { StyledReactPlayer } from './styles';

// ----------------------------------------------------------------------

interface Props extends ReactPlayerProps {
  open: boolean;
  videoPath: string;
  onClose: VoidFunction;
}

export default function PlayerDialog({ videoPath, open, onClose, ...other }: Props) {
  const loading = useBoolean(true);

  return (
    <Dialog
      fullScreen
      open={open}
      PaperProps={{
        sx: { bgcolor: 'unset' },
      }}
    >
      <IconButton
        size="large"
        onClick={onClose}
        sx={{
          top: 24,
          right: 24,
          zIndex: 9,
          position: 'fixed',
          color: (theme) => alpha(theme.palette.common.white, 0.72),
          bgcolor: (theme) => alpha(theme.palette.common.white, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.common.white, 0.16),
          },
        }}
      >
        <Iconify icon="carbon:close" width={24} />
      </IconButton>

      {loading.value && (
        <CircularProgress
          sx={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            m: 'auto',
            position: 'absolute',
          }}
        />
      )}

      <StyledReactPlayer
        url={videoPath}
        playing={!loading.value}
        onReady={loading.onFalse}
        {...other}
      />
    </Dialog>
  );
}
