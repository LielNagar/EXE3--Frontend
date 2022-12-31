import '../style/myCSS.css'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

export default function Recipe(props) {
    if (props.done)
        return (
            <Card sx={{ maxWidth: 345 }} className='float-child'>
                <CardMedia
                    component="img"
                    height="100"
                    image={props.ImgUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.CookingMethod}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button id='myButton' size="small" onClick={() => props.showIngredients(props.Id)}>Show ingredients!</Button>
                    <Button id='myButton' size="small" onClick={() => props.eatDish(props.Id, props.Name, props.CookingMethod, props.ImgUrl)}>Eat Dish!</Button>
                </CardActions>
            </Card>
        );
    return (
        <Card sx={{ maxWidth: 345 }} className='float-child'>
            <CardMedia
                component="img"
                height="100"
                image={props.ImgUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.CookingMethod}
                </Typography>
            </CardContent>
            <CardActions>
                <Button id='myButton' size="small" onClick={() => props.showIngredients(props.Id)}>Show ingredients!</Button>
                <Button id='myButton' size="small" onClick={() => props.prepareDish(props.Id, props.Name, props.CookingMethod, props.ImgUrl)}>Prepare Dish!</Button>
            </CardActions>
        </Card>
    );
}