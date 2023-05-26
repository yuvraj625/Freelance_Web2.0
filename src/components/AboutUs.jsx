import React from "react";

const AboutUs = () => {
  var handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1QEjtLAcm0MUarzvYABSUEc2J685v6OkM/view?usp=sharing"; // Replace with the actual file URL

    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "file.pdf"; // Specify the desired file name

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div id="aboutus">
      <h1>About Us</h1>
      <p>
        Welcome to our freelance business! We are a team of skilled
        professionals dedicated to providing high-quality services.
      </p>
      <p>
        With years of experience in our respective fields, we bring expertise
        and passion to every project we undertake.
      </p>
      <p>
        Our mission is to deliver outstanding results that exceed our clients'
        expectations and help them achieve their goals.
      </p>
      <a href="/path/to/your/file.pdf" download>
        <button onClick={handleDownload} id="cv">
          Download CV !
        </button>
      </a>
    </div>
  );
};

export default AboutUs;
