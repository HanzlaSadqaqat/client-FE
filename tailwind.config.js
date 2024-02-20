const { nextui } = require("@nextui-org/react");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fcfcfc",
          100: "#f4f4f4",
          400: "#c8c6c9",
          600: "#7a757c",
          900: "#131d21",
          "50_00": "#fcfcfc00",
          "200_b2": "#ebebebb2",
          "100_01": "#f6f0f9",
          "400_4c": "#c8c6c94c",
          "900_01": "#1f1321",
          "900_03": "#212121",
          "900_02": "#282828",
        },
        black: { 900: "#000000", "900_11": "#00000011" },
        white: { A700: "#ffffff" },
        blue_gray: { 50: "#f1f1f1" },
        colors: "#f1f1f1ff",
        purple: {
          600: "#8702c9",
          "600_05": "#8702c905",
          "600_19": "#8702c919",
        },
      },
      fontFamily: { nunito: "Nunito" },
      backgroundImage: {
        gradient: "linear-gradient(270deg ,#fcfcfc,#fcfcfc00)",
      },
      boxShadow: { bs: "0px 0px  7px 0px #00000011" },
    },
  },
  plugins: [require("@tailwindcss/forms"), nextui()],
};
