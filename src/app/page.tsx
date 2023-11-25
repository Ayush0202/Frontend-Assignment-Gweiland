import Navbar from "@/components/Navbar";
import TopAnnouncement from "@/components/TopAnnouncement";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  return (
    <>
      <TopAnnouncement />
      <Navbar />
      <Carousel></Carousel>
    </>
  );
}
