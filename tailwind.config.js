/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist", serif'],
      },
      fontSize: {
        h1: ["clamp(2.25rem, 1.4992rem + 3.7538vw, 5.375rem)", { lineHeight: "clamp(2.5rem, 1.7192rem + 3.9039vw, 5.75rem)", fontWeight: "600" }],
        h2: ["clamp(2.25rem, 1.8296rem + 2.1021vw, 4rem)", { lineHeight: "clamp(2.25rem, 1.8296rem + 2.1021vw, 4rem)", fontWeight: "600" }],
        h3: ["clamp(1.625rem, 1.2947rem + 1.6517vw, 3rem)", { lineHeight: "clamp(1.875rem, 1.4846rem + 1.952vw, 3.5rem)", fontWeight: "700" }],
        h4: ["clamp(1.5rem, 1.3799rem + 0.6006vw, 2rem)", { lineHeight: "clamp(1.875rem, 1.7248rem + 0.7508vw, 2.5rem)", fontWeight: "600" }],
      },
      colors: {
        black: {
          DEFAULT: "#020817",
        },
        text: {
          DEFAULT: "#020817",
        },
        pink: {
          DEFAULT: "#FF4FAE",
        },
        gray: {
          DEFAULT: "#9B9B9B",
          light: "#FAFAFA",
          stroke: "#F5F5F5"
        },
        secondary: {
          DEFAULT: "#fcfcfc",
        },
      },
      spacing: {
        100: "clamp(3.125rem, 2.3742rem + 3.7538vw, 6.25rem)",
      },
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1344px",
        },
      },
      screens: {
        xs: "100%",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      backgroundImage: {
        "gradient1":
          "linear-gradient(88.42deg, #9747FF 56.25%, #D347F4 78.02%, #D87DF8 97.63%)",
        "gradient2":
          "linear-gradient(88.47deg, #A827E3 5.47%, #D941FE 50.61%, #FF5AE9 90.92%, #DC85FA 109.8%)",
        "gradient3":
          "linear-gradient(272.79deg, #641FCE -6.39%, #8B33C1 18.98%, #E563A2 74.7%, #FCA56D 103.69%)",
        "gradient4":
          "linear-gradient(88.47deg, rgba(183, 62, 238, 0.12) 11.37%, rgba(211, 71, 244, 0.12) 63.16%, rgba(216, 125, 248, 0.12) 109.8%)",
        "gradient5":
          "linear-gradient(88.47deg, #B73EEE 11.37%, #D347F4 63.16%, #D87DF8 109.8%)",
        "hr":
          "linear-gradient(90deg, #FFFFFF 0%, rgba(228, 228, 228, 0.920974) 12.31%, rgba(187, 187, 187, 0.8) 87.08%, rgba(255, 255, 255, 0.1) 100%)",
        "vr":
          "linear-gradient(0deg, #FFFFFF 0%, rgba(235, 232, 232, 0.87477) 7%, rgba(187, 187, 187, 0.5) 91.42%, rgba(255, 255, 255, 0.42) 98.88%)",
        "blc-gradient":
          "linear-gradient(180deg, #1b1b1bb3, #1b1b1b)",
      },
    },
  },
  plugins: [],
}