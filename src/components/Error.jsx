import React from 'react'
import { Box, Grid } from "@mui/material";

export default function Error() {
    return (
        <Grid container item xs={4} justify="center">
            <Box component="span" sx={{ p: 5, border: "1px dashed grey", justify: "center" }}>
                404 Error :  Page not found.
            </Box>
        </Grid>
    )
}
