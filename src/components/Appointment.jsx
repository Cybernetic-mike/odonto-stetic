import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import AboutImage from "../images/about.jpg";
import Grid from "@mui/material/Grid2";
import Perfil from "../images/perfil.png";
import Qr from "../images/qr.png";
import Whatsapp from "../images/whatsapp.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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

  const openWhatsapp = () => {
    window.open("https://wa.me/73222066", "_blank");
  };
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/DeqMiyJ9dzsr3ZbA6", "_blank");
  };
  return (
    <Box id="appointment" sx={{ flexGrow: 1, paddingTop: "65px" }}>
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
            Realiza una Cita
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
              paddingTop: "15px",
              top: "0",
              alignItems: "flex-start",
            }}
            container
            spacing={3}
          >
            <Grid
              sx={{ verticalAlign: "top" }}
              size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "70%",
                      sm: "70%",
                      md: "100%",
                      lg: "100%",
                    },
                  }}
                >
                  <img className="dim-perfil" src={Perfil} alt="Perfil" />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 8, lg: 8 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Box sx={{ padding: "0 15px 0 15px" }}>
                    <Typography variant="h5">
                      Dr. Carlos Callizaya - Cuidado Dental de Confianza
                    </Typography>
                    <Typography>
                      El Dr. Carlos Callizaya se especializa en brindar
                      soluciones dentales personalizadas para toda la familia.
                      <br /> Nos enfocamos en crear sonrisas saludables y
                      hermosas en un ambiente cómodo y moderno.
                      <br />
                      Visítanos para una consulta y descubre cómo podemos
                      mejorar tu salud dental y tu sonrisa.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Box sx={{ paddingBottom: "15px" }}>
                    <Typography sx={{ display: "inline", fontWeight: "bold" }}>
                      Agenda tu cita con un click →{"  "}
                    </Typography>
                    <IconButton
                      sx={{ width: "50px", height: "50px" }}
                      onClick={openWhatsapp}
                    >
                      <img
                        className="dim-whatsapp"
                        src={Whatsapp}
                        alt="Whatsapp"
                      />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                >
                  <Box
                    sx={{ width: "80%", cursor: "pointer" }}
                    onClick={openWhatsapp}
                  >
                    <img src={Qr} alt="QR" />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Box>
                    <Typography style={{ fontWeight: "bold" }}>
                      NUESTRA DIRECCION:
                    </Typography>
                    <Typography>
                      CUIDAD DE LA PAZ CALLE SANTA CRUZ GALERÍA VIVENCIA #584
                      FRENTE AL PASAJE EL ROSARIO ENTRE ISAAC TAMAYO Y PLAZA
                      SANTA CRUZ{" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={<LocationOnIcon />}
                      onClick={openMaps}
                    >
                      Ubicacion en Maps
                    </Button>
                  </Box>
                </Grid>
              </Grid>
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
