import { GetStaticProps } from "next";
import Router from "next/router";
import Link from "next/link";

export interface Hotel {
  id: number;
  name: string;
  desc: string;
}

export default function Hotels({ hotels }) {
  return (
    <section className="hotels">
      <ul>
        {hotels.map((hotel: Hotel) => (
          <li>
            <Link href={"/hotels/[id]"} as={"/hotels/" + hotel.id}>
              {hotel.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:5000/hotels");
  const hotels = await response.json();

  return {
    props: {
      hotels,
    },
    revalidate: 5,
  };
};
