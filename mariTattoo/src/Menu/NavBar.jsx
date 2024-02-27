import { Grid, Link, ListItem } from "@mui/material"



export const NavBar = () => {

    //const itemsMenu = ["SOBRE", "ORÇAMENTO", "AGENDA"];

    const itemsMenu = [
        {
            to: "#sobre",
            name: "SOBRE"
        },
        {
            to: "#orçamento",
            name: "ORÇAMENTO"
        },
        {
            to: "#agenda",
            name: "AGENDA"
        }
    ]

    return (
        <Grid
        className="MenuGrid"
        container
        wrap="reverse-wrap"
        direction="row"
        alignItems="center"
        justify="center"
        sx={{
            mx: "auto",
            width: 325
        }}
        >
                {itemsMenu.map(item => (
                <ListItem
                key={item}
                >
                    <Link
                    className="MenuLink" 
                    underline="none"
                    sx={{
                    //color: 'white',
                    }}
                    href={item.to}
                    >
                    {item.name}
                    </Link>
                   
                </ListItem>
                    
            ))}  
            
        </Grid>
    )

}

