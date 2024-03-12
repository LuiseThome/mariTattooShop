import { Card } from "@mui/material"
import { SeparateCover, TitleArtista, FotoArt, BioText } from "./Sobre.style"

export const Sobre = () => {
    return (
        <div id="sobre">
            <SeparateCover
            component="section" />
            
            <Card>
            <TitleArtista 
            variant="h3">
                Conheça a Artista
            </TitleArtista>

           
                <FotoArt
                component="img"
                image="Public/add-image.png"
                alt="Foto Mari"
                />
            
                 <BioText
                    variant="body1">
                    Insira uma bio muito massa aqui!
                </BioText>
            </Card>
        </div>
    );
}