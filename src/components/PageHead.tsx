import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageHeadProps {
  title: string;
  description: string;
}

const PageHead: FC<PageHeadProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
    </Helmet>
  );
};

export default PageHead;
