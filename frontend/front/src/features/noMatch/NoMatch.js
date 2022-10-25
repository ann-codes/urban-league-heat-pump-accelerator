import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Box>
      <Typography>Page not found</Typography>
      <Button variant="contained" component={Link} to="/">
        <Typography>back to menu</Typography>
      </Button>
    </Box>
  );
};

export default NoMatch;
