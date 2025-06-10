import Header from "../components/Header"
import { useLocation } from "react-router-dom"
import { Activity } from "../components/Activity"
import Card from "../components/Card"

function Landing()
{
    const data = useLocation()
    console.log(data.state.user)

    return(
       <div className="max-w-6xl min-h-screen mx-auto flex justify-center items-center px-4">
             <div className="container">
               <Header />
               <Card/>
               <Activity/>
             </div>
           </div>
    )
}

export default Landing 