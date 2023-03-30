import { useNavigate, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand cl-blue" href="#">//Shorts//</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/help">Help</Link>
        </li>
      </ul>
      <button class="btn btn-outline-primary ms-3">Sign Up</button>
    </div>
  </div>
</nav>

        </>
    )
}
export default Nav;