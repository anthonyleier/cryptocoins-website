import CryptoCard from '../components/CryptoCard';
import CryptoCardSmall from '../components/CryptoCardSmall';

async function getTicker(moeda) {
	const API_URL = 'https://www.mercadobitcoin.net/api/';

	let btc = await fetch(API_URL + 'BTC' + '/ticker/');
	btc = await btc.json();

	let bch = await fetch(API_URL + 'BCH' + '/ticker/');
	bch = await bch.json();

	let eth = await fetch(API_URL + 'ETH' + '/ticker/');
	eth = await eth.json();

	let ltc = await fetch(API_URL + 'LTC' + '/ticker/');
	ltc = await ltc.json();

	let mco = await fetch(API_URL + 'MCO2' + '/ticker/');
	mco = await mco.json();

	let link = await fetch(API_URL + 'LINK' + '/ticker/');
	link = await link.json();

	return {
		btc,
		bch,
		eth,
		ltc,
		mco,
		link,
	};
}

export async function getStaticProps() {
	const moedas = await getTicker();

	return {
		props: {
			moedas,
		},
		revalidate: 15,
	};
}

export default function Home(props) {
	return (
		<>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"></link>
			<div className="cryptodeck">
				<div className="cryptoitem">
					<CryptoCard logo={'/btc.svg'} titulo={'Bitcoin'} ticker={props.moedas.btc.ticker} />
				</div>
				<div className="cryptoitem">
					<CryptoCard logo={'/bch.svg'} titulo={'Bitcoin Cash'} ticker={props.moedas.bch.ticker} />
				</div>
				<div className="cryptoitem">
					<CryptoCardSmall logo={'/eth.svg'} titulo={'Ethereum'} ticker={props.moedas.eth.ticker} />
				</div>

				<div className="cryptoitem">
					<CryptoCardSmall logo={'/ltc.svg'} titulo={'Litecoin'} ticker={props.moedas.ltc.ticker} />
				</div>
				<div className="cryptoitem">
					<CryptoCard logo={'/mco.svg'} titulo={'Moss Carbon Credit'} ticker={props.moedas.mco.ticker} />
				</div>
				<div className="cryptoitem">
					<CryptoCard logo={'/link.svg'} titulo={'Chainlink'} ticker={props.moedas.link.ticker} />
				</div>
			</div>
		</>
	);
}
