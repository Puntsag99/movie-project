import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
export const Trailer = () => {
  const { data } = useFetchDatainClient("/movie/${id}/videos?language=en-US");

  console.log("tailer afaf", data);

  return <div></div>;
};
