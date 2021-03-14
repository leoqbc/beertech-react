import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Hotel as IHotel } from "./index";

export default function Hotel({ hotel }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.desc}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:5000/hotels`);
  const hotels = await response.json();

  const hotelsIds = hotels.map((hotel: IHotel) => "/hotels/" + hotel.id);

  return {
    paths: hotelsIds,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(`http://localhost:5000/hotels/${id}`);
  const hotels = await response.json();

  return {
    props: {
      hotel: hotels[0],
    },
  };
};
