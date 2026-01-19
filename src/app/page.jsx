import AgeCollections from "@/components/home/AgeCollections";
import Banner from "@/components/home/Banner";
import CustomerGallery from "@/components/home/CustomerGallery";
import FeaturedBrands from "@/components/home/FeaturedBrands";
import NewArrivals from "@/components/home/NewArrivals";
import NewsletterOffer from "@/components/home/NewsletterOffer";
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
      <section><AgeCollections></AgeCollections></section>
      <section><CustomerGallery></CustomerGallery></section>
      <section><NewsletterOffer></NewsletterOffer></section>
      <section><FeaturedBrands></FeaturedBrands></section>


    </div>
  );
}
