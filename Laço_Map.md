# **MAP( )**

## **Pra Que Serve?**
O método **map( )** invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

## **Sintaxe**

#### ``` array.map(callback[, thisArg]) ```

## **Parâmetros**
 - *callback*
##### Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:

##### 1. **valorAtual** : O valor do elemento original do Array de origem. 
##### 2. **índice** : O índice do elemento atual que está sendo processado no array.
##### 3. **array** : O Array de origem.
- *thisArg*
##### Opcional. Valor a ser utilizado como o this no momento da execução da função callback.


## **Como Funciona?**
#### O método **map** chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e **constrói um novo array** com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.

#### A função **callback** é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.

#### Se o parametro thisArg foi passado para o método map, ele será repassado para a função callback no momento da invocação para ser utilizado como o this. Caso contrário, o valor undefined será repassado para uso como o this. O valor do this a ser repassado para o callback deve respeitar as regras para determinar como o this é acessado por uma função (em inglês).

#### **O método map não modifica o array original**. No entanto, a função callback invocada por ele pode fazê-lo.

#### A lista de elementos que serão processados pelo map é montada antes da primeira invocação à função callback. Se um elemento for acrescentado ao array original após a chamada ao map, ele não será visível para o callback. Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método map invocar o callback. Elementos removidos não serão visitados.


## **Quando e Como Usar o MAP?**
### **Exemplo 1**
#### *Mapeando um array de números para um array de raízes quadradas.*

##### O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz quadrada de cada número do primeiro array.

``` 
var numeros = [1, 4, 9];
var raiz = numeros.map(Math.sqrt);

// raiz é [1, 2, 3], numeros ainda é [1, 4, 9]
```

### **Exemplo 2** 
#### *Mapeando um array de números usando uma função callback que contém um argumento.*

##### O código a seguir mostrar como o método map funciona quando a função callback possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o map itera sobre o array original.

```
var numeros = [1, 4, 9];
var dobro = numeros.map( (num) => {
  return num * 2;
});

// dobro é agora [2, 8, 18]. numeros ainda é [1, 4, 9]
```