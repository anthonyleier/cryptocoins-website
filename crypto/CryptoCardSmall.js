import Image from 'next/image';

export default function CryptoCard(props) {
	let valor = props.ticker.sell;
	valor = parseFloat(valor).toFixed(0);
	valor = String(valor);
	var metade = Math.floor(valor.length / 2);
	valor = valor.substr(0, metade) + '.' + valor.substr(metade);
	valor = 'R$ ' + valor;

	let vol = parseFloat(props.ticker.vol).toFixed(2);
	let amount = parseFloat(100 / props.ticker.sell).toFixed(5);

	let nome = props.titulo.toLowerCase() + 's';

	return (
		<>
			<div className="crypto-small-div">
				<div className="crypto-small-logo">
					<Image src={props.logo} width={65} height={65} />
				</div>
				<div className="crypto-small-info">
					<p className="crypto-small-titulo">{props.titulo}</p>
					<p className="crypto-small-valor">{valor}</p>
					<div className="crypto-small-line"></div>
					<p className="crypto-small-description">
						{vol} {nome} negociados nas últimas 24hs
					</p>
				</div>
			</div>
		</>
	);
}
