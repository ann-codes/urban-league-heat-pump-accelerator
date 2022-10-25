import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import HouseProfileDetail from "./HouseProfileDetail";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const HouseProfile = () => {
  const { firstName, lastName, email, address, phoneNumber } = useSelector(
    (state) => state.account
  );
    console.log(firstName)
  const { hid } = useParams();

  return (
    <Box>
      <Grid container direction="column" rowSpacing={1}>
        <Grid item xs={12}>
        <Typography variant='h2'>House Profile Page</Typography>
        <Typography variant='h3'>House ID: {hid}</Typography>

          <Box display="flex" px={2} pt={3}>


            <Typography variant="h2" component="h2">
              My Account
            </Typography>
          </Box>
        </Grid>
        <HouseProfileDetail label="First Name" value={firstName} />
        <HouseProfileDetail label="Last Name" value={lastName} />
        <HouseProfileDetail label="Email" value={email} />
        <HouseProfileDetail label="Address" value={address} />
        <HouseProfileDetail label="Phone Number" value={phoneNumber} />
      </Grid>
      <Grid container direction="column" rowSpacing={4}>
        <Grid item xs={12}>
          <Box display="flex" mt={3} mb={2} px={2}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" component={Link} to="edit">
              Edit
            </Button>
            <Button variant="contained">
              Delete
            </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HouseProfile;

// import { Box, Typography } from "@mui/material";
// import React from "react";
// import { useParams } from "react-router-dom";

// const HouseProfile = () => {
//   const { hid } = useParams();

//   return (
//     <Box m={3}>
//       <Typography variant='h2'>House Profile Page</Typography>
//       <Typography variant='h3'>House ID: {hid}</Typography>
//     </Box>
//   );
// };

// export default HouseProfile;
