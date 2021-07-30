import React from 'react';

function Home(){
    return(
        <div className="jumbotron jumbotron-fluid mt-5">
        <div className="col-sm-8 mx-auto">
          <h1>Selamat Datang Di Halaman Utama!!!</h1>
          <p>Hallo, nama saya</p>
          <p>At the smallest breakpoint, the collapse plugin is used to hide the links and show a menu button to toggle the collapsed content.</p>
          <p>
            <a className="btn btn-primary" href="../components/navbar/" role="button">View navbar docs »</a>
          </p>
        </div>
      </div>
    );
}

export default Home;