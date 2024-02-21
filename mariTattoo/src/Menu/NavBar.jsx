import { Grid, Link, ListItem } from "@mui/material"


export const NavBar = () => {

    const itemsMenu = ["SOBRE", "ORÇAMENTO", "AGENDA"];

    return (
        <Grid 
        container 
        wrap="nowrap"
        direction="row"
        alignItems="center"
        justifyContent="center"
        >    
            {itemsMenu.map(item => (
                <ListItem
                key={item}>
                    <Link 
                    sx={{
                    textDecoration: 'none',
                    }}>
                    {item}
                    </Link>
                   
                </ListItem>
                    
            ))}
        </Grid>
    )
   

}