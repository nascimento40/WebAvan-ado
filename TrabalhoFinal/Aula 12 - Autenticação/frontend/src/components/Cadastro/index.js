import React, { useState } from 'react';
import api from '../../services/api';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [cvcCartao, setCvcCartao] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validação do número do cartão
        if (numeroCartao.length !== 20) {
            alert("O número do cartão deve conter exatamente 20 dígitos!");
            return;
        }

        // Validação do CVC
        if (cvcCartao.length !== 3) {
            alert("O CVC deve conter exatamente 3 dígitos!");
            return;
        }

        const bodyParam = {
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            cpf: cpf,
            fotoPerfil: fotoPerfil,
            cartaoCredito: {
                nome: nomeCartao,
                numero: numeroCartao,
                cvc: cvcCartao
            },
            email: email,
            senha: senha
        }

        api.post('/clientes', bodyParam)
            .then((response) => {
                console.log(response.data)
                alert(" O usuario " + response.data.codigo + " foi criado com sucesso!")
            })
            .catch((err) => {
                console.error(err)
                alert(" Ocorreu um erro! Veja no console ..")
            })
            .finally(() => {
                setNome("")
                setTelefone("")
                setEndereco("");
                setCpf("");
                setFotoPerfil("");
                setNomeCartao("");
                setNumeroCartao("");
                setCvcCartao("");
                setEmail("")
                setSenha("")
            })
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-6">
                    <h5>Cadastro de Cliente</h5>
                    <div className="form-group">
                        <label>
                            Nome:
                            <input type="text" className="form-control" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Telefone:
                            <input type="text" className="form-control" value={telefone} onChange={(e) => { setTelefone(e.target.value) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Endereço:
                            <input type="text" className="form-control" value={endereco} onChange={(e) => { setEndereco(e.target.value) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            CPF:
                            <input type="text" className="form-control" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Foto de Perfil:
                            <input type="file" className="form-control" onChange={(e) => { setFotoPerfil(e.target.files[0]) }} />
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>Dados do Cartão</h5>
                    <div className="form-group">
                        <label>
                            Nome do Cartão:
                            <input type="text" className="form-control" value={nomeCartao} onChange={(e) => { setNomeCartao(e.target.value) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Número do Cartão:
                            <input type="text" className="form-control" value={numeroCartao} onChange={(e) => { setNumeroCartao(e.target.value) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            CVC:
                            <input type="password" className="form-control" value={cvcCartao} onChange={(e) => { setCvcCartao(e.target.value) }} />
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="form-group">
                        <label>
                            Email:
                            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Senha:
                            <input type="password" className="form-control" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                        </label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
                </div>
            </div>
            <br />
        </div>
    );
}

