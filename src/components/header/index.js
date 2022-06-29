import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";

import Brand from '../../assets/img/brand.svg'

export function Header() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link  href="/"><a className=""><Image src={Brand}></Image></a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ms-3 mt-3">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )

}

