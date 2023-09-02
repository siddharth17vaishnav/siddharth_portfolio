import { Box, Container, Grid, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          background: "#FFFFFF",
          color: "#000000",
          height: { xs: "unset", md: "70vh" },
          miHeight: { xs: "70vh", md: "unset" },
          py: { xs: 10, md: 0 },
        }}
      >
        <Container
          sx={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  maxWidth: "max-content",
                  padding: "4px 15px",
                  borderRadius: "40px",
                  border: "1px solid grey",
                  margin: { xs: "0 auto", md: "unset" },
                }}
              >
                {"Siddharth's Realm"}
              </Typography>
              <Typography
                variant="h2"
                fontFamily={"Unica One"}
                sx={{ textAlign: { xs: "-webkit-center", md: "unset" } }}
              >
                Full Stack Wizardry Unleashed
              </Typography>
              <Box
                sx={{
                  background: "#a9927d",
                  maxWidth: "max-content",
                  color: "#FFF",
                  padding: "10px 20px",
                  borderRadius: "40px",
                  marginTop: "10px",
                  cursor: "pointer",
                  margin: { xs: "10px auto", md: "10px" },
                }}
              >
                Explore Genius
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              mt={{ xs: 5, md: 0 }}
            >
              <img
                src="/code.gif"
                alt="CODE"
                style={{ borderRadius: "26px", overflow: "hidden" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#a9927d", color: "#FFFFFF", height: "30vh" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography
            alignSelf={"start"}
            fontSize={26}
            fontFamily={"Unica One"}
          >
            The Dark Arts of Coding
          </Typography>
          <Typography>
            Siddharth Vaishnav, a full stack magician, bends the rules of
            programming with unmatched precision. Witness the epic collision of
            frontend and backend sorcery as you discover his awe-inspiring
            portfolio.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
