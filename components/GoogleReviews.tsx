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
      author_name: "Ádamy",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjX1ryLS5k5IRzOHpyylekfummB0G4RvOsiwfuAzHZQAQ42B=w60-h60-p-rp-mo-br100",
      rating: 5,
      text: `Indico a Manuela e sua equipe de olhos fechados! Extremamente justa, empática, engajada, comprometida, acolhedora e ética! Fui orientada com clareza e respondida imediatamente em todas as vezes que precisei de seus serviços.`,
      href: "https://maps.app.goo.gl/STeJqi1ifzUYSW1y5",
    },
    {
      author_name: "Vanessa Silva",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjV4xW0yvMLN4LSDaviyW_MlQ-t3W_1xc06MgNQKEqKROsY=w60-h60-p-rp-mo-br100",
      rating: 5,
      text: `Profissional excelente! Atenciosa, competente e que presta uma serviço excepcional. Recomendo muito!`,
      href: "https://maps.app.goo.gl/8oL7s2am8SuhfQz37",
    },
    {
      author_name: "Ana Carolina Macedo Lübcke",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXLRm3HxwDNfLx0Zmf2wkNdlhWV1sAcAKePdsP5OZEmghB0=w60-h60-p-rp-mo-br100",
      rating: 5,
      text: `Profissionais extremamente qualificados e com o diferencial de serem empáticos! Eu confio e recomendo 100%!`,
      href: "https://maps.app.goo.gl/yg11pPXzLz2hH2P39",
    },
    {
      author_name: "Adriano Melo",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjWQ1FzobmOnGZ0gUq0x1s9uT-RsTkNK8knCPNEk-hJOdQ=w36-h36-p-rp-mo-ba5-br100",
      rating: 5,
      text: `Atendimento personalizado e profissionais extremamente compromissados e muito competentes com tudo que se propõem em fazer.
      Esse local eu recomendo.`,
      href: "https://maps.app.goo.gl/yijCVjjohuGRRhbD6",
    },
    {
      author_name: "Mateus Edson",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXdT-7mCQuP_ah0DGeJTtEMP6KbOzKJw40Ujgx0dVYsygg=w36-h36-p-rp-mo-br100",
      rating: 5,
      text: `Atendimento profissional, preocupação com meu caso e me aconselhando sempre oque seria melhor pra mim mentalmente e financeiramente, indico!!`,
      href: "https://maps.app.goo.gl/yjL9HVKWMAAC7uxQ7",
    },
    {
      author_name: "Beatriz Nunes",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjU99cs_bkCsEuQfVKo1QwQJAT5b8SEUZ0TKqOrLsSzkPFLy=w36-h36-p-rp-mo-ba2-br100",
      rating: 5,
      text: `Dra Manuela é uma excelente advogada. Me deixou segura durante todo o processo, sempre com muita clareza dos passos, das possibilidades e se dedicando com muita atenção e presteza. Fiquei extremamente satisfeita com seu trabalho e com o resultado que obtivemos. Recomendo seus serviços advocatícios e de consultoria jurídica.`,
      href: "https://maps.app.goo.gl/h8FHRtRjxrRNmNy18",
    },
    {
      author_name: "Irani Silvestre",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjURai0YcVCxCPxhci0cPcXBXKrkX40iBnC0ouQ3azwy6a3d=w36-h36-p-rp-mo-ba2-br100",
      rating: 5,
      text: `A Dra. Manuela e sua equipe são maravilhosos! Atendimento ímpar com profissionalismo e atenção aos detalhes! Me sinto segura e muito bem representada!`,
      href: "https://maps.app.goo.gl/fXEdzYsdTmaAyR4F6",
    },
    {
      author_name: "Luis Antônio",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/ACg8ocK-hz693sCtwddE_efaybWc4U5fE1Vx2NHOdBldQjGO=w36-h36-p-rp-mo-br100",
      rating: 5,
      text: `Um dos melhores escritórios de advocacia, educação, compreensão. E sempre estão disponíveis para esclarecer dúvidas.`,
      href: "https://maps.app.goo.gl/Z5dAgvURmXrcZCrJ9",
    },
    {
      author_name: "Crissula Karagiannis",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/ACg8ocIELUYYs0cyCLGeDloptW2qlbrPTz8-hLVlwtJ0aNI=w36-h36-p-rp-mo-br100",
      rating: 5,
      text: `Procurei os serviços por indicação e durante todo esse período fui respondida imediatamente, sanaram todas as minhas dúvidas, facilitaram o pagamento de todo processo e além de tudo, conseguiram resolver meu problema em menos de seis meses. O empenho dos profissionais foi nota 10 , indico e agradeço a advogada Manuela Martins para amigos e parentes.`,
      href: "https://maps.app.goo.gl/oaESDoNUuBfaytUp9",
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
