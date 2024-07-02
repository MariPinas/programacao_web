import { itemVenda } from './../model/ItemVenda';
import { ModalidadePaes } from "../model/ModalidadePaes";
import { VendaPaes } from "../model/VendaPaes";
import { EstoquePaes } from "../model/EstoquePaes";

//classe global para juntar/ligar todos arrays em uma classe e depois instanciar
export class globalClass{
    modalidadeList: ModalidadePaes[] = []
    estoqueList: EstoquePaes[] = []
    itemVendaList: itemVenda[] = []
    vendaPaesList: VendaPaes[] = []
}

//instancia que vai conter todos os arrays
export const globalData = new globalClass()