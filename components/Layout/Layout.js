import ResponsiveAppBar from "./Header";

export default function Layout(props) {
    return(
        <>
            <ResponsiveAppBar />
            {props.children}
        </>
    )
}