import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function OutlinedCard({ contacts, deleteCon, compOrder }) {
  // console.log(contacts)
  // console.log(contacts['taskItems'][0].text)
  return (
    <React.Fragment>
      {contacts['taskItems'].map((cont) => {
        return (
          <Box sx={{ minWidth: 275 }} key={cont.text.sln}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Email: {cont.text.email}
              </Typography>
              <Typography variant="h5" component="div">
                Name: {cont.text.name}
                {" "}{cont.activeStatus === true ? <CheckCircleIcon color="success" /> : ""}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Gender: {cont.text.gender + " "}
                Age: {cont.text.age}
              </Typography>
              <Typography variant="body2">
                CPU: {cont.text.favoriteNumber}<br />
                OS : {cont.text.os}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => deleteCon(cont.text.sln)}>Delete</Button>
              <Button size="small" onClick={() => compOrder(cont.text.sln)}>Complete</Button>
            </CardActions>
          </Box>
        )
      })}
    </React.Fragment>
  );
}
