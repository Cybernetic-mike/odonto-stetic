import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import AboutImage from "../images/about.jpg";
import Grid from "@mui/material/Grid2";
import Whatsapp from "../images/whatsapp.svg";
import Endodoncia from "../images/endodoncia.jpg";
import Ortodoncia from "../images/ortodoncia.jpg";
import Protesis from "../images/protesis.jpg";
import Blanqueamiento from "../images/blanqueamiento.jpg";
import Implantes from "../images/implantes.jpg";
import Cirugia from "../images/cirugia.jpg";

function Services() {
  const styles = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  };
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true); // Cambia el estado cuando el cursor entra
    console.log("Display: " + visible);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setHovered(false); // Cambia el estado cuando el cursor sale
    console.log("Display: " + visible);
    setVisible(false);
  };
  return (
    <Box id="services" sx={{ flexGrow: 1, paddingTop: "65px" }}>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #00d8e7, #0072ff);",
          display: "flex",
          justifyContent: "center",
          padding: "25px 25px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "98vw",
              sm: "95w",
              md: "85vw",
              lg: "75vw",
            },
          }}
        >
          <Typography color="white" variant="h4">
            Nuestros Servicios
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          //height: "100vh",
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "98vw",
              sm: "95w",
              md: "85vw",
              lg: "75vw",
            },
            display: "block",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: "15px",
            }}
            container
            spacing={3}
          >
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img
                    className="dim-images"
                    src={Endodoncia}
                    alt="Boys Smile"
                  />
                  <Typography className="efect-text">
                    Tratamiento para salvar dientes dañados o infectados,
                    eliminando el dolor y evitando la extracción. Recupera tu
                    salud dental de manera rápida y segura.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  Endodoncia
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Ortodoncia} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Corrige la alineación de los dientes para mejorar la sonrisa
                    y la mordida, usando brackets o alineadores invisibles. ¡Una
                    sonrisa alineada es una sonrisa saludable!
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  Ortodoncia
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Protesis} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Soluciones personalizadas para reemplazar dientes perdidos,
                    devolviendo la funcionalidad y estética a tu boca. ¡Sonríe
                    con confianza nuevamente!
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  Prótesis dentales (fija y removible)
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Blanqueamiento} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Aclara tus dientes de manera efectiva, eliminando manchas y
                    mejorando el brillo de tu sonrisa. ¡Obtén dientes más
                    blancos en una sola sesión!
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  Blanqueamiento Dental
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Implantes} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Reemplaza dientes perdidos de manera permanente con
                    implantes que lucen y funcionan como dientes naturales. Una
                    inversión en tu salud bucal a largo plazo.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  Implantes dentales
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Cirugia} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Extracción segura de las muelas del juicio para evitar
                    complicaciones y dolores futuros. Realizamos procedimientos
                    precisos y sin dolor.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  Cirugía del tercer molar
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider
            textAlign="center"
            sx={{
              padding: "15px 0 15px 0",
              borderColor: "#0072ff",
              opacity: "0.5",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
