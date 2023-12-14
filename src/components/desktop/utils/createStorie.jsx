import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import colors from '../../colors';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: colors.middle_dark_purple,
    color: colors.white,
    fontSize: "large",
    height: "55%",
    minWidth: "50%",
    borderRadius: '50%'
  },
}));





export default function CreateStorie() {
  return (
    <Stack direction="column" backgroundColor='aqua' >
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent='+'
      >
        <Avatar  alt="pic" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      
    </Stack>
  );
}