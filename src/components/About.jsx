import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import AboutImage from "../images/about.jpg";
import Grid from "@mui/material/Grid2";
import Whatsapp from "../images/whatsapp.svg";
import Mission from "../images/mission.jpg";
import Vision from "../images/vision.jpg";

function About() {
  return (
    <Box
      id="about"
      sx={{
        flexGrow: 1,
        paddingTop: "65px",
        height: "auto",
        display: "block",
        position: "static",
      }}
    >
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
            Sobre Nosotros
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
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  //width: "100%",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "end",
                  },
                }}
              >
                <img className="dim-boy" src={AboutImage} alt="Boys Smile" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  width: "100%",

                  padding: "10px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "15px",
                    fontSize: {
                      xs: "26px",
                      sm: "26px",
                      md: "28px",
                      lg: "30px",
                    },
                  }}
                >
                  Bienvenido a ODONTO STETIC
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "10px",
                    fontSize: {
                      xs: "22px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                >
                  ¡Tu sonrisa es nuestra prioridad!{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                    },
                  }}
                >
                  En nuestro consultorio dental, combinamos tecnología de
                  vanguardia con equipos odontológicos de alta calidad para
                  garantizar tratamientos seguros y eficientes.
                  <br />
                  Con un profesional experimentado y comprometido con tu
                  bienestar, te ofrecemos una atención personalizada y de
                  calidad, enfocada en brindarte la mejor experiencia. ¡Agenda
                  tu cita y descubre la diferencia de un cuidado dental
                  profesional!"
                  <br />
                </Typography>
                <Typography sx={{ display: "inline", fontWeight: "bold" }}>
                  Agenda tu cita →{"  "}
                </Typography>
                <IconButton sx={{ width: "50px", height: "50px" }}>
                  <img className="dim-whatsapp" src={Whatsapp} alt="Whatsapp" />
                </IconButton>
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
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: "15px",
            }}
            container
            spacing={3}
          >
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box>
                <img src={Mission} alt="Boys Smile" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box
                sx={{
                  width: "100%",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "10px",
                    fontSize: {
                      xs: "22px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                >
                  Nuestra Misión{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    },
                  }}
                >
                  Nuestra misión es ofrecer a nuestros pacientes la mejor
                  atención dental en el centro de la ciudad de La Paz y brindar
                  un servicio al cliente excepcional y rápido.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box>
                <img src={Vision} alt="Boys Smile" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box
                sx={{
                  width: "100%",

                  padding: "10px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "10px",
                    fontSize: {
                      xs: "22px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                >
                  Nuestra Visión{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    },
                  }}
                >
                  Nuestra visión es superar las expectativas de nuestros
                  pacientes en todos los sentidos posibles. Lo lograremos
                  brindando la mejor calidad en atención dental.
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

export default About;
