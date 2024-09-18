import './index.css'

export default function Navbar(){
    return (
        <nav class="navbar">
            <h1 class="page-title">Filmes</h1>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/filmes">Filmes</a></li>
                <li><a href="/historia">História</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    )
}