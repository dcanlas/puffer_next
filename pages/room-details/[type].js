import Layout from "@/components/layout/Layout";
import RoomsDetails from "@/components/sections/RoomsDetails";
import { useRouter } from "next/router";

const rooms = [
  { type: "1", name: "Product 1", description: "...", price: 20 },
  { type: "2", name: "Product 2", description: "...", price: 30 },
  // ... your array of objects
];

export default function RoomDetails({ room }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="preloader"></div>;
  }

  return (
    <>
      <Layout headerStyle={1}>
        <RoomsDetails room={room} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = rooms.map((room) => ({
    params: { type: room.type },
  }));

  return { paths, fallback: true }; // Set fallback to true for dynamic rendering
}

export async function getStaticProps({ params }) {
  const room = rooms.find((r) => r.type === params.type);

  if (!room) {
    return { notFound: true };
  }

  return {
    props: { room },
  };
}
