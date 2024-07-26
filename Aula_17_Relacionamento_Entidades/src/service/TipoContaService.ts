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

    async deletaTipoConta(tipoConta: TipoConta): Promise<TipoConta> {
        console.log(tipoConta instanceof TipoConta)
        if (!tipoConta) {
            throw new Error("O parâmetro passado não é um objeto do tipo TipoConta");
        }

        const result: TipoConta[] = await this.tipocontaRepository.getTipoContaPorDescricaoOuCodigoOuId(tipoConta.descricao, tipoConta.codigoTipoConta, tipoConta.id);

        
        if(result.length == 0){
            throw new Error("Tipo de conta não encontrada. Verifique os campo(s) informados!");
        }

        const listaContas: Conta[] = await this.contaRepository.getContaPorIdOuNumeroOuTipo(undefined, undefined, result[0].codigoTipoConta)

        if(listaContas.length > 0){
            throw new Error("O tipo de conta não pode ser excluído pois existe vínculo em contas cadastradas.");
        }

        this.tipocontaRepository.deleteTipoConta(tipoConta.id)
        return tipoConta;
    
   }

    getTipoConta(id?:any, descricao?:any, codigoTipoConta?:any ):Promise<TipoConta[]>{
        return this.tipocontaRepository.getTipoContaPorDescricaoOuCodigoOuId(descricao, codigoTipoConta,id);
    }

    getTiposConta():Promise<TipoConta[]>{
        return this.tipocontaRepository.listaTipoConta();
    }
}