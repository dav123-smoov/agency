import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './LandingPage.css';

export default function Layout() {
    return (
        <div className="landing-page">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
