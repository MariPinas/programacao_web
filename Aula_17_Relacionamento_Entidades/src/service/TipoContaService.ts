import { TipoConta } from "../model/TipoConta";
import { ContaRepository } from "../repository/ContaRepository";
import { TipoContaRepository } from "../repository/TipoContaRepository";
import { Conta } from "../model/Conta";
export class TipoContaService{
    tipocontaRepository: TipoContaRepository = new TipoContaRepository();
    contaRepository = new ContaRepository();
    
    async insereTipoConta(tipoContaData:any): Promise<TipoConta>{
        const {descricao} = tipoContaData;
        if (descricao == undefined) {
            throw new Error("Informações incompletas ou incorretas");
        }

        const result: TipoConta[] = await this.tipocontaRepository.getTipoContaPorDescricaoOuCodigoOuId(descricao)

        if(result.length > 0){
            throw new Error("Descrição já cadastrada.");
        }

        return this.tipocontaRepository.insertTipoConta(new TipoConta(0,descricao));
    }

    async atualizaTipoConta(tipoConta: TipoConta):Promise<TipoConta>{
        console.log(tipoConta instanceof TipoConta)
        if (!tipoConta) {
            throw new Error("O parâmetro passado não é um objeto do tipo TipoConta");
        }

        const result: TipoConta[] = await this.tipocontaRepository.getTipoContaPorDescricaoOuCodigoOuId(undefined, undefined, tipoConta.id);

        if(result.length == 0){
            throw new Error("Tipo de conta não encontrada.");
        }

        this.tipocontaRepository.updateTipoConta(tipoConta);
        await this.contaRepository.atualizaTipoConta(result[0].codigoTipoConta,tipoConta.codigoTipoConta)
        return tipoConta;
    }

    async deletaTipoConta(tipoContaData:any): Promise<TipoConta> {
        const { id, descricao, codigoTipoConta} = tipoContaData;

        /*Select no repositorio de conta e verifica where tipoconta poupanca or corrente se a chamada do repository conta voltar verdadeira, entao nao pode deletar
        se voltar false pode deletar*/
        /*Agora chama o repositorio de tipo conta para poder deletar esse tipo de conta, somente se der false no de cima*/
        
        
        const tipoconta =  await this.tipocontaRepository.deleteTipoConta(id, descricao, codigoTipoConta);
        return tipoconta;
   }

   /*cadastrar tipo conta*/
   /*
   verificar em uma chamada pro repository se a descricao ja existe, com um select, se sim entao nao pode fazer esse cadastro, se for false, pode cadastrar
   */





   /* CADASTRO DE CONTAS
   chamar no repository de tipo de contas com um select pra ver se esse tipo de conta existe, se sim, entao pode cadastrar a conta, se nao, nao pode cadastrar e informe que nao foi possivel
   */

   getTipoConta(id?:any, descricao?:any, codigoTipoConta?:any ):Promise<TipoConta[]>{
    return this.tipocontaRepository.getTipoContaPorDescricaoOuCodigoOuId(descricao, codigoTipoConta,id);
}
}