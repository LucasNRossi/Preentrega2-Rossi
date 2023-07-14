import React from "react";
import { Box, Typography } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box sx={{ padding: "16px", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" component="h2" align="center">
        {greeting}
      </Typography>
    </Box>
  );
};

export default ItemListContainer;
