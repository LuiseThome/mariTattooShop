//import { ListItem } from "@mui/material"
import {CustomLink, GridContainer, CustomList} from "/src/Menu/NavBar.style.js"

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
        <GridContainer
        container
        wrap="nowrap"
        direction="row"

        >
                {itemsMenu.map(item => (
                <CustomList
                key={item.name}
                >
                    <CustomLink
                    underline="none"
                    href={item.to}
                    >
                    {item.name}
                    </CustomLink>
                   
                </CustomList>
                    
            ))}  
        </GridContainer>
    );

}

