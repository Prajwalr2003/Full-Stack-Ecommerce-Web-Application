import { Footer } from "flowbite-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function FooterBar() {
  return (
    <Footer container className="rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-evenly md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="../../temp/logo.png"
              alt="E-COMMERCE"
              name="E-COMMERCE"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="projects" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://prajwalrangariportfolio.netlify.app/"
                  target="_blank"
                >
                  Personal Portfolio
                </Footer.Link>
                <Footer.Link
                  href="https://prajwalrangari.pythonanywhere.com/"
                  target="_blank"
                >
                  College Curriculum System
                </Footer.Link>
                <Footer.Link href="#">Pathology Lab</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Coding Profiles" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://leetcode.com/u/Prajwal_Rangari/"
                  target="_blank"
                >
                  Leetcode
                </Footer.Link>
                <Footer.Link
                  href="https://www.geeksforgeeks.org/user/prajwal_rangari_/"
                  target="_blank"
                >
                  GeeksForGeeks
                </Footer.Link>
                <Footer.Link
                  href="https://codeforces.com/profile/prajwalrangari"
                  target="_blank"
                >
                  Codeforces
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Connect me" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank">
                  Email @ : prajwalrangari513@gmail.com
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/prajwal-rangari-b60645228/"
                  target="_blank"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Prajwalr2003/"
                  target="_blank"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-evenly">
          <Footer.Copyright href="#" by="Prajwal Rangari" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={FaLinkedin} />
            <Footer.Icon href="#" icon={FaGithub} />
            <Footer.Icon href="#" icon={FaInstagram} />
            <Footer.Icon href="#" icon={FaSquareXTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterBar;
