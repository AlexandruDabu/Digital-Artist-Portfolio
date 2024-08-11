import { Divider } from "@mui/material";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";

export default function HomePage() {
    return (
        <>
        <Hero/>
        <Divider/>
        <Contact/>
        <Divider/>
        <Pricing/>
        </>
    )
}