import CompareSlider from "../components/CompareSlider";
import SiteHeader from "../components/SiteHeader";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { WA, wa } from "../lib/site";

const checks = [
  "Proteção dos forros de porta e das partes internas antes de começar",
  "Limpeza cuidadosa do vidro para evitar poeira e sujeira sob a película",
  "Corte e acabamento conferidos com você na entrega",
  "Orientações de pós-aplicação para a película durar",
];

const faqs = [
  ["Quanto custa?", "O valor muda conforme o veículo, os vidros e o tipo de película. Mande o modelo e o ano do carro pelo WhatsApp e passamos o orçamento. Para casa ou empresa, mande fotos ou as medidas das janelas."],
  ["Quanto tempo leva a aplicação?", "Em um carro completo, em geral algumas horas no mesmo dia. Quando há retirada de película antiga, leva um pouco mais. Em residências e empresas o tempo depende da quantidade de vidros, e combinamos antes."],
  ["Vocês vão até o meu endereço?", "Sim. Atendemos em toda a região metropolitana de Belo Horizonte, em residências e empresas, e também no nosso espaço no bairro Cardoso."],
  ["Posso lavar o carro e abaixar os vidros logo depois?", "Nos primeiros dias, evite abaixar os vidros e lavar o carro por dentro. Na entrega, informamos o prazo certo para a sua película."],
  ["Qual película devo escolher?", "Depende do que você quer resolver: claridade, calor, privacidade ou o conjunto. Explicamos as diferenças e indicamos a melhor opção para o seu caso no atendimento. Também orientamos sobre a legislação de transparência dos vidros do veículo."],
  ["E se a película apresentar problema?", "A instalação tem garantia. Entre em contato pelo WhatsApp e avaliamos o caso."],
];

function Tick() {
  return (
    <span className="tick" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#inicio">Ir para o conteúdo</a>
      <SiteHeader />
      <main id="inicio">
        <section className="hero">
          <div className="wrap hero-intro">
            <div>
              <p className="eyebrow">Películas solares · Belo Horizonte e região</p>
              <h1>Arraste e veja o vidro com e sem película.</h1>
              <p className="lead">
                A foto clara é o vidro sem película. A escura é o mesmo vidro com a película.
                Tecnologia que protege. Acabamento que impressiona.
              </p>
            </div>
            <div>
              <div className="cta-row">
                <a className="btn btn-wa" href={WA} target="_blank" rel="noopener noreferrer">Pedir orçamento</a>
                <a className="btn btn-ghost" href="#servicos">Ver serviços</a>
              </div>
              <ul className="facts">
                <li><i />Garantia sobre a instalação</li>
                <li><i />No Cardoso ou no seu endereço</li>
              </ul>
            </div>
          </div>

          <div className="wrap ba-grid">
            <CompareSlider
              before="/bmw.jpg"
              after="/bmw-com.jpg"
              afterAlt="SUV cinza com película, vidros escuros"
              title="Veículo"
              subtitle="Automotivo"
              label="Comparar o veículo com e sem película"
              initial={52}
              frameClass="vehicle"
            />

            <CompareSlider
              before="/fachada-dia.jpg"
              after="/fachada-tarde.jpg"
              afterAlt="Fachada com película, vidro mais escuro"
              title="Fachada"
              subtitle="Residencial"
              label="Comparar a fachada com e sem película"
              initial={56}
            />
            <CompareSlider
              before="/maquina-2.jpg"
              after="/maquina.jpg"
              afterAlt="Cabine de máquina com película, vidro mais escuro"
              title="Cabine"
              subtitle="Máquina pesada"
              label="Comparar a cabine com e sem película"
              initial={48}
            />
          </div>
        </section>

        <section id="movimento">
          <div className="wrap video-block">
            <div>
              <p className="eyebrow">Em movimento</p>
              <h2>Aperte o play e veja de perto.</h2>
              <p>Um registro da aplicação na oficina, para você ver o acabamento de perto.</p>
            </div>
            <div className="video-frame">
              <video controls playsInline preload="metadata">
                <source src="/obra.mp4" type="video/mp4" />
                Seu navegador não reproduziu o vídeo. Chame no WhatsApp e a gente mostra os trabalhos.
              </video>
            </div>
          </div>
        </section>

        <section id="servicos">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Serviços</p>
              <h2>Película para cada tipo de vidro</h2>
              <p>Trabalhamos com veículos, residências e empresas. O valor depende do veículo e do tipo de vidro, por isso o orçamento é feito direto pelo WhatsApp.</p>
            </div>
            <div className="services">
              <article className="service">
                <img src="/bmw-com.jpg" alt="" />
                <div>
                  <h3>Automotivo</h3>
                  <p>Película para todos os vidros do carro, da linha popular às opções de maior desempenho. Também orientamos sobre a transparência permitida por lei.</p>
                  <a className="more" href={wa("automotiva")} target="_blank" rel="noopener noreferrer">Pedir orçamento automotivo</a>
                </div>
                <ul>
                  <li>Aplicação completa (full)</li>
                  <li>Só laterais e traseiro</li>
                  <li>Pára-brisa</li>
                  <li>Retirada de película antiga</li>
                  <li>Troca de película</li>
                </ul>
              </article>
              <article className="service">
                <img src="/fachada-tarde.jpg" alt="" />
                <div>
                  <h3>Residencial</h3>
                  <p>Janelas e vidros da casa ou apartamento com mais conforto e menos calor dentro dos cômodos.</p>
                  <a className="more" href={wa("residencial")} target="_blank" rel="noopener noreferrer">Pedir orçamento residencial</a>
                </div>
                <ul>
                  <li>Controle de calor e claridade</li>
                  <li>Privacidade</li>
                  <li>Blackout para quartos</li>
                  <li>Proteção contra raios UV</li>
                </ul>
              </article>
              <article className="service">
                <img src="/maquina.jpg" alt="" />
                <div>
                  <h3>Empresas</h3>
                  <p>Escritórios, lojas e frotas com aplicação combinada no horário que atrapalha menos o seu dia.</p>
                  <a className="more" href={wa("para empresa")} target="_blank" rel="noopener noreferrer">Pedir orçamento para empresa</a>
                </div>
                <ul>
                  <li>Escritórios e fachadas</li>
                  <li>Frotas de veículos</li>
                  <li>Cabines e máquinas</li>
                  <li>Atendimento no local</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="peliculas">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Linhas</p>
              <h2>Três caminhos, conforme o que você quer resolver</h2>
              <p>A escolha muda o conforto, a cor e o custo. No atendimento, a gente indica a melhor para o seu caso.</p>
            </div>
            <div className="types">
              <article className="type comum">
                <div className="swatch" aria-hidden="true" />
                <div className="body">
                  <h3>Película comum</h3>
                  <p>Reduz a claridade e dá privacidade. Boa opção para quem quer resolver o essencial com bom custo.</p>
                </div>
              </article>
              <article className="type carbon">
                <div className="swatch" aria-hidden="true" />
                <div className="body">
                  <h3>Carbon</h3>
                  <p>Acabamento fosco e cor estável, com melhor desempenho contra calor e claridade que a película comum.</p>
                </div>
              </article>
              <article className="type blue">
                <div className="swatch" aria-hidden="true" />
                <div className="body">
                  <h3>Window Blue</h3>
                  <p>Linha de maior desempenho para quem quer o máximo de conforto térmico dentro do veículo.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <div className="band" id="como-funciona">
        <section>
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Como funciona</p>
              <h2>Do primeiro contato à entrega</h2>
              <p>Você fala direto com quem faz o serviço, sem intermediário.</p>
            </div>
            <ol className="steps">
              <li>
                <h3>Você chama</h3>
                <p>Mande no WhatsApp o modelo e o ano do carro. Para residência ou empresa, mande fotos ou as medidas.</p>
              </li>
              <li>
                <h3>Orçamento</h3>
                <p>Passamos o valor e o tipo de película indicado para o seu caso.</p>
              </li>
              <li>
                <h3>Agendamento</h3>
                <p>Marcamos o dia e a hora no nosso espaço ou no seu endereço, em toda a região metropolitana.</p>
              </li>
              <li>
                <h3>Aplicação e entrega</h3>
                <p>Aplicamos, conferimos o acabamento com você e passamos as orientações de cuidado.</p>
              </li>
            </ol>
          </div>
        </section>
      </div>

      <section id="cuidado">
        <div className="wrap two">
          <div>
            <p className="eyebrow">Cuidado na aplicação</p>
            <h2>O resultado depende do que se faz antes da película</h2>
            <ul className="check">
              {checks.map((item) => (
                <li key={item}><Tick />{item}</li>
              ))}
            </ul>
          </div>
          <aside className="callout">
            <p className="eyebrow">Garantia</p>
            <h3>Garantia sobre a instalação</h3>
            <p>Todo serviço da Brfiilms tem garantia sobre a instalação. Se aparecer algum problema na aplicação, você chama e a gente resolve. Os detalhes da cobertura são passados na hora do orçamento e na entrega.</p>
          </aside>
        </div>
      </section>

      <section id="duvidas">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2>O que as pessoas mais perguntam</h2>
          </div>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="band" id="contato">
        <section>
          <div className="wrap contact">
            <div>
              <p className="eyebrow">Contato</p>
              <p className="big">Conte o que você precisa e receba o orçamento no WhatsApp.</p>
              <div className="cta-row">
                <a className="btn btn-wa" href={WA} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
                <a className="btn btn-ghost" href="https://www.instagram.com/brfiilms" target="_blank" rel="noopener noreferrer">Ver trabalhos no Instagram</a>
              </div>
              <dl>
                <div>
                  <dt>WhatsApp</dt>
                  <dd><a href="tel:+5531985000242">(31) 98500-0242</a></dd>
                </div>
                <div>
                  <dt>Instagram</dt>
                  <dd><a href="https://www.instagram.com/brfiilms" target="_blank" rel="noopener noreferrer">@brfiilms</a></dd>
                </div>
                <div>
                  <dt>Endereço do espaço</dt>
                  <dd>
                    Rua Augusto Muniz, 350A<br />
                    Cardoso, Belo Horizonte, MG<br />
                    <a href="https://www.google.com/maps/search/?api=1&query=Rua+Augusto+Muniz+350A+Cardoso+Belo+Horizonte+MG" target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
                  </dd>
                </div>
                <div>
                  <dt>Atendimento</dt>
                  <dd>No espaço, com agendamento, ou no seu endereço em toda a região metropolitana de Belo Horizonte.</dd>
                </div>
              </dl>
            </div>
            <div className="map">
              <iframe
                title="Mapa com a localização da Brfiilms no bairro Cardoso, Belo Horizonte"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Rua%20Augusto%20Muniz%20350A%20Cardoso%20Belo%20Horizonte&z=16&output=embed"
              />
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="wrap">
          <img className="footer-brand" src="/logo-footer.png" alt="Brfiilms. Tecnologia que protege. Acabamento que impressiona." width="880" height="586" />
          <div className="footer-row">
            <span>Brfiilms · Películas solares residenciais e automotivas</span>
            <span>Belo Horizonte, MG</span>
          </div>
        </div>
      </footer>
      <WhatsAppFloat href={WA} />
    </>
  );
}
