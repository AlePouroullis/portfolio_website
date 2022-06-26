import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>This is the children prop for the "Home Page" page.</p>
        <StaticImage
          alt="Sunflowers"
          src="../images/sunflowers.jpeg"
        />
      </Layout>
  );
}

export default IndexPage;