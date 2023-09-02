"use client";
import { testinomials } from "@/contants/testimonials";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

const Testimonials = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={false}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper"
      >
        {testinomials.map((i) => {
          return (
            <SwiperSlide key={i.id}>
              <Box
                sx={{
                  background: "#181613",
                  color: "#FFFFFF",
                  borderRadius: "12px",
                  width: 200,
                  height: 300,
                  padding: { xs: 4, md: 8 },
                  mx: 4,
                }}
              >
                <Stack justifyContent={"space-between"} height={"100%"}>
                  <Box>
                    <img
                      src={i.profile}
                      alt={i.name}
                      style={{ width: 50, borderRadius: "50%" }}
                    />
                    <Typography mt={3}>{i.comment}</Typography>
                  </Box>
                  <Typography>{i.name}</Typography>
                </Stack>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
