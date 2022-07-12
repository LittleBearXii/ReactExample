import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import RouteNav from '../router/routerNav';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../helper/Loading';
import { SessionProvider } from 'next-auth/react';

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: any) => {
      console.log(`Loading: ${url}`);
      setIsLoading(true);
    }

    const handleStop = () => {
      setIsLoading(false);
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  });

  return (
    <SessionProvider session={session}>
      <RouteNav />
      <Loading loading={isLoading} />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp