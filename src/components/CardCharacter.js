import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
function CardCharacter(props){
    return(
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        sx={{ width: 345 }}
                        image={props.image}
                        alt="Character imagen"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {props.name}
                    </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="gender">
                            {props.gender==="Male"?<MaleIcon /> : <FemaleIcon />}
                        </IconButton> */}
                    </CardActions>
                </CardActionArea>
            </Card>
    )
}
export default CardCharacter;