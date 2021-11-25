import React from "react";
import Head from "next/head";

const Seo = ({ title, description }) => {
  const titleMain = title ? title : "Rumah Petak Sewa Nurul Qolbi";
  const descMain = description
    ? description
    : "Rumah Petak Sewa Nurul Qolbi, penginapan dan rumah kontrak untuk semuanya";

  return (
    <Head>
      <title>{titleMain}</title>
      <meta name="description" content={descMain} />
    </Head>
  );
};

export default Seo;
