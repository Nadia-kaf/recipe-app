import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography} from "@mui/material";


export default function Recipes(){
    return(
       <Container sx={{my: "2rem"}}   maxWidth= "sm">
        <TextField fullWidth 
        id="outlined-basic"
         label="Enter a keyword to search recipe and hit enter" 
         variant="outlined" />

         <Grid sx={{mt: "1rem"}}   container spacing= {4}>
            <Grid item xs={4}>
                <Card>
                    <CardMedia  
                    sx={{ height:140}}
                    image="https://images.unsplash.com/photo-1698309377471-54a87740d979?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </Card>
                <CardContent>
                    <Typography variant="h6">Recipe Name</Typography>
                </CardContent>
            </Grid>
         </Grid>
       </Container>
    )
}