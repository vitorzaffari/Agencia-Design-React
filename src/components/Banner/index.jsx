import './style.css';

export default function Banner(props){

    return(
        <section>
            <div id='box-section'>
                <div id='box-imagem' className={props.temaClaro ? 'bgr-img-fundo-claro' : 'bgr-img-fundo-escuro'}></div>
                <div className="banner-texto">
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </div>
        </section>
    )
}