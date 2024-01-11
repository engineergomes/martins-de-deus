import GoogleReviewCard, { Review } from "./GoogleReviewCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { useWindow } from "./hooks/useWindow";

const GoogleReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      author_name: "Henrique Marcela",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjX8DC4XBFCcDf1P7EhdBtICgi1Q4aeL-ZXcPa8-098BqA=w60-h60-p-rp-mo-br100",
      rating: 5,
      text: `Profissional incrível, capacitação e atendimento com nível de excelência.
      Melhor Fonoaudióloga que conheço em Jaraguá do Sul e região.
      Atendimento humanizado e com muito amor.
      Parabéns Fono Ana Lígia 👏🏼`,
      href: "https://g.co/kgs/CMqc7R",
    },
    {
      author_name: "Mariluze Soares",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/ACg8ocK7FmfsqBwVRXHX4OupT00u3aVhWTFoWG5z6j-_S8Li=w120-h120-p-rp-mo-br100",
      rating: 5,
      text: `Estou muito satisfeita com o atendimento da Ana. Ela é super profissional e sempre disponível para tirar nossas dúvidas. Em apenas 6 meses, já vemos uma grande melhora na fala do Rafa. Além disso, essa evolução tem ajudado significativamente na sua timidez, ele tem sido mais confiante e comunicativo. Ele adora as consultas com a Ana, e isso para mim é o melhor sinal de que estamos no caminho certo. Recomendo fortemente!`,
      href: "https://g.co/kgs/CMqc7R",
    },
    {
      author_name: "Sidnei Gomes",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjW3gc5RzSIXs3-uRftEGAYlk-uVjmWdD1VzugU9SGFyoPBX=w120-h120-p-rp-mo-br100",
      rating: 5,
      text: `Ana , certa vez a família lhe fez uma consulta sobre uma criança da família, se a mesma era autista, como analisar através da fala, se a repetição  constante das frases, a sua reposta foi que uma equipe multidisciplinar deveria avaliar e diagnosticar, assim fizemos, a sua análise foi perfeita, hoje sabemos como trabalhar o desenvolvimento dessa criança através do seu parecer, muito obrigado!`,
      href: "https://g.co/kgs/QV1bNC",
    },
    {
      author_name: "Thais Moreira",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjU7VP7I6lZXsGTE5aQTJlhugQHdqzoK1p3RR98EKrym3dA=w60-h60-p-rp-mo-br100",
      rating: 5,
      text: `Uma ótima profissional, foi o que fez toda a diferença no desenvolvimento do meu sobrinho! Muito atenciosa aos detalhes e na maneira de passar as informações e exercícios tanto para as crianças quanto para os pais!`,
      href: "https://g.co/kgs/CMqc7R",
    },
    // ... mais avaliações
  ];

  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return `<span class=${className}>  ${index + 1}  </span>`;
  //   },
  // };

  const { isMobile } = useWindow();
  return (
    <div className="text-black w-full m-auto bg-[#282828] flex  justify-center">
      <Swiper
        slidesPerView={isMobile ? 1.2 : 3.2}
        spaceBetween={isMobile ? 20 : 30}
        className="mySwiper z-[4]"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.href} className="rounded-lg">
            <GoogleReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GoogleReviews;
