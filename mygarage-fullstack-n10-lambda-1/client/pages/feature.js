import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Feature = () => {
    return (
        <>
            <Head>
                <title>My Garage| Workshop Management System</title>
            </Head>

            
            <div class=".fcontaner"> 
            <div className="">
              <Image src ="/featurepage.jpg" width = {1280} height ={400}  />            
          </div>
          <table className="center">
  <tr>
  <td>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
    </td>
    <td>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
    </td>
   </tr>
  <tr>
    <td>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
    </td>
    <td>
    <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
    </td>
  </tr>
  <tr>
    <td>
    <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
    </td>
    <td> 
    <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
     </td>
  </tr>
 

</table>
 </div> 


        </>
    )
}       

export default Feature
