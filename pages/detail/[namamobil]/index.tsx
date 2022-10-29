import { Box } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { mobil } from "../../../data/mobil";

type Props = {};

const DetailMobil = (props: Props) => {
  const router = useRouter();
  const { namamobil } = router.query;

  const dataMobil = mobil.list.find((val) => val.nama === namamobil);

  return (
    <div>
      <Box>{namamobil}</Box>
      <Box>Merk : {dataMobil?.merk}</Box>
    </div>
  );
};

export default DetailMobil;
