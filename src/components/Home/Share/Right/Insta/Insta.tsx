import WodImg1 from '../../../../../assets/img/community/community_1.png';
import WodImg2 from '../../../../../assets/img/community/community_2.png';
import WodImg3 from '../../../../../assets/img/community/community_3.png';
import dietImg1 from '../../../../../assets/img/community/diet_1.png';


import { useActiveStore } from 'store/Store';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

export const InstagramPost = () => {
    interface ImgType {
        url: string
        title: string
    }
    
    const { active, clickIdx } = useActiveStore();

    const wodData: Array<ImgType> = [
        {'url': WodImg1, 'title': '오운완 1'},
        {'url': WodImg2, 'title': '오운완 2'},
        {'url': WodImg3, 'title': '오운완 3'},
    ];
    
    const dietData = [
        {'url': WodImg3, 'title': '식단인증 1'},
        {'url': WodImg1, 'title': '식단인증 2'},
        {'url': WodImg2, 'title': '식단인증 3'},
    ];
    
    const imgData: Array<ImgType> = active === "wod" ? wodData : dietData;

    return (
        <Card variant="outlined">
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar/>
                <Typography sx={{ fontWeight: 'lg' }}>
                    {imgData[clickIdx]?.title}
                </Typography>
                <MoreHoriz />
            </CardContent>
            <Box sx={{ }}>
                <img 
                    src={imgData[clickIdx]?.url}
                    alt={active === "wod" ? "운동 인증 이미지" : "식단 공유 이미지"}
                    style={{width: '100%' }}
                />
            </Box>
            <CardContent>

                <BookmarkBorderRoundedIcon />
                <Typography>
                    #오운완 #웨이트 트레이닝
                </Typography>
            </CardContent>
        </Card>
    );
};
