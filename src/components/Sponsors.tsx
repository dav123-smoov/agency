const SPONSORS = [
    { name: 'Fired', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg> },
    { name: 'CLEANUP', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path></svg> },
    { name: 'Tobias', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
    { name: 'vital', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg> },
    { name: 'Refert', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg> },
    { name: 'Shells', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg> },
    { name: 'Plation', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 17 22 12"></polyline></svg> },
];

export default function Sponsors() {
    return (
        <section className="sponsors-section">
            <div className="sponsors-scroll-wrapper">
                <div className="sponsors-inner">
                    {/* Render original set */}
                    {SPONSORS.map((sponsor, i) => (
                        <div className="sponsor-logo" key={i}>
                            {sponsor.icon}
                            {sponsor.name}
                        </div>
                    ))}
                    {/* Render clones for mobile marquee loop */}
                    {SPONSORS.map((sponsor, i) => (
                        <div className="sponsor-logo sponsor-logo-clone" key={`clone-${i}`} aria-hidden="true">
                            {sponsor.icon}
                            {sponsor.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
