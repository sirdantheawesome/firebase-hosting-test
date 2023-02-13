import dynamic from 'next/dynamic'

const login = dynamic(() => import('@/lib/auth'),
  {
    ssr: false
  });

export default login;
