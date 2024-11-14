import { CardContainer } from './Card.styled';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';


export const CardWrapper = () => {
    const cards = Array(4).fill(null);

    return (
      <CardContainer>
        {cards.map((_, index) => (
            <Card sx={{ minWidth: 200 }} key={index}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                    Title
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        ))}
      </CardContainer>
    )
}