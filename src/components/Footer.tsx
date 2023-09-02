import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container
        sx={{ color: "#a9927d", minHeight: "30vh", py: "5rem" }}
        maxWidth={"sm"}
      >
        <Stack justifyContent={"center"} position={"relative"}>
          <Typography
            textAlign={"center"}
            fontSize={36}
            fontFamily={"Unica One"}
          >
            Summon Siddharth
          </Typography>
          <Typography textAlign={"center"}>
            Ready for a supernatural coding experience? Reach out to Siddharth
            and bring your digital project to awe-inspiring heights! Beware,
            mere mortals may find it hard to grasp his genius.
          </Typography>
          <Button
            sx={{
              width: "fit-content",
              margin: "20px auto",
              background: "#a9927d",
              color: "#ffffff",
              textTransform: "capitalize",
              zIndex: 1,
              "&:hover": {
                background: "#ffffff",
                color: "#a9927d",
                border: "1px solid #a9927d",
              },
            }}
          >
            <a href="mailto:siddharth17vaishnav@gmail.com">Contact Siddharth</a>
          </Button>
          <Box
            sx={{
              width: 260,
              height: 470,
              borderRadius: "90%",
              transform: "rotate(220deg)",
              border: "1px solid grey",
              position: "absolute",
              right: "-8rem",
              bottom: "-10rem",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
