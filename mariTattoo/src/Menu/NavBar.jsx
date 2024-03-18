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
            to: "#contato",
            name: "CONTATO"
        },
        {
            to: "#cartao",
            name: "CARTÃO PRESENTE"
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

