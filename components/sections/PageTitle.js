import Link from "next/link";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PageTitle = (props) => {
  return (
    <Box component="section" className="page-title">
      <Container>
        <Box className="title-outer text-center">
          <Typography variant="h1" className="title">
            {props.pageName}
          </Typography>
          {/* <ul className="page-breadcrumb">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Pages</Link></li>
            <li>{props.pageName}</li>
          </ul> */}
        </Box>
      </Container>
    </Box>
  );
};

export default PageTitle;
