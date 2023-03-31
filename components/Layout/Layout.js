import ResponsiveAppBar from "./Header";

export default function Layout(props) {
    return(
        <>
            <ResponsiveAppBar />
            <div className="canvas" style={{maxHeight:'100vh'}}>
                {props.children}
            </div>
            
        </>
    )
}