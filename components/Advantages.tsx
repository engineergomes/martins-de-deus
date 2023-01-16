import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandshake,
    faRunning,
    faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import AdvantageCard from "./AdvantageCard";

function Advantages() {
    return (
        <>
            <div className="flex flex-col lg:flex-row max-w-[1360px] mx-auto justify-around gap-10 px-5 pt-6">
                <AdvantageCard
                    icon={faHandshake}
                    title={"Mediação"}
                    text={
                        "Empenho máximo em resolver o seu problema através da mediação, da maneira mais segura para você."
                    }
                />

                <div className="lg:mr-6">
                    <AdvantageCard
                        icon={faRunning}
                        title={"Sigilo e rapidez"}
                        text={
                            "Garantia de sigilo e discrição na resolução do seu caso, com as medidas mais eficazes e ágeis para você."
                        }
                    />
                </div>

                <AdvantageCard
                    icon={faChalkboardTeacher}
                    title={"Acesso à íntegra"}
                    text={
                        "Você terá acesso a todas as cópias das peças relacionadas ao seu caso, com total transparência."
                    }
                />
            </div>
        </>
    );
}
export default Advantages;
