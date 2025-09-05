import { Lora as HeadingFontFunction } from "next/font/google";

export const headingFont = HeadingFontFunction({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});