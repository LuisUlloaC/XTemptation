import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import colors from '../../colors';


const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        backgroundColor: colors.middle_dark_purple,
        color: colors.white,
        fontSize: "large",
        height: "20%",
        minWidth: "50%",
        borderRadius: '50%'
    },
}));





export default function Storie({ user }) {
    return (
        <>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant=''
                sx={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', maxWidth: 70,
                    paddingTop: '1%', maxHeight: 70
                }}
            >
                <Avatar alt="pic" style={{ display: 'flex',height: '100%', width: '100%'}} src={user?.profile_picture} />
                <span style={{ display: 'flex', maxWidth: '80%', flexWrap: 'wrap', textAlign: 'center'}}>{user?.name_user}</span>
            </StyledBadge>

        </>
    );
}