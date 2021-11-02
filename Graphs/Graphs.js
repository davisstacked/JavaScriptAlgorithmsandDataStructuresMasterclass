class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertext1);
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");