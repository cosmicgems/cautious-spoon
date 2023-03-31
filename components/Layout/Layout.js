import ResponsiveAppBar from "./Header";

export default function Layout(props) {
    return(
        <>
            <ResponsiveAppBar />
            <div className="canvas" style={{height:'auto'}}>
                {props.children}
            </div>
            
        </>
    )
}