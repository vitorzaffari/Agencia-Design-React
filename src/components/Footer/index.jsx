import './style.css';

export default function Footer(props){
    return(
        <footer className={props.temaClaro ? 'footer-bgr-claro' : 'footer-bgr-escuro' }>
            <div className="box-footer limitar-secao">
                <img src="/assets/logo.png" alt="Logo" />
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                <div className="box-icones">
                    <img src="/assets/facebook.png" alt="Facebook"/>
                    <img src="/assets/twitter.png" alt="Twitter"/>
                    <img src="/assets/linkedin.png" alt="Linkedin"/>
                    <img src="/assets/dribble.png" alt="Dribble"/>
                    <img src="/assets/behance.png" alt="Behance"/>
                    <img src="/assets/google-plus.png" alt="Google+"/>
                </div>
                <p>Copyright 2022<span> @ Vitor Zaffari</span></p>
            </div>
        </footer>
    )
}