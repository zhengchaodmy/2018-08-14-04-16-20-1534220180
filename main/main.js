module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
        最大值 = ${sequence.maxmun()}
	元素数量 = ${sequence.length()} 
	平均值 = ${sequence.average()}
    `);
};

class Sequence {
  constructor(sequence) {
       this.sequence = sequence;// Write your code here
  }

  minimum() {
      return Math.min.apply(null,sequence);// Write your code here
  }
  maxmum(){
      return Math.min.apply(null,sequence);
  }
  length(){
	  return sequence.length;
  }
	  
  average(){
	  var sum = 0;
	  for(var i=0;i<sequence.length;i++){
		  sum += sequence[i];
	  }
      return sequence.reduce(sum)/sequence.length;
  }	  
  // Write your code here
}
