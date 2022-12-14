import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/layout";
import { mobil } from "../data/mobil";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          {mobil.list.map((val) => (
            <Box marginY={"4"} key={val.nama + val.merk}>
              <Link href={`/detail/${val.nama}`}>
                <Box color={"blue.700"} fontWeight="bold" marginBottom={"4"}>
                  {val.nama}
                </Box>
              </Link>
              <HStack align={"stretch"}>
                {val.gallery?.map((urlimg) => (
                  <img src={urlimg} alt="mobil" key={urlimg} />
                ))}
              </HStack>
              <Box color={"blue.700"} fontWeight="bold">
                Merk : {val.merk}
              </Box>
            </Box>
          ))}
        </div>
      </Layout>
    </>
  );
}
