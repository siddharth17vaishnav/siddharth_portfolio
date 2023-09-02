import React, { useState, useEffect } from "react";
import { Stack, Typography, Container, Box, Button } from "@mui/material";
import { portfolio } from "@/contants/portfolio";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Portfolio = () => {
  const [page, setPage] = useState<number>(0);
  const itemsPerPage = 3;
  const [data, setData] = useState([...portfolio].slice(0, itemsPerPage));

  useEffect(() => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const d = [...portfolio].slice(startIndex, endIndex);
    setData(d);
  }, [page]);

  const handleOpenLinkInNewPage = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Container sx={{ py: 10 }}>
      <Typography fontFamily={"Unica One"} fontSize={36} my={1}>
        PORTFOLIO
      </Typography>
      <Stack gap={3}>
        {data.map((i) => {
          return (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              key={i?.id}
              sx={{
                background: "#181601",
                padding: 4,
                borderRadius: 4,
                cursor: "pointer",
              }}
              onClick={() => handleOpenLinkInNewPage(i.url)}
            >
              <Box>
                <Box></Box>
                <Stack>
                  <Typography>{i?.name}</Typography>
                </Stack>
              </Box>
              <ArrowForwardIosIcon />
            </Stack>
          );
        })}
      </Stack>
      <Stack direction={"row"} gap={2} justifyContent={"end"} mt={2}>
        {page !== 0 && (
          <Button
            sx={{
              background: "#ffffff",
              color: "#000000",
              textTransform: "capitalize",
              "&:hover": {
                background: "#000000",
                color: "#ffffff",
                border: "1px solid #ffffff",
              },
            }}
            onClick={() => {
              setPage((prevPage) => prevPage - 1);
            }}
          >
            Prev
          </Button>
        )}
        {data.length === itemsPerPage && (
          <Button
            sx={{
              background: "#a9927d",
              color: "#ffffff",
              textTransform: "capitalize",
              "&:hover": {
                background: "#ffffff",
                color: "#a9927d",
                border: "1px solid #a9927d",
              },
            }}
            onClick={() => {
              setPage((prevPage) => prevPage + 1);
            }}
          >
            Next
          </Button>
        )}
      </Stack>
    </Container>
  );
};
export default Portfolio;
