import ResponsiveAppBar from "./Header";
import { CardMedia } from "@mui/material";

export default function Layout(props) {
    return(
        <>
            <ResponsiveAppBar />
            <div className="" style={{height:'auto', position: 'fixed'}}>
                        <CardMedia 
                    component='img'
                    sx={{ position:'fixed', maxHeight: '100vh', objectFit: 'contain', bgcolor:'transparent' }}
                    image='/images/maliek-hero.png'
                    alt='Dark work out area with a barbell as the center of attention'
                    />
                            
                </div>
            <main className="" style={{minHeight:'100vh', overflowY: 'hidden'}}>
                
                {props.children}
            
            </main>
            
        </>
    )
}