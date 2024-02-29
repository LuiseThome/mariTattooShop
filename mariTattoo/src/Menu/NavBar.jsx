import { Grid, Link, ListItem } from "@mui/material"
import "/src/Menu/NavBar.css"



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
        id="gr1"
         >
        <Grid
        className="MenuGrid"
        container
        wrap="nowrap"
        direction="row"
        sx={{
            mx: "auto",
            width: 325,
            minHeight: "40px",
            position: "sticky"
            }}
        >
                {itemsMenu.map(item => (
                <ListItem
                key={item}
                >
                    <Link
                    className="MenuLink" 
                    underline="none"
                    /*sx={{
                    color: 'white',
                    fontFamily:  'Gill Sans'
                    }}*/
                    href={item.to}
                    >
                    {item.name}
                    </Link>
                   
                </ListItem>
                    
            ))}  
        </Grid>
        </Grid>
    );

}

