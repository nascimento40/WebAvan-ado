import "./Card.css";

const card = [{
  "plano": "Plano A",
  "nome": "Premium",
  "preco": "R$ 2.000,00",
  "descricao": "Este plano seria voltado para clientes que querem acesso a uma ampla seleção de filmes e recursos premium."
},
{
  "plano": "Plano B",
  "nome": "Intermediário",
  "preco": "R$ 1.500,00",
  "descricao": "Este plano seria voltado para clientes que querem uma seleção mais ampla de filmes e recursos adicionais, mas ainda a um preço acessível."
},
{
  "plano": "Plano C",
  "nome": "Básico",
  "preco": "R$ 1.000,00",
  "descricao": "Este plano seria voltado para os clientes que querem uma seleção básica de filmes a um preço acessível."
}
]

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {card.map((card, i) => (
          <div className="col" key={i.toString()}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{card.plano} ({card.nome})</h3>
                <p>{card.preco}</p>
                <p className="card-text">{card.descricao}</p>
                <p>{card.nota}</p>
                <a
                  href={`/planos/${card.nome}`}
                >
                  <div className="btn btn-primary">
                    Adquirir
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
