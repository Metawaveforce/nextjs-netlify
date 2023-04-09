
import Login from '../pages/login';
import { useRouter } from 'next/router'
import { useStateContext } from '../componets/Hboprovider'
import { useEffect,} from 'react'
import MainLayout from '../componets/MainLayout';



export default function Index() {
    const globalState = useStateContext();
  const router = useRouter();
  
  useEffect( () => {
      const loggedIn = false;
  
      if( loggedIn === false) {
  
          router.push ('/')
        }
        }, )  
       return (
<MainLayout>
<Login/>
</MainLayout>
)
}




