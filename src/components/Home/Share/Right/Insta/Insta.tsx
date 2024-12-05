import { useActiveStore } from 'store/Store';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

export const InstagramPost = () => {
    const { active, clickIdx, getCurrentData, getLeftTxt } = useActiveStore();

    return (
        <Card variant="outlined" sx={{ width: '25vw' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src={getCurrentData()[clickIdx]?.avatar}/>
                <Typography sx={{ fontWeight: 'lg' }}>
                    {getLeftTxt()[clickIdx]?.name}
                </Typography>
                <MoreHoriz />
            </CardContent>
            <Box>
                <img
                    src={getCurrentData()[clickIdx]?.url}
                    alt={active === "wod" ? "운동 인증 이미지" : "식단 공유 이미지"}
                    style={{
                        width: '100%',
                        height: '40vh',
                        objectFit: 'contain'
                     }}
                />
            </Box>
            <CardContent>
                <FavoriteBorderIcon style={{fill:'red'}} />
                <BookmarkBorderRoundedIcon />
                <Typography sx={{marginTop: 'var(--gap)'}}>
                    {getCurrentData()[clickIdx]?.title}
                </Typography>
            </CardContent>
        </Card>
    );
};
