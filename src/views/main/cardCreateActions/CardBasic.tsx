import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cardBasic } from './types';

export const CardBasic = ({ text1, title, description, buttonName}:cardBasic) => {

      const card = (
        <>
          <CardContent>
            <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
              { text1 }
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 500}} component="div">
            { title }
            </Typography>
            <Typography variant="body2" sx={{ padding: 2}}>
              { description }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{ buttonName }</Button>
          </CardActions>
        </>
      );

    return (
        <div>
            <Box sx={{ minWidth: 200 }}>
            <Card variant="outlined" style={{ maxWidth: 400 , maxHeight: 600, textAlign:'center', minWidth: 300}}>{card}</Card>
            </Box>
        </div>
    )
}
