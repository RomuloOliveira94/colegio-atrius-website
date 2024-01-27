
const phoneNumber = "5585985962220"

function submitForm() {
    document.querySelector('.form-matricula').addEventListener('submit', getFormData)
}

function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const nomeResp = formData.get('nome_resp')
    const cpf = formData.get('cpf')
    const enderecoRua = formData.get('endereco_rua')
    const enderecoNumero = formData.get('endereco_numero')
    const enderecoBairro = formData.get('endereco_bairro')
    const nomeAluno = formData.get('nome_aluno')
    const serie = formData.get('serie')
    const turno = formData.get('turno')
    const obs = formData.get('obs')

    if(!nomeResp || !cpf || !enderecoRua || !enderecoNumero || !enderecoBairro || !nomeAluno || !serie || !turno ) {
        document.querySelector('.error').innerText = 'Preencha todos os campos obrigatórios'
        return
    }


    const data =  {
        nomeResp,
        cpf,
        enderecoRua,
        enderecoNumero,
        enderecoBairro,
        nomeAluno,
        serie,
        turno,
        obs
    }

    return sendToZap(data)
}

function sendToZap(data) {

    const textTemplate = `*REALIZEI MINHA PRÉ-MATRICULA PELO SITE!*

    *Dados*
    
    Nome do Responsável: *${data.nomeResp}*
    Cpf: *55522255584*
    Endereço: *${data.enderecoRua}, ${data.enderecoNumero} - ${data.enderecoBairro}*
    Nome do aluno: *${data.nomeAluno}*
    Série: *${data.serie}*
    Turno: *${data.turno}*
    Observações: *${data.obs}*
    
    *Obs.: Comparecer ao colégio com as seguintes documentações:*
    RG e CPF (Responsáveis)
    Certidão de nascimento (aluno)
    Comprovante de Endereço
    Foto 3x4 (aluno)
    Declaração de Transferência e/ou Histórico escolar
    Pasta escolar
    `

    const encondeText = encodeURIComponent(textTemplate)

    console.log(encondeText);

    const whatsAppLink = `https://wa.me//${phoneNumber}?text=${encondeText}`

    window.location.href = whatsAppLink;
}
