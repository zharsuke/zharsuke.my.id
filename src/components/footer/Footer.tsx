export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer footer-center p-4 border-dashed border-t-2 border-primary text-base-content mt-10">
            <aside>
                <p>Copyright © {currentYear} - All right reserved by zharsuke</p>
            </aside>
        </footer>
    )
}