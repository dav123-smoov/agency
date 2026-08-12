import './BlogPage.css';

export default function BlogPage() {
    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="blog-hero-overlay"></div>
                <div className="blog-hero-content">
                    <h1>Blog</h1>
                    <p>Home | Blog</p>
                </div>
            </section>

            <section className="coming-soon-section">
                <div className="coming-soon-content">
                    <h2>Coming Soon</h2>
                    <p>We are working hard to bring you exciting new articles. Please check back later!</p>
                </div>
            </section>
        </div>
    );
}
