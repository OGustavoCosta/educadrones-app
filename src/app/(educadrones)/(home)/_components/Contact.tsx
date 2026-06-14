/* ÍCONES */
import { ArrowRight } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem } from "@/lib/animation"

/* COMPONENTES */
import SectionHeader from "@/components/sections/SectionHeader"

function Contact() {
  const labelClasses = "contact__label text-sm/[125%] font-medium text-ds-neutral-500"
  const inputClasses = "contact__input w-full px-4 py-3 rounded-md bg-ds-neutral-50 border border-ds-neutral-200/50 text-sm/[125%] text-ds-neutral-400 placeholder:text-ds-neutral-300 focus:outline-none focus:border-ds-blue-100 transition-colors"

  return (
    <div className="contact__background background-section py-16">
      <section className="contact w-full max-w-[1280px] grid md:grid-cols-2 gap-10 items-center" aria-labelledby="contact-title">

        <motion.div
          className="contact__content flex flex-col gap-5"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact__header flex flex-col gap-3 text-ds-neutral-500 text-sm/[150%] lg:text-base/[150%]">
            <SectionHeader badge="Participe" id="contact-title" className="max-w-100">
              Pronto para levar o futuro à <em className="text-ds-blue-60">sua escola?</em>
            </SectionHeader>

            <motion.p variants={fadeLeftItem}>Entre em contato com nossa equipe. Apresentamos o projeto, alinhamos as possibilidades e iniciamos o planejamento do treinamento — sem burocracia.</motion.p>
          </motion.div>

          <motion.div className="contact__card w-full flex flex-col gap-4 p-6 bg-ds-neutral-0 rounded-lg border border-ds-neutral-200/50" variants={fadeLeftItem} aria-label="O que acontece depois">
            <h3 className="contact__title text-sm/[125%] text-ds-blue-130 uppercase font-semibold">O que acontece depois:</h3>

            <ol className="contact__list list-decimal list-outside pl-4 space-y-2 marker:text-ds-blue-130 marker:font-bold">
              <li className="contact__item text-sm/[125%] text-ds-neutral-400">Nossa equipe entra em contato em até 2 dias úteis</li>
              <li className="contact__item text-sm/[125%] text-ds-neutral-400">Apresentamos o projeto e tiramos dúvidas</li>
              <li className="contact__item text-sm/[125%] text-ds-neutral-400">Planejamos juntos o treinamento e a formação da equipe</li>
            </ol>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact__wrapper flex flex-col gap-5"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.form
            className="contact__form w-full flex flex-col gap-5 p-6 sm:p-8 bg-ds-neutral-0 rounded-lg border border-ds-neutral-200/50"
            variants={fadeLeftItem}
            aria-labelledby="contact-form-title"
          >
            <div className="contact__formHeader flex flex-col gap-1">
              <h3 id="contact-form-title" className="contact__formTitle text-lg/[125%] font-bold text-ds-blue-130">
                Quero o Educa Drones na minha escola
              </h3>
              <p className="contact__formSubtitle text-sm/[125%] text-ds-neutral-350">
                Preencha e entraremos em contato
              </p>
            </div>

            <div className="contact__field flex flex-col gap-1.5">
              <label htmlFor="contact-name" className={labelClasses}>Seu nome</label>
              <input id="contact-name" name="name" type="text" placeholder="Prof. João Silva" className={inputClasses} required />
            </div>

            <div className="contact__row grid grid-cols-1 xs:grid-cols-2 gap-4">
              <div className="contact__field flex flex-col gap-1.5">
                <label htmlFor="contact-email" className={labelClasses}>E-mail</label>
                <input id="contact-email" name="email" type="email" placeholder="exemplo@email.com" className={inputClasses} required />
              </div>
              <div className="contact__field flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className={labelClasses}>Telefone / WhatsApp</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="(77) 9 9999-9999" className={inputClasses} />
              </div>
            </div>

            <div className="contact__field flex flex-col gap-1.5">
              <label htmlFor="contact-institution" className={labelClasses}>Instituição</label>
              <input id="contact-institution" name="institution" type="text" placeholder="IF Baiano - Campus..." className={inputClasses} />
            </div>

            <div className="contact__field flex flex-col gap-1.5">
              <label htmlFor="contact-city" className={labelClasses}>Cidade / Estado</label>
              <input id="contact-city" name="city" type="text" placeholder="Guanambi, BA" className={inputClasses} />
            </div>

            <button
              type="submit"
              className="contact__submit self-start flex items-center gap-2 text-sm/[100%] px-8 py-4 rounded-sm font-semibold cursor-pointer transition hover:-translate-y-px active:scale-95 text-ds-yellow-10 bg-ds-blue-100 hover:bg-ds-blue-60"
            >
              Enviar solicitação
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </button>

            <p className="contact__formFooter text-[0.75rem]/[150%] text-ds-neutral-350 text-center">
              Ou fale direto pelo <a href="mailto:contato.educadrones@gmail.com" className="text-ds-blue-100 font-semibold">e-mail</a> ou <a href="https://wa.me/557799999999" target="_blank" rel="noopener noreferrer" className="text-ds-blue-100 font-semibold">whatsApp</a> — respondemos em até 2 dias úteis.
            </p>
          </motion.form>
        </motion.div>

      </section>
    </div>
  )
}

export default Contact
