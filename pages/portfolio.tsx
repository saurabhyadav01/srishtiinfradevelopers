import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: '/projects',
      permanent: false
    }
  };
};

export default function PortfolioRedirect() { return null; }


