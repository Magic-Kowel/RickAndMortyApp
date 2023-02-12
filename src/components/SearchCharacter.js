import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
function SearchCharacter({searchCharacter,setSearchCharacter}){
    return(
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <Paper
                component="form"
                sx={{ 
                p: '2px 4px',
                mb:'10px',
                display: 'flex',
                justifyContent:"flex-end",
                width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 ,input: {textAlign: "center"}}}
                    placeholder="Search Character"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={searchCharacter}
                    onChange={(event)=>setSearchCharacter(event.target.value)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Grid>
    )
}
export default SearchCharacter;