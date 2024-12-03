import { useActiveStore } from 'store/Store';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

export const InstagramPost = () => {
    const { active, clickIdx, getCurrentData } = useActiveStore();

    return (
        <Card variant="outlined">
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar/>
                <Typography sx={{ fontWeight: 'lg' }}>
                    {getCurrentData()[clickIdx]?.title}
                </Typography>
                <MoreHoriz />
            </CardContent>
            <Box>
                <img
                    src={getCurrentData()[clickIdx]?.url}
                    alt={active === "wod" ? "운동 인증 이미지" : "식단 공유 이미지"}
                    style={{width: '100%' }}
                />
            </Box>
            <CardContent>
                <BookmarkBorderRoundedIcon />
                <Typography>
                    {getCurrentData()[clickIdx]?.title}
                </Typography>
            </CardContent>
        </Card>
    );
};
