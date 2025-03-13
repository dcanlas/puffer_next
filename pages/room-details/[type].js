import Layout from "@/components/layout/Layout";
import RoomsDetails from "@/components/sections/RoomsDetails";
import { useRouter } from "next/router";
import { ROOM_DETAILS } from "@/constants/room-details";

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
  const paths = ROOM_DETAILS.map((room) => ({
    params: { type: room.type },
  }));

  return { paths, fallback: true }; // Set fallback to true for dynamic rendering
}

export async function getStaticProps({ params }) {
  const room = ROOM_DETAILS.find((r) => r.type === params.type);

  if (!room) {
    return { notFound: true };
  }

  return {
    props: { room },
  };
}
