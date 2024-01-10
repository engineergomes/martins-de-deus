import { NextPage } from "next";
import Head from "next/head";
import { lawyers } from "../components/Configs/LawyersInfo";
import Lawyer from "../components/Lawyer";

const Team: NextPage = () => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta
					name="description"
					content="Deus e Aguiar Advocacia atuam nas áreas de família, cível, criminal, imobiliária e empresarial, entrega segurança jurídica em todas as demandas judiciais e extrajudiciais dos clientes."
				/>
				<title>Martins de Deus | Equipe</title>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="icon" href="/favicon.ico" />

				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<div
				className="flex flex-col gap-12 py-16 px-5 bg-[#B6BBB9] -mt-3"
				style={{ backgroundImage: `url('./bg-effect-gray.png')` }}
			>
				{lawyers.map((lawyer) => (
					<Lawyer
						key={lawyer.name}
						name={lawyer.name}
						oab={lawyer.oab}
						imgSrc={lawyer.imgSrc}
						graduation={lawyer.graduation}
						pos={lawyer.pos}
						about={lawyer.about}
					/>
				))}
			</div>
		</>
	);
};

export default Team;
