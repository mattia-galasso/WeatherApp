import { Outlet } from "react-router"
import Navbar from "../components/Navbar"



export default function DefaultLayout() {
    return (
    <>
        {/* HEADER */}  
        <header className="fixed-top">
            <Navbar />
        </header>

        {/* MAIN CONTENT */}
        <main className="main-container">
            <Outlet />
        </main>
    </>
    )
}