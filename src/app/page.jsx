import Banner from "@/components/home/Banner";
import NewArrivals from "@/components/home/NewArrivals";
import Products from "@/components/home/Products";
import ShopByCategory from "@/components/home/ShopByCategory";
import TrustBadges from "@/components/home/TrustBadges";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section><Banner></Banner></section>
      <section><Products></Products></section>
      <section><ShopByCategory></ShopByCategory></section>
      <section><NewArrivals></NewArrivals></section>
      <section><TrustBadges></TrustBadges></section>

    </div>
  );
}
