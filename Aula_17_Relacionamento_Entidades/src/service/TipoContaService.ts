import { TipoConta } from "../model/TipoConta";
import { TipoContaRepository } from "../repository/TipoContaRepository";

export class TipoContaService{
    tipocontaRepository: TipoContaRepository = new TipoContaRepository();

    async deletaTipoConta(tipoContaData:any): Promise<TipoConta> {
        const { id, descricao, codigoTipoConta} = tipoContaData;

        /*Select no repositorio de conta e verifica where tipoconta poupanca or corrente se a chamada do repository conta voltar verdadeira, entao nao pode deletar
        se voltar false pode deletar*/
        /*Agora chama o repositorio de tipo conta para poder deletar esse tipo de conta, somente se der false no de cima*/
        
        
        const tipoconta =  await this.tipocontaRepository.deletaTipoConta(id, descricao, codigoTipoConta);
        return tipoconta;
   }

   /*cadastrar tipo conta*/
   /*
   verificar em uma chamada pro repository se a descricao ja existe, com um select, se sim entao nao pode fazer esse cadastro, se for false, pode cadastrar
   */





   /* CADASTRO DE CONTAS
   chamar no repository de tipo de contas com um select pra ver se esse tipo de conta existe, se sim, entao pode cadastrar a conta, se nao, nao pode cadastrar e informe que nao foi possivel
   */
}