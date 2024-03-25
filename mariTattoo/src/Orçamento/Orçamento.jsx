import { Grid, MenuItem, Select, Card, CardHeader, CardMedia, Typography } from "@mui/material";
import { SeparateAbout, TypeOrca, TypeTitle, SelBox, Control, StyleLabel, TypeNotice, StyleType, StyleCard } from './Orçamento.style';
import { useState } from "react"

export const Orçamento = () => {
    const options = [
        {
            label: "Fine Line",
            id: 1,
        },
        {
            label: "Arte Exclusiva",
            id: 2,
        },
        {
            label: "Cobertura",
            id: 3,
        },
    ];

    const data = [
        {
            label: "Tatuagem feita em linhas finas e delicadas - a partir de R$500,00",
            id: 1
        },
        {
            label: "Arte única criada especialmente para você - a partir de R$350,00",
            id: 2
        },
        {
            label: "Cobertura de tatuagens antigas ou cicatrizes - a partir de R$450,00",
            id: 3
        },
    ];

    const title = [
        {
            label: "Fine Line",
            id: 1
        },
        {
            label: "Arte Exclusiva",
            id: 2
        },
        {
            label: "Cobertura",
            id: 3
        },
    ]

    const picture = [
        {
            imgFile: "Public/fine line copy.png",
            id: 1
        },
        {
            imgFile: "Public/exclusive copy.jpeg",
            id: 2
        },
        {
            imgFile: "Public/cover copy.png",
            id: 3
        }
    ];

    const [chose, setChose] = useState("");

    const [showTitle, setShowTitle] = useState("")

    const [showPic, setShowPic] = useState()

    return (
        <div id="orçamento">
            <SeparateAbout component="section">
                <TypeOrca>
                    ORÇAMENTO
                </TypeOrca>
            </SeparateAbout>

            <Grid container>
                <TypeTitle variant="h3">
                    Transforme a sua história em Arte!
                </TypeTitle>
                </Grid>
                <Grid container>
                <TypeNotice>
                    *Para um orçamento assertivo, favor especificar a arte em detalhes através da página de contato
                </TypeNotice>
          
            </Grid>

            <SelBox>
                <Control>
                    <StyleLabel id="demo-simple-select-label">
                        Estilo de Tatuagem
                    </StyleLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={options.label}
                    label="Estilo de Tatuagem"
                    onChange={handleChange}
                    >
                        {options.map((option, key) => {
                            return (
                                <MenuItem
                            key={key}
                            value={option.id}
                            >
                                {option.label}
                            </MenuItem>
                            );
                        })}
                    </Select>
                </Control>

                <StyleCard>
                    <CardHeader
                   title={showTitle}
                   subheader={chose}></CardHeader>
                   <CardMedia
                   component="img"
                   image={showPic}
                   ></CardMedia>
                </StyleCard>
                
                </SelBox>
           
           
        </div>

    );

    function handleChange (event) {
        const selectedItem = Number(event.target.value);

        data.find((item) => {
            item.id === selectedItem ? setChose(item.label) : undefined;
        });

        title.find((name) => {
            name.id === selectedItem ? setShowTitle(name.label) : undefined;
        })

        picture.find((pic) => {
            pic.id === selectedItem ? setShowPic(pic.imgFile) : undefined;
        })
    }
}