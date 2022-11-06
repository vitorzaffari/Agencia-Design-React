import './style.css'

export default function Card(props){
    return(
            <div id='card'>
                <p>{props.data}</p>
                <h2>{props.subtitulo}</h2>
                <p>{props.empresa}</p>
                <p>{props.mensagem}</p>
            </div>
    )
}