import { Grid, MenuItem, Select } from "@mui/material";
import { SeparateAbout, TypeOrca, TypeTitle, SelBox, Control, StyleLabel } from './Orçamento.style';
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
        }
    ];

    const data = [
        {
            label: "Tatuagem feita em linhas finas e delicadas",
            id: 1
        },
        {
            label: "Arte exclusiva, criada de forma única para você",
            id: 2
        },
        {
            label: "Cobertura de tatuagens antigas ou cicatrizes",
            id: 3
        }
    ]

    const [chose, setChose] = useState("Teste!");

   const handleChange = (event) => {
    const isSelected = Number(event.target.value);
    
    data.find((item) => {
        item.id === isSelected ? setChose(item.label) : undefined;
    })
}

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
            <SelBox>
                <Control>
                    <StyleLabel id="options-outlined-label"
                    >
                        Estilo de Tatuagem
                    </StyleLabel>
                    <Select
                    labelId="options-outlined-label"
                    id="options-outlined"
                    value={chose}
                    label="Estilo de Tatuagem"
                    onChange={handleChange}
                    >
                        {options.map((option, key) => {
                            <MenuItem
                            value={option.id}
                            key={key}>
                                {option.label}
                            </MenuItem>
                        })}
                    </Select>
                    
                </Control>
                <p>{chose}</p>
                </SelBox>
           
           
        </div>

    )
}