import React,{useEffect,useState } from "react";
import CardCharacter from "../components/CardCharacter";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import SearchCharacter from "../components/SearchCharacter";
import PaginationCharacter from "../components/PaginationCharacter";
import useCharacters from "../hooks/useCharacter";
function Home(){

    const [searchCharacter,setSearchCharacter] = useState([]);
    const [pageCharacter,setPageCharacter] = useState(1);
    const [loader,setLoader] = useState(false)

    const APIURL=`https://rickandmortyapi.com/api/character?page=${pageCharacter}`
    const characters = useCharacters(APIURL);

    const filterCharacter = characters.filter((character)=>{
        return character.name.includes(searchCharacter)
    })
    const handleChangePage = (page) =>{
        setLoader(true)
        setPageCharacter(page);
        setTimeout(()=>{
            setLoader(false)
        },500)
    } 

    return(
        <>
        <SearchCharacter
            searchCharacter={searchCharacter}
            setSearchCharacter={setSearchCharacter}
        />
        <Box  sx={{ flexGrow: 1 }}>
            <Grid 
            container
            spacing={2} 
            columns={{ xs: 2, sm: 8, md: 12 }}>
                {filterCharacter.map((character)=>(
                    <Grid item xs={2} sm={4} md={4} key={character.id}>
                        <CardCharacter
                            image={character.image}
                            name={character.name}
                            gender={character.gender}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
        <PaginationCharacter 
            pageCharacter={pageCharacter}
            setPageCharacter={handleChangePage}
        />
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        </>
    )
}
export default Home;