class Matrix {
  constructor(rows,columns) {
    this.matrix = [];
    this.rows = 0;
    this.columns = 0;
  }

  addRow(row){
    this.matrix.push(row);
    this.rows += 1;
  }

  addColumn(column){
    this.columns += 1;
    for (var i = 0; i < column.length; i++) {
      this.matrix[this.columns]=column[i];
    }
  }

}
