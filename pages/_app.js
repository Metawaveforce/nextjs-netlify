import MainLayout from '../componets/Mainlayout';
import '../styles/styles.scss'
import  {Hboprovider} from '../pages/Hboprovider'

function MyApp({ Component, pageProps }) {
  return (
      <Hboprovider>
  <Component {...pageProps} />
  </Hboprovider>
  
  )
  
}

export default MyApp
