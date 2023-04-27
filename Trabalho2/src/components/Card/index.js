import "./Card.css";

const card = [{
  "plano": "Plano Básico",
  "preco": "R$ 100,00",
  "descricao": "Este plano seria voltado para os clientes que querem uma seleção básica de filmes a um preço acessível."
},
{
  "plano": "Plano Intermediário",
  "preco": "R$ 150,00",
  "descricao": "Este plano seria voltado para clientes que querem uma seleção mais ampla de filmes e recursos adicionais, mas ainda a um preço acessível."
},
{
  "plano": "Plano Premium",
  "preco": "R$ 200,00",
  "descricao": "Este plano seria voltado para clientes que querem acesso a uma ampla seleção de filmes e recursos premium."
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
                <h3 className="card-title">{card.plano}</h3>
                <p>{card.preco}</p>
                <p className="card-text">{card.descricao}</p>
                <p>{card.nota}</p>
                <a
                  href={`/detalhes/${card.nome}`}
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