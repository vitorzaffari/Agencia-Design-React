import './style.css';
import Card from "../Card"

export default function Experiencia(props) {
    return (
        <section className={props.temaClaro ? 'exp-bgr-claro' : 'exp-bgr-escuro' }>
            <div className="limitar-secao">
                <div className="box-experiencia">
                    <h2>Experiências De Trabalho</h2>
                    <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
                </div>
                <div className='box-card'>
                    <Card
                        data='JUNHO 2012 - 2016' subtitulo='Web Designer'
                        empresa='Pied Piper StartUp.' mensagem='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'
                    />
                    <Card
                        data='AGOSTO 2016 - 2019' subtitulo='Product Designer'
                        empresa='E Corp.' mensagem='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'
                    />
                    <Card
                        data='FEVEREIRO 2019 - 2021' subtitulo='Digital Consulting'
                        empresa='Arasaka Inc' mensagem='Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'
                    />
                </div>
            </div>
        </section>
    )
}