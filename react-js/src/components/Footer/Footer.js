import React from "react";

const currenDate = new Date();
const year = currenDate.getFullYear();
function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-success">
            <div className="container d-flex justify-content-center">
                <span className="text-white">&#169; {year} - CodeGym Huế</span>
            </div>
        </footer>
    )
}

export default Footer;