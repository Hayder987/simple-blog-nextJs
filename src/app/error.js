'use client'

import Link from "next/link";

function Error({ statusCode }) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Oops! Something went wrong</h1>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : 'An error occurred on the client'}
        </p>
        <Link href="/">back home</Link>
      </div>
    );
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default Error;
  