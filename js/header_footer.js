// JavaScript file to reload header and footer into each page
// Jose D Gonzalez
class CarolinaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--Header Template-->
        <header>
        <h1 id="companyLogo">Carolina Adventures</h1>
        <nav>
            <a class="navLink" href="index.html">Home</a>
            <a class="navLink" href="hiking.html">Hiking</a>
            <a class="navLink" href="rafting.html">Rafting</a>
            <a class="navLink" href="horse-riding.html">Horseback Riding</a>
            <a class="navLink" href="about.html">About</a>
            <a class="navLink" id="booking" href="booking.html">Booking</a>
        </nav>
    </header>
        `;
    }
}
class CarolinaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `  
        <footer>
            <p>&copy; 2023 All Rights Reserved.</p>
        </footer>
        `;
    }
}
// Linking elements with the classes
customElements.define('carolina-header', CarolinaHeader) 
customElements.define('carolina-footer', CarolinaFooter)