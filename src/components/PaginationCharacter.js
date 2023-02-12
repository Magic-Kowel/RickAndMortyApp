import React from "react";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
function PaginationCharacter({
    pageCharacter,
    setPageCharacter
}){
    return(
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Pagination
                sx={{
                    mt:'40px',
                    mb:'30px'
                }}
                page={pageCharacter}
                onChange={(e, value) => setPageCharacter(value)} 
                count={10} 
                showFirstButton 
                showLastButton
            />
        </Grid>
    )
}
export default PaginationCharacter;