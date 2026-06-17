/* ÍCONES */
import { ChevronDown } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeRightItem } from "@/lib/animation"

/* COMPONENTES */
import SectionHeader from "@/components/sections/SectionHeader"
import CollageTrio from "@/components/collages/CollageTrio"
import CollageQuad from "@/components/collages/CollageQuad"
import CollageHexa from "@/components/collages/CollageHexa"

type HistoryBlockProps = {
  title: string;
  paragraphs: string[];
  reverse?: boolean;
  children: React.ReactNode;
}

function HistoryBlock({ title, paragraphs, reverse = false, children }: HistoryBlockProps) {
  const item = reverse ? fadeRightItem : fadeLeftItem

  return (
    <motion.div
      className="historyBlock grid md:grid-cols-2 gap-10 items-center"
      variants={motionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={`historyBlock__media ${reverse ? "md:order-2" : "md:order-1"}`}>
        {children}
      </div>

      <article className={`historyBlock__content flex flex-col gap-4 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <motion.h3 className="historyBlock__title text-2xl/[110%] font-bold text-ds-blue-130" variants={item}>
          {title}
        </motion.h3>
        {paragraphs.map((paragraph, index) => (
          <motion.p key={index} className="historyBlock__text text-sm/[150%] lg:text-base/[150%] text-ds-neutral-500" variants={item}>
            {paragraph}
          </motion.p>
        ))}
      </article>
    </motion.div>
  )
}

function History() {
  return (
    <div className="history__background background-section py-16 bg-ds-yellow-5">
      <section className="history w-full max-w-[1280px] flex flex-col gap-20" aria-labelledby="history-title">
        <div className="history__intro flex flex-col items-center gap-3">
          <SectionHeader badge="Trajetória" id="history-title" align="center" orchestrate={true}>
            Nossa <em className="text-ds-blue-60">História</em>
          </SectionHeader>
          <ChevronDown size={32} className="text-ds-blue-100" aria-hidden="true" />
        </div>

        {/* PRÉ EDUCA DRONES */}
        <HistoryBlock
          title="Pré Educa Drones"
          paragraphs={[
            "Embora o projeto como é hoje tenha nascido apenas em 2023 no Instituto Federal de Educação, Ciência e Tecnologia Baiano — campus Guanambi, ele surgiu através da paixão por aeromodelos do professor Dr. Leandro dos Santos, que utilizava a aplicação de drones como material didático para alguns dos alunos do curso de agronomia desde meados de 2013.",
            "Foi apenas em 2018 que foram criadas no instituto duas equipes de drones, a Drones Guanambi e a IF Copter, lideradas respectivamente pelos professores Dr. Leandro e Dr. Fábio Lima para participar da competição nacional Fórmula Drone, organizada pela Sociedade de Engenheiros da Mobilidade (SAE Brasil). As equipes participaram também em 2019, porém o evento foi descontinuado devido à pandemia de covid-19 em 2020 e as equipes foram desfeitas.",
          ]}
        >
          <CollageTrio
            className="max-w-lg"
            image01={{ src: "https://picsum.photos/seed/pre1/600/600", alt: "Equipe reunida durante a Fórmula Drone" }}
            image02={{ src: "https://picsum.photos/seed/pre2/400/600", alt: "Professor pilotando um aeromodelo" }}
            image03={{ src: "https://picsum.photos/seed/pre3/600/400", alt: "Montagem de drone no laboratório" }}
          />
        </HistoryBlock>

        {/* O INÍCIO */}
        <HistoryBlock
          title="O Início"
          reverse
          paragraphs={[
            "Em 2023, pós pandemia, surgiu a oportunidade de participação na competição Drones IFSC no Instituto Federal de Santa Catarina — campus Florianópolis, o que incentivou os professores Leandro e Fábio a reativarem as antigas equipes. Junto a elas foi criada a equipe Carcará, liderada pelo professor Dr. Reinaldo Cotrim, para que todos os alunos interessados tivessem a oportunidade de participar — ali também se iniciou o projeto Educa Drones. Como resultado, as equipes Drones Guanambi, IF Copter e Carcará trouxeram respectivamente o 1º, 2º e 4º lugar.",
            "Naquele ano o projeto também teve a oportunidade de participar da Mostra Nacional de Robótica com o projeto Drone Modular para Robótica Educacional e Competições Estudantis, que agora em estágio avançado gerou a primeira bolsa de Iniciação Científica Jr. do CNPq para o projeto.",
          ]}
        >
          <CollageTrio
            className="max-w-lg"
            image01={{ src: "https://picsum.photos/seed/inicio1/600/600", alt: "Oficina de drones no IFSC 2023" }}
            image02={{ src: "https://picsum.photos/seed/inicio2/400/600", alt: "Apresentação na Mostra Nacional de Robótica" }}
            image03={{ src: "https://picsum.photos/seed/inicio3/600/400", alt: "Equipe na pista de competição" }}
          />
        </HistoryBlock>

        {/* EXPANSÃO PEDAGÓGICA */}
        <HistoryBlock
          title="Expansão Pedagógica"
          paragraphs={[
            "Após muita dedicação desenvolvendo drones com foco em competições, os professores e jovens pesquisadores perceberam o quanto essas aeronaves despertavam o interesse dos estudantes, e resolveram ampliar seu uso também com foco no ensino. Em sala de aula, os drones passaram a ser usados como ferramenta didática, apoiados por metodologias ativas que potencializam o aprendizado — como no curso \"Drones, Dinâmica de Voo e o Mundo do Trabalho\", ministrado pelo professor Elcival Chagas do Nascimento.",
            "A partir de observações e cálculos, os participantes colocam em prática conceitos da física de forma dinâmica. O uso pedagógico dos drones também acontece em feiras, mostras, workshops e treinamentos, em sua maioria conduzidos pelos próprios alunos, como uma forma de aprendizado mútuo. Iniciativas como essa incentivam os jovens a seguirem os estudos nas áreas das ciências exatas e naturais.",
          ]}
        >
          <CollageHexa
            className="max-w-lg"
            image01={{ src: "https://picsum.photos/seed/expansao1/600/400", alt: "Mostra Científica de Drones em Alagoinhas" }}
            image02={{ src: "https://picsum.photos/seed/expansao2/600/400", alt: "Missão outdoor no IMAV" }}
            image03={{ src: "https://picsum.photos/seed/expansao3/640/400", alt: "Voo do Colibri durante o IMAV" }}
            image04={{ src: "https://picsum.photos/seed/expansao4/600/400", alt: "Treinamento em Petrolina" }}
            image05={{ src: "https://picsum.photos/seed/expansao5/600/400", alt: "Competição Drones IFSC 2024" }}
            image06={{ src: "https://picsum.photos/seed/expansao6/400/400", alt: "Logo da linha de drones Colibri" }}
          />
        </HistoryBlock>

        {/* 2024 — UM ANO DE CONQUISTAS */}
        <HistoryBlock
          title="2024, Um Ano de Conquistas"
          reverse
          paragraphs={[
            "O ano de 2024 foi o mais marcante e produtivo. O engajamento da equipe proporcionou a aprovação do projeto de monitoramento de plantas daninhas no PIBIC do IF Baiano. Foram ofertados três cursos pelo Programa de Treinamento Educa Drones, nas cidades de Petrolina-PE, Alagoinhas-BA e Catu-BA. Os estudantes participaram de eventos como o IV CONPEX, a II Tenda da Ciência, a VI SNCT e o XV International Micro Air Vehicle Conference and Competition, em Bristol, Inglaterra.",
            "A participação resultou na publicação de quatro trabalhos científicos. A linha de drones Colibri foi ampliada com o novo modelo \"Colibri Mini\", e a equipe Carcará conquistou o 3º lugar na competição Drones IFSC, realizada em Criciúma-SC. Realmente foi muita coisa em um mesmo ano!",
          ]}
        >
          <CollageQuad
            className="max-w-lg"
            image01={{ src: "https://picsum.photos/seed/ano2024a/400/400", alt: "Logo Colibri" }}
            image02={{ src: "https://picsum.photos/seed/ano2024b/600/400", alt: "Competição IMAV em Bristol" }}
            image03={{ src: "https://picsum.photos/seed/ano2024c/600/400", alt: "Curso do Programa de Treinamento" }}
            image04={{ src: "https://picsum.photos/seed/ano2024d/600/400", alt: "Equipe no pódio do Drones IFSC" }}
          />
        </HistoryBlock>

        {/* 2025 — OBADRONES */}
        <HistoryBlock
          title="2025 e a Olimpíada Baiana de Drones"
          paragraphs={[
            "2025 começou inspirado, com a criação de um novo modelo: o Colibri Micro. O primeiro evento do ano foi a 1st Brazilian Conference on Robotics, em Belo Horizonte, com a apresentação do trabalho \"Development and Application of Drones in Education\". Na Tenda da Ciência 2025, o trabalho \"Drone Colibri: Kit para Robótica Educacional\" foi condecorado com o Prêmio de Divulgação Científica, e dois trabalhos foram selecionados para a Mostra Nacional de Robótica.",
            "O projeto \"I Olimpíada Baiana de Drones\" (OBADRONES) foi aprovado no edital Popciências da FAPESB, e o IF Baiano será palco do maior evento de drones da Bahia, de 21 a 23 de agosto. A OBADRONES é uma competição educacional experimental que promove a popularização de tecnologias de drones e o desenvolvimento de habilidades STEAM em alunos e professores. E não para por aí — até dezembro, muitos drones ainda irão voar!",
          ]}
        >
          <CollageQuad
            className="max-w-lg"
            image01={{ src: "https://picsum.photos/seed/ano2025a/400/400", alt: "Logo Colibri Micro" }}
            image02={{ src: "https://picsum.photos/seed/ano2025b/600/400", alt: "Provas técnicas da OBaDrones" }}
            image03={{ src: "https://picsum.photos/seed/ano2025c/600/400", alt: "Apresentação na Brazilian Conference on Robotics" }}
            image04={{ src: "https://picsum.photos/seed/ano2025d/600/400", alt: "Drones em campo durante a competição" }}
          />
        </HistoryBlock>
      </section>
    </div>
  )
}

export default History
