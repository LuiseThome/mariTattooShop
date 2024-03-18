import * as React from 'react';
import { Box, Typography, Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SeparateAbout, TypeOrca, TypeTitle } from './Orçamento.style';

export const Orçamento = () => {
    const options = [
        {
            label: "Escolha uma opção",
            id: 0,
            value: ""
        },
        {
            label: "Fine Line",
            id: 1,
            value: "Tatuagem feita em linhas finas e delicadas"
        },
        {
            label: "Arte Exclusiva",
            id: 2,
            value: "Arte exclusiva, criada de forma única para você"
        },
        {
            label: "Cobertura",
            id: 3,
            value: "Cobertura de tatuagens antigas ou cicatrizes"
        }
    ];

    const [chose, setChose] = React.useState("");

    const handleChange = (event) => {
        setChose(event.target.value)
    }

    return (
        <div>
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

        </div>

    )
}