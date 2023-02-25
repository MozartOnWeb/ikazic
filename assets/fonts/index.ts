import localFont from "@next/font/local";

export const clashDisplay = localFont({
  src: [
    {
      path: "./Clash_Display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Clash_Display/ClashDisplay-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Clash_Display/ClashDisplay-Semibold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--clashDisplay",
});

export const inter = localFont({
  src: [
    {
      path: "./Inter/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--inter",
});
