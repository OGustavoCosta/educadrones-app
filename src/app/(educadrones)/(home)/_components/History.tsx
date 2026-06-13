/* ÍCONES */
import { ArrowUpRight, Clock, Home, Star } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeUpItem, fadeRightItem } from "@/lib/animation"

/* COMPONENTES */
import Button from "@/components/buttons/ButtonDefault"
import CollageQuad from "@/components/collages/CollageQuad"
import SectionHeader from "@/components/sections/SectionHeader"
import AchievementCard from "@/components/cards/AchievementCard"

type Achievement = {
  id: number;
  image: string;
  title: string;
  text: string;
  year: string;
}

function History(){
  const achievementData: Achievement[] = [
    {
      id: 1,
      image: "https://picsum.photos/seed/cnpq/100/100",
      title: "Primeira bolsa IC Jr. do CNPq",
      text: "Projeto Drone Modular reconhecido com iniciação científica júnior pela Mostra Nacional de Robótica (MNR).",
      year: "2023",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/ifsc/100/100",
      title: "1º lugar — Drones IFSC 2023",
      text: "Equipe Drones Guanambi conquista o topo em Florianópolis-SC",
      year: "2023",
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/educadrones/100/100",
      title: "X publicações científicas",
      text: "Em congressos nacionais e internacionais — incluindo Bristol, UK",
      year: "2023 - 2026",
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/tenda/100/100",
      title: "Prêmio de Divulgação Científica",
      text: "Tenda da Ciência 2025 · Trabalho \"Drone Colibri: Kit para Robótica Educacional\"",
      year: "2025",
    },
  ]

  return(
    <div className="history__background background-section py-16">
      <section className="history w-full max-w-[1440px] flex flex-col gap-16 items-center" aria-labelledby="history-title">
        <SectionHeader badge="Histórico" id="history-title" align="center">
          Conquistas que falam por <em className="text-ds-blue-60">Si</em>
        </SectionHeader>

        <motion.div 
          className="history__content flex flex-col gap-5 w-full"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="history__wrapper flex gap-6">
            <div className="history__col flex-3 flex flex-col gap-6">
              {/* CARDS PEQUENOS */}
              <div className="history__wrapper flex flex-wrap gap-6">
                {achievementData.map((achievement) => (
                  <AchievementCard key={achievement.id} {...achievement} className="sm:basis-xs"/>
                ))}
              </div>

              {/* CARD DA CROS */}
              <article className="historyCard relative flex flex-col gap-4 sm:p-4 md:p-8 lg:p-10 gap- rounded-2xl border border-ds-neutral-200/50 bg-ds-neutral-50 flex-1 hover:scale-101 transition-transform overflow-hidden" aria-label="obadrones-title">
                <motion.div className="historyCard__header flex flex-col gap-1 w-full">
                  <motion.h2
                    id="obadrones-title"
                    className="historyCard__title text-base/[120%] font-semibold text-ds-neutral-400"
                    variants={fadeLeftItem}
                  >
                    Participação na 1ª e 2ª Brazilian Conference on Robotics  (CROS)
                  </motion.h2>
                  <motion.p
                    className="historyCard__year text-[0.75rem]/[120%] text-ds-neutral-350 block"
                    variants={fadeLeftItem}
                  >
                    2025 e 2026
                  </motion.p>
                </motion.div>

                <div className="historyCard__wrapper flex items-start gap-6">
                  <div className="historyCard__content flex flex-col gap-6 w-full">
                    <div className="historyCard__textWrapper flex flex-col gap-2 text-[0.75rem] text-ds-neutral-350">
                      <p className="historyCard__text">O Educa Drones marcou presença nas duas primeiras edições da Brazilian Conference on Robotics (CROS), o principal congresso de robótica do Brasil, promovido pela Sociedade Brasileira de Robótica.</p>
                      <p className="historyCard__text">Em 2025, na edição inaugural realizada em Belo Horizonte-MG, o projeto apresentou o trabalho "Development of Drones and Their Integration into Educational Robotics" — consolidando sua presença na pesquisa científica nacional em robótica educacional.</p>
                      <p className="historyCard__text">Em 2026, na segunda edição sediada em João Pessoa-PB, o Educa Drones volta a apresentar novos avanços com o trabalho "Seed Dispenser for Reforestation with Drones".</p>
                    </div>

                    <div className="historyCard__wrapper flex gap-4">
                      <motion.div
                        className="about__figure w-full max-w-36 hover:scale-101 transition-transform z-2"
                        variants={fadeRightItem}
                      >
                        <img className="" src={"https://picsum.photos/seed/drones1/150/60"} alt={"Aluna da educa drones na cros 2026 - João Pessoa - Paraíba"}/>
                      </motion.div>
                      
                      <motion.div
                        className="about__figure w-full max-w-36 hover:scale-101 transition-transform z-2"
                        variants={fadeRightItem}
                      >
                        <img className="" src={"https://picsum.photos/seed/drones1/150/60"} alt={"Aluna da educa drones na cros 2026 - João Pessoa - Paraíba"}/>
                      </motion.div>
                    </div>
                  </div>
                  <div className="history__wrapper flex justify-center items-center">
                    <motion.div
                      className="about__figure w-full aspect-square rounded-xl overflow-hidden border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
                      variants={fadeRightItem}
                    >
                      <img className="w-full h-full object-cover" src={"https://picsum.photos/seed/drones1/600/600"} alt={"Aluna da educa drones na cros 2026 - João Pessoa - Paraíba"}/>
                    </motion.div>
                  </div>
                </div>
              </article>
            </div>

            <div className="history__col flex-2 flex flex-col gap-6">
              {/* CARD DA IMAV */}
              <article className="historyCard flex flex-col gap-6 p-8 rounded-2xl bg-linear-45 to-ds-blue-100 from-ds-blue-130 text-ds-yellow-5 hover:scale-101 transition-transform" aria-labelledby="imav-title">
                <div className="historyCard__header flex flex-col gap-2">
                  <motion.span
                    className="historyCard__badge text-[0.7rem]/[125%] text-ds-yellow-60 font-semibold tracking-widest uppercase"
                    variants={fadeLeftItem}
                  >
                    Destaque Internacional
                  </motion.span>
                  <motion.h3
                    id="imav-title"
                    className="historyCard__title text-2xl/[110%] font-bold"
                    variants={fadeLeftItem}
                  >
                    Do sertão baiano <br/>à <em className="text-ds-yellow-60">Inglaterra</em>
                  </motion.h3>
                </div>

                <motion.p className="historyCard__text text-sm/[150%] text-ds-blue-10" variants={fadeLeftItem}>
                  Em 2024, alunos do ensino médio e superior do IF Baiano participaram do XV International Micro Air Vehicle Conference and Competition em Bristol, Inglaterra — um dos maiores eventos de drones do mundo.
                </motion.p>

                <motion.div className="historyCard__figure w-full aspect-video rounded-xl overflow-hidden border-4 border-ds-yellow-5" variants={fadeUpItem}>
                  <img className="w-full h-full object-cover" src="https://picsum.photos/seed/imav/600/400" alt="Equipe Educa Drones no IMAV 2024 em Bristol, Inglaterra" />
                </motion.div>

                <motion.div className="historyCard__stats flex border-t border-white/20 pt-4" variants={fadeUpItem}>
                  <div className="historyCard__stat flex-1 flex flex-col gap-1 items-center">
                    <span className="text-xl/[100%] font-bold text-ds-yellow-60">XV</span>
                    <span className="text-[0.7rem]/[120%] text-ds-blue-20">Edição do IMAV</span>
                  </div>
                  <div className="historyCard__stat flex-1 flex flex-col gap-1 items-center border-x border-white/20">
                    <span className="text-xl/[100%]">🇬🇧</span>
                    <span className="text-[0.7rem]/[120%] text-ds-blue-20">Bristol UK</span>
                  </div>
                  <div className="historyCard__stat flex-1 flex flex-col gap-1 items-center">
                    <span className="text-xl/[100%] font-bold text-ds-yellow-60">2024</span>
                    <span className="text-[0.7rem]/[120%] text-ds-blue-20">Ano</span>
                  </div>
                </motion.div>
              </article>

              {/* CARD INSTITUCIONAL */}
              <article className="historyCard flex flex-col gap-4 p-6 rounded-2xl border border-ds-neutral-200/50 bg-ds-neutral-50 hover:scale-101 transition-transform" aria-labelledby="institucional-title">
                <motion.h3
                  id="institucional-title"
                  className="historyCard__title text-[0.7rem]/[120%] text-ds-blue-130 uppercase font-semibold tracking-widest"
                  variants={fadeLeftItem}
                >
                  Apoio Institucional
                </motion.h3>

                <motion.ul className="historyCard__list flex flex-col gap-4" variants={motionContainer}>
                  <motion.li className="historyCard__item flex items-center gap-3" variants={fadeLeftItem}>
                    <div className="historyCard__figure w-6 aspect-square rounded-sm overflow-hidden bg-ds-neutral-100 shrink-0">
                      <img src="https://picsum.photos/seed/ifbaiano/100/100" alt="Logo IF Baiano" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[0.75rem]/[125%] text-ds-neutral-400">IF Baiano — <em>campus</em> Guanambi</p>
                  </motion.li>

                  <motion.li className="historyCard__item flex items-center gap-3" variants={fadeLeftItem}>
                    <div className="historyCard__figure w-6 aspect-square rounded-sm overflow-hidden bg-ds-neutral-100 shrink-0">
                      <img src="https://picsum.photos/seed/cnpq2/100/100" alt="Logo CNPq" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[0.75rem]/[125%] text-ds-neutral-400">CNPQ — Bolsa de IC Júnior</p>
                  </motion.li>

                  <motion.li className="historyCard__item flex items-center gap-3" variants={fadeLeftItem}>
                    <div className="historyCard__figure w-6 aspect-square rounded-sm overflow-hidden bg-ds-neutral-100 shrink-0">
                      <img src="https://picsum.photos/seed/fapesb/100/100" alt="Logo FAPESB" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[0.75rem]/[125%] text-ds-neutral-400">FAPESB — Edital Popciências</p>
                  </motion.li>
                </motion.ul>
              </article>
            </div>
          </div>
          
          {/* CARD DA OBADRONES */}
          <article className="historyCard grid grid-cols-2 gap-16 p-10 rounded-2xl bg-linear-45 to-ds-blue-100 from-ds-blue-130 text-ds-yellow-5 hover:scale-101 transition-transform" aria-label="obadrones-title">
            <div className="historyCard__content flex flex-col gap-6">
              <div className="historyCard__wrapper flex flex-col gap-4">
                <motion.div className="historyCard__header flex flex-col gap-1">
                  <motion.span
                    className="historyCard__badge text-base/[125%] text-ds-yellow-60 font-semibold tracking-wide block"
                    variants={fadeLeftItem}
                  >
                    Evento criado pelo Educa Drones
                  </motion.span>
                  <motion.h3
                    id="obadrones-title"
                    className="historyCard__title text-[2rem]/[110%] sm:text-[1.75rem]/[110%] font-bold"
                    variants={fadeLeftItem}
                  >
                    A maior competição de drones <em className="text-ds-yellow-60">da Bahia</em>
                  </motion.h3>
                </motion.div>

                <p className="historyCard__text text-sm text-ds-blue-10">A OBaDrones foi criada pelo Educa Drones para reunir equipes de robótica aérea de todo o Brasil. Mais do que uma competição — é um festival de tecnologia, com oficinas, palestras e troca de experiências.</p>
              </div>

              <ul className="historyCard__list flex flex-col gap-6">
                <li className="location__item flex items-start gap-2">
                  <span className="historyCard__iconWrapper block border border-current p-2 bg-white/10 rounded-sm" aria-hidden="true">
                    <Star size={18} className=" shrink-0"/>
                  </span>
                  <div className="historyCard__wrapper flex flex-col gap-1">
                    <p className="location__text text-sm/[100%] font-semibold">Provas Técnicas</p>
                    <p className="location__text text-[0.75rem]/[125%] text-ds-blue-20">Problemas do mundo real. Soluções criadas pelos alunos.</p>
                  </div>
                </li>

                <li className="location__item flex items-start gap-2">
                  <span className="historyCard__iconWrapper block border border-current p-2 bg-white/10 rounded-sm" aria-hidden="true">
                    <Clock size={18} className=" shrink-0"/>
                  </span>
                  <div className="historyCard__wrapper flex flex-col gap-1">
                    <p className="location__text text-sm/[100%] font-semibold">Oficinas e workshops</p>
                    <p className="location__text text-[0.75rem]/[125%] text-ds-blue-20">Atividades práticas conduzidas por especialistas em drones</p>
                  </div>
                </li>

                <li className="location__item flex items-start gap-2">
                  <span className="historyCard__iconWrapper block border border-current p-2 bg-white/10 rounded-sm" aria-hidden="true">
                    <Home size={18} className=" shrink-0"/>
                  </span>
                  <div className="historyCard__wrapper flex flex-col gap-1">
                    <p className="location__text text-sm/[100%] font-semibold">Sediada pelo IF Baiano</p>
                    <p className="location__text text-[0.75rem]/[125%] text-ds-blue-20">Aprovada no edital Popciências da FAPESB</p>
                  </div>
                </li>
              </ul>
              <div className="history__buttons flex flex-wrap gap-3">
                <motion.div className="history__wrapper" variants={fadeUpItem}>
                  <Button
                    text="Saiba mais sobre a OBaDrones"
                    link="#"
                    icon={ArrowUpRight}
                    iconPosition="right"
                    color="yellow"
                    variant="solid"
                  />
                </motion.div>
                <motion.div className="history__wrapper" variants={fadeUpItem}>
                  <Button
                    text="Inscrever minha equipe"
                    link="#"
                    icon={ArrowUpRight}
                    iconPosition="right"
                    color="white"
                    variant="outline"
                  />
                </motion.div>
              </div>
            </div>
            <div className="history__wrapper flex justify-center items-center">
              <CollageQuad
                className="max-w-lg" 
                image01={{src: "https://picsum.photos/seed/drones1/600/600" , alt: "Alunos do Educa Drones operando um drone em competição"}} 
                image02={{ src: "https://picsum.photos/seed/drones2/400/600", alt: "Testes de voo pré-competição"}} 
                image03={{ src: "https://picsum.photos/seed/drones3/600/400", alt: "Equipe durante a fórmula drone"}} 
                image04={{ src: "https://picsum.photos/seed/drones4/600/400", alt: "Equipe durante a fórmula drone"}} 
              />
            </div>
          </article>
        </motion.div>
      </section>
    </div>
  )
}

export default History