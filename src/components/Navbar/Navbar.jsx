import "./Navbar.css"

const Navbar = () => {

    window.onload = function () {
        const menu_btn = document.querySelector(".hamburger");
        const mobile_menu = document.querySelector(".mobile-nav")
    
        menu_btn.addEventListener("click", function () {
            menu_btn.classList.toggle("is-active");
            mobile_menu.classList.toggle("is-active");
        });
    }

    
    return (
        <div>
            <section  className="container nav-top ">
            {/* <img className="logo" src="./image/trust7.jpg" alt="NGO LOGO"/> */}
            <div className="navbar">
            <nav className="nava">
                <a href="#home">HOME</a>
                <a href="#aboutus">ABOUT US</a>
                <a href="#whatwedo">WHAT WE DO</a>
                <a href="#media">MEDIA</a>
                <a href="#contact">CONTACT</a> 
                <button className="btn btn-primary">Register</button>
            </nav>
            </div>

            <button className="hamburger ">
            <div className="bar"></div>
            </button>
        </section>

        <nav className="mobile-nav">
            <a href="#home">HOME</a>
            <a href="#aboutus">ABOUT US</a>
            <a href="#whatwedo">WHAT WE DO</a>
            <a href="#media">MEDIA</a>
            <a href="#contact">CONTACT</a>  <br /> <br />
            <button className="btn btn-primary">Register</button>
        </nav>
        </div>
    )
}

export default Navbar
