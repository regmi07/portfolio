import '../CSS/Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-center">
                <h3>contact me</h3>
                <p><span>email:</span><a href="mailto:regmi.nikes1@gmail.com">regmi.nikes1@gmail.com</a></p>
                <p><span>twitter:</span><a href="https://twitter.com/NikesRegmi">@NikesRegmi</a></p>
            </div>
            <div className="footer-bottom">
                <div className="footer-center">
                    <p>&#169;Nikesh Regmi 2021</p>
                    <a href="https://github.com/regmi07/portfolio">view source code</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;