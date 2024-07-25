import { TipoConta } from "../model/TipoConta";
import { TipoContaRepository } from "../repository/TipoContaRepository";

export class TipoContaService{
    tipocontaRepository: TipoContaRepository = new TipoContaRepository();

    async deletaTipoConta(tipoContaData:any): Promise<TipoConta> {
        const { id, descricao, codigoTipoConta} = tipoContaData;
        const tipoconta =  await this.tipocontaRepository.deletaTipoConta(id, descricao, codigoTipoConta);
        return tipoconta;
   }
}