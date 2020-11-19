export class Operacoes{
    public vl1: number = 0;
    public vl2: number = 0;
    public vl3: number = 3;
    public indice: number = 0;
    public resultado: number = 0;

    toString(valor: number){
        return valor.toString;
    }
    
    public historico: string[] = new Array();

    
    public alimentaArray(): void{
        this.historico[this.indice] = (this.vl1 + " * " + this.vl2 + " = " + this.resultado + '\n')
        this.indice++;
    }

    public Multiplica(valor1: number, valor2: number){
        
        if ((valor1 != 0) && (valor2 != 0)) {
            this.vl1 = valor1
            this.vl2 = valor2
            this.resultado = this.vl1 * this.vl2;
            this.alimentaArray();
        }
        return this.resultado
    }



    constructor(){}

}