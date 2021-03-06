import './App.css';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div >
      <footer id="MyFoot" >
        <div className="page-footer white">
          <div class="footer-copyright indigo lighten-5">
            <div class="container center indigo-text " id="foot" >&copy; {year} My Records Corp.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;