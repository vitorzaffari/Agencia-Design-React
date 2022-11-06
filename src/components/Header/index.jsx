import './style.css'

export default function Header(props) {

    return (
        <header className={props.temaClaro ? "modo-claro" : "modo-escuro"} >
            <div className="box-header limitar-secao">
                <img className='logo' src="assets/logo.png" alt="Logo" />
                <button onClick={props.alterarTema} className={props.temaClaro ? "modo-claro" : "modo-escuro"}><img src={props.temaClaro ? "assets/moon.png" : "assets/sun.png"} alt="Modo escuro" /></button>
            </div>
        </header>
    )
}