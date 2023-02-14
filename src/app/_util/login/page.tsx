import dynamic from 'next/dynamic'

const login = dynamic(() => import('@/lib/Auth'),
  {
    ssr: false
  });

export default login;
