import { Outlet, Link }
  from 'react-router-dom';

function Painel() {
  return (
    <div>
      
      <nav>
        <Link to="/home"><br/>
        Home
        </Link>
        <Link to="sobre"><br/>
          Sobre
        </Link>
        <Link to="contato"><br/>
          Contato
        </Link>
      </nav>

      {/* filho renderiza aqui */}
      <Outlet />
    </div>
  );
}

export {Painel}