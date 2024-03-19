import * as React from 'react';
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { SeparateAbout, TypeOrca, TypeTitle, SelBox, Control } from './Orçamento.style';

export const Orçamento = () => {
    const options = [
        {
            label: "Escolha uma opção",
            id: 0,
        },
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
            label: "",
            id: 0
        },
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

    const [chose, setChose] = React.useState("");

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

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
                    <InputLabel id="options-outlined-label"
                    ref={inputLabel}
                    >
                        Estilo de Tatuagem
                    </InputLabel>
                    <Select
                    value={chose}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    >
                        {options.map((option, key) => {
                            <MenuItem
                            value={option.id}
                            key={key}>
                                {option.label}
                            </MenuItem>
                        })}
                    </Select>
                    <p>{chose}</p>
                </Control>
                
                </SelBox>
           
           
        </div>

    )
}