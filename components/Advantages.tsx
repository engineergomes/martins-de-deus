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
            <div className="flex max-w-[1360px] mx-auto justify-around">
                <AdvantageCard
                    icon={faHandshake}
                    title={"Mediação"}
                    text={
                        "Empenho máximo em resolver o seu problema através da mediação, da maneira mais segura para você."
                    }
                />

                <AdvantageCard
                    icon={faRunning}
                    title={"Sigilo e rapidez"}
                    text={
                        "Garantia de sigilo e discrição na resolução do seu caso, com as medidas mais eficazes e ágeis para você."
                    }
                />

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
