import MyFooter from "../02-Parent-Child/MyFooter"
import MyHeader from "../02-Parent-Child/MyHeader"
import Navigation from "../02-Parent-Child/Navigation"


const Standard =()=>{
    return(
        <>
            <MyHeader/>
            <Navigation/>
            <div>
                <section>
                    <h1>Welcome to the main</h1>
                </section>
            </div>
            {/* <MyFooter/> */}
        </>

    )

}

export default Standard