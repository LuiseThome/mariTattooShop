import { TopGrid, SeparateCover, TypeSection, TitleArtista, FotoArt, BioText } from "./Sobre.style"

export const Sobre = () => {
    return (
        <div id="sobre">
            
            <SeparateCover
            component="section">
                <TypeSection>
                    SOBRE
                </TypeSection>
            </SeparateCover>
            
            <TopGrid container>

                 <TitleArtista 
                variant="h3">
                Conheça a Artista
                </TitleArtista>

           
                <FotoArt
                component="img"
                src="Public/add-image.png"
                alt="Foto Mari"
                />
            
                 <BioText
                    variant="body1">
                    Insira uma bio muito massa aqui!
                </BioText>   
            
            </TopGrid>
        </div>
    );
}