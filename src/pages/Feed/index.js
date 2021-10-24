import React from "react";
import { Link } from "react-router-dom";

import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import Publication from "../../components/Publication/Publication";
import Description from "../../components/Description/Description";

import imgLogo from "../../assets/Logo.png";
import imgBack from "../../assets/teste.png";

import "./styles.css";

export default function Feed() {
  const Posts = [
    {
      title: "Live Jorge e Mateus",
      description:
        "Uma live de quarentena da dupla sertaneja Jorge e Mateus, o show intitulado 'Na garagem' será exibido no dia 04/04/2020.",
      img_url:
        "https://s2.glbimg.com/MyTFljEzzkci5bzZqldn_PDTnZs=/0x0:847x441/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/L/x/2dVOkbRoAoA3hCAWJOsA/jorgeemateus-live.jpg",
      content_url:
        "https://g1.globo.com/pop-arte/musica/noticia/2020/04/05/jorge-e-mateus-fazem-live-com-mais-de-4-horas-de-duracao-foto-com-aglomeracao-nos-bastidores-chama-a-atencao.ghtml",
    },

    {
      title: "SAE Digital disponibiliza aulas de ensino fundamental e médio",
      description:
        " A SAE Digital disponibilizou uma solução completa de ensino a distância, composta por videoaulas, roteiros de atividades e ferramentas digitais de ensino e aprendizagem com os conteúdos previstos pela Base Nacional Comum Curricular (BNCC) e matriz do Exame Nacional do Ensino Médio (Enem).",
      img_url:
        "https://hacktoberfest.digitalocean.com/_nuxt/img/logo-hacktoberfest-full.f42e3b1.svg",
      content_url:
        "https://www.msn.com/pt-br/noticias/educacao/sae-digital-disponibiliza-aulas-online-do-ensino-fundamental-e-m%c3%a9dio/ar-BB128YwQ",
    },

    {
      title:
        "Nutricionistas dão dicas de como manter alimentação saudável na quarentena",
      description:
        "Alimentação, corpo, emoções e mente equilibrados. Esse é o “cardápio” sugerido por especialistas para enfrentar o período de quarentena. Com o isolamento domiciliar, sentimentos como a ansiedade podem acabar sendo descontados na comida e contrariar uma alimentação saudável. A reportagem conversou com especialistas que prepararam um “guia” para os próximos dias em casa.",
      img_url:
        "https://www.otempo.com.br/image/contentid/policy:1.2319799:1585826885/WhatsApp%20Image%202020-04-02%20at%2008.23.25.jpeg?f=3x2&w=930&$p$f$w=8f906e8",
      content_url:
        "https://www.otempo.com.br/interessa/saude-e-ciencia/nutricionistas-dao-dicas-de-como-manter-alimentacao-saudavel-na-quarentena-1.2319791",
    },

    {
      title:
        "O que fazer durante a quarentena? Dez atividades online para se distrair",
      description:
        "A quarentena do coronavírus, período de reclusão recomendado pelos órgãos de saúde, está deixando adultos e crianças longe de seus afazeres por tempo indeterminado, até que o avanço da Covid-19 seja controlada. Para ocupar o tempo livre durante os dias de pandemia, é possível aproveitar soluções online que vão garantir entretenimento e, em alguns casos, conhecimento. Grandes empresas disponibilizaram cursos grátis, filmes e séries em streaming foram liberados sem custo e museus de vários países estão oferecendo visitas virtuais pelo computador especialmente para a temporada de isolamento.",
      img_url:
        "https://s2.glbimg.com/YQq91MBPVabpSNvKhQvKvJDZfLw=/0x0:695x353/1000x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2015/07/16/netflixm.jpg",
      content_url:
        "https://www.techtudo.com.br/listas/2020/03/o-que-fazer-durante-a-quarentena-dez-atividades-online-para-se-distrair.ghtml",
    },

    {
      title:
        "Vacina Covid-19: Triângulo, Alto Paranaíba e Noroeste de MG recebem mais de 24 mil doses da AstraZeneca em parte do 60º lote",
      description:
        "As regiões do Triângulo Mineiro, Alto Paranaíba e Noroeste de Minas Gerais estão recebendo mais 24.615 doses de vacina para a aplicação contra a Covid-19. Os imunizantes são parte do 60º lote do Ministério da Saúde para o Estado, que realiza a distribuição às 28 Unidades Regionais de Saúde (URS) desde quinta-feira (21). Ao todo, são 183 mil doses distribuídas para todo Estado. Na nova remessa, não há vacinas da CoronaVac e Pfizer.",
      img_url:
        "https://s2.glbimg.com/YjFdcOdfwMLNr8e2erdD2dfIh_8=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/0/P/MbwAXYSFKslFxeSiKyhg/whatsapp-image-2021-09-28-at-14.39.06.jpeg",
      content_url:
        "https://g1.globo.com/mg/triangulo-mineiro/noticia/2021/10/23/vacina-covid-19-triangulo-alto-paranaiba-e-noroeste-de-mg-recebem-mais-de-24-mil-doses-da-astrazeneca-em-parte-do-60o-lote.ghtml",
    },

    {
      title: "Quarentena: como manter a saúde mental em dia?",
      description:
        "Este artigo tem como objetivo ser um abraço cuidadoso em todos que já estão em casa, em quarentena, se isolando e cuidado de si para cuidar dos outros também. Vamos falar sobre o momento pelo qual o Brasil está passando e dar dicas valiosas sobre como preservar a sua saúde mental!",
      img_url: "https://www.vittude.com/blog/wp-content/uploads/Quarentena.jpg",
      content_url:
        "https://www.vittude.com/blog/quarentena-como-manter-a-saude-mental/",
    },
  ];
  return (
    <div className="feed-container">
      <Aside>
        <img src={imgLogo} alt="Be Home" width="200px" />
        <h3>Lucas Cardoso</h3>
        <h4>Seu Id:</h4>
        <h4>66609333</h4>
        <Link to="/mypublications">Minhas publicações</Link>
        <p>Categorias:</p>

        <Button background="#FF7B7B">Todas</Button>
        <Button background="#28B95A">Saúde</Button>
        <Button background="#D93453">Ajuda</Button>
        <Button background="#7B80FF">Entretenimento</Button>
        <Button background="#CCC13C">Educação</Button>
        <button className="sair">Sair</button>
      </Aside>
      {Posts.map((info) => (
        <Publication className="publication">
          <img id="imgback" src={info.img_url} alt="ImageMusic" />
          <div className="buttons">
            <Button background="#CCC13C">Educação</Button>
            <Button background="#7B80FF">Musica</Button>
          </div>

          <Description>
            <h2 className="back-white">{info.title}</h2>
            <p className="back-white">{info.description}</p>
            <a className="acessar" href={info.content_url}>
              <button className="acessar" background="#FF7B7B">
                Acessar
              </button>
            </a>
          </Description>
        </Publication>
      ))}
    </div>
  );
}
