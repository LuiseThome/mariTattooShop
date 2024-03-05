import { ListItem } from "@mui/material"
import {Paper, CustomLink, GridContainer} from "/src/Menu/NavBar.style.js"

export const NavBar = () => {

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
        <Paper>
        <GridContainer
        container
        wrap="nowrap"
        direction="row"

        >
                {itemsMenu.map(item => (
                <ListItem
                key={item}
                >
                    <CustomLink
                    underline="none"
                    href={item.to}
                    >
                    {item.name}
                    </CustomLink>
                   
                </ListItem>
                    
            ))}  
        </GridContainer>
        </Paper>
    );

}

