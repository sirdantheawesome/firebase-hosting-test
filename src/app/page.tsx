import './page.scss'
import '@/standard-styles/main.scss'
import AddPageButton from '@/components/debug/DebugButtons'


const Home = async () => {

  return (
    <>
      <div className="center">
        <AddPageButton />
      </div>
      <p>Look into using reacts context to make the currentUser data accessible whereever you are in the app</p>
      <p>Currently you have to get the authentication change for each different page that uses it</p>
    </>
  )
}

export default Home