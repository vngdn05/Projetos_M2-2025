// Classe Pilha
class PilhaProntuarios {
    constructor() {
      this.prontuarios = [];
    }
  
    empilhar(item) {
      this.prontuarios.push(item);
      console.log(`✔️ Elemento '${item}' empilhado.`);
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.prontuarios.pop();
      console.log(`❌ Elemento '${removido}' desempilhado.`);
      return removido;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.prontuarios[this.prontuarios.length - 1];
    }
  
    estaVazia() {
      return this.prontuarios.length === 0;
    }
  
    tamanho() {
      return this.prontuarios.length;
    }
  
    limpar() {
      this.prontuarios = [];
      console.log('🧹 Pilha esvaziada.');
    }
}

// Classe Fila (FIFO)
class FilaPacientes extends PilhaProntuarios {
    constructor() {
      this.pacientes = [];
      super();
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.pacientes.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.pacientes.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
      this.prontuarios.empilhar(removido);
      console.log(`📋 Prontuário '${removido}' adicionado à pilha.`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.pacientes[0];
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.pacientes.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.pacientes.length;
    }
  
    // Limpa a fila
    limpar() {
      this.pacientes = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂️ Fila atual:', this.pacientes.join(' -> ') || 'vazia');
      console.log('📋 Prontuários:', this.prontuarios.slice().reverse().join(' <- topo') || 'vazia');
    }
}


let pacientes = new FilaPacientes();
pacientes.enfileirar('Rodrigo');
pacientes.enfileirar('Diogo');
pacientes.enfileirar('Enzo');
pacientes.enfileirar('Alice');
pacientes.enfileirar('Adriana');
pacientes.imprimir();
pacientes.desenfileirar();
pacientes.desenfileirar();
pacientes.imprimir();
