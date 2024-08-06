import './styles.css'

const Banner = () =>{ 
    const message = ["Enjoy our new homepage... More pages launching soon!", "Enjoy our new homepage... More pages launching soon!", "Enjoy our new homepage... More pages launching soon!"]
    return(
        <div className="flex justify-between py-2 bg-gradient-to-r from-blue-100 to-red-100 overflow-hidden">
            {
                message.map((msg,i) => (
                    <span className="ticker text-xs md:font-medium text-blue-900 whitespace-nowrap" key={i}>{msg}</span>
                ))
            }
        </div>
    )
}  

export default Banner
