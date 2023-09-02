"use client";
import { testinomials } from "@/contants/testimonials";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Ref, useRef } from "react";

const Testimonials = () => {
  const ref = useRef<SwiperRef>(null);

  return (
    <Container sx={{ position: "relative" }}>
      <Swiper
        ref={ref as unknown as Ref<SwiperRef> | undefined}
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
        style={{ zIndex: 0 }}
      >
        {testinomials.map((i) => {
          return (
            <SwiperSlide
              key={i.id}
              className="slide"
              style={{ margin: "0 auto" }}
            >
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
      <Box
        sx={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: 1,
          top: "40%",
          right: 0,
          borderRadius: "50%",
          padding: 1,
          width: 30,
          height: 30,
          textAlignLast: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          if (ref.current) {
            const swipe = ref?.current.swiper;
            swipe?.slideNext();
          }
        }}
      >
        <ChevronRightIcon
          sx={{ color: "black", verticalAlign: "-webkit-baseline-middle" }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: 1,
          top: "40%",
          left: 20,
          borderRadius: "50%",
          padding: 1,
          width: 30,
          height: 30,
          textAlignLast: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          if (ref.current) {
            const swipe = ref?.current.swiper;
            swipe?.slidePrev();
          }
        }}
      >
        <ChevronLeftIcon
          sx={{ color: "black", verticalAlign: "-webkit-baseline-middle" }}
        />
      </Box>
    </Container>
  );
};

export default Testimonials;
